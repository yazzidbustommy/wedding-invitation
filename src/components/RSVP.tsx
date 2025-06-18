import React, { useState, useEffect } from 'react';
import type { RSVPFormData } from '../types';

interface RSVPProps {
  guestName?: string;
}

const RSVP: React.FC<RSVPProps> = ({ guestName }) => {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    phone: '',
    attending: true,
    numberOfGuests: 1,
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pre-fill name if guest name is available, but allow editing
  useEffect(() => {
    if (guestName && !formData.name) {
      setFormData(prev => ({ ...prev, name: guestName }));
    }
  }, [guestName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
    } else if (name === 'numberOfGuests') {
      setFormData(prev => ({ ...prev, [name]: parseInt(value) || 0 }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Check if Supabase environment variables are available
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Konfigurasi Supabase belum diatur. Silakan hubungi administrator.');
      }

      // Use Supabase edge function to proxy to Google Sheets
      const response = await fetch(`${supabaseUrl}/functions/v1/rsvp-proxy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          attending: formData.attending ? 'Ya' : 'Tidak',
          numberOfGuests: formData.numberOfGuests,
          message: formData.message,
          timestamp: new Date().toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Gagal mengirim RSVP: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      
      if (result.error) {
        throw new Error(result.error);
      }

      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        attending: true,
        numberOfGuests: 1,
        message: ''
      });
    } catch (err) {
      console.error('Error saat mengirim RSVP:', err);
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat mengirim RSVP. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-gray-800 mb-2">Kirim Ucapan dan Doa</h2>
            <p className="text-gray-600">Mohon konfirmasi kehadiran Anda</p>
            <div className="w-16 h-0.5 bg-pink-300 mx-auto mt-4"></div>
          </div>
          
          {submitted ? (
            <div className="text-center bg-green-50 rounded-lg p-8">
              <h3 className="font-serif text-xl text-gray-800 mb-3">Terima Kasih!</h3>
              <p className="text-gray-600">RSVP Anda telah kami terima. Sampai jumpa di hari bahagia kami!</p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="bg-pink-50 rounded-lg p-8 shadow-sm"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-300 focus:border-pink-300"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor HP/WA <span className="text-pink-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Contoh: 08123456789"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-300 focus:border-pink-300"
                />
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="attending"
                    name="attending"
                    checked={formData.attending}
                    onChange={handleChange}
                    className="h-4 w-4 text-pink-500 focus:ring-pink-300 border-gray-300 rounded"
                  />
                  <label htmlFor="attending" className="ml-2 block text-sm text-gray-700">
                    Saya akan hadir
                  </label>
                </div>
              </div>
              
              {formData.attending && (
                <div className="mb-6">
                  <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700 mb-1">
                    Jumlah Tamu <span className="text-pink-500">*</span>
                  </label>
                  <select
                    id="numberOfGuests"
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-300 focus:border-pink-300"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} orang</option>
                    ))}
                  </select>
                </div>
              )}
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Ucapan untuk Mempelai
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-300 focus:border-pink-300"
                ></textarea>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-3 ${
                  loading 
                    ? 'bg-gray-400' 
                    : 'bg-pink-400 hover:bg-pink-500'
                } text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300`}
              >
                {loading ? 'Mengirim...' : 'Kirim RSVP'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;