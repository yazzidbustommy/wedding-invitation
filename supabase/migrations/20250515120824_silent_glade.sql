/*
  # Membuat tabel RSVP

  1. Tabel Baru
    - `rsvp`
      - `id` (uuid, primary key)
      - `name` (text, nama tamu)
      - `phone` (text, nomor telepon)
      - `attending` (boolean, status kehadiran)
      - `number_of_guests` (integer, jumlah tamu)
      - `message` (text, pesan untuk pengantin)
      - `created_at` (timestamp, waktu pengisian)

  2. Keamanan
    - Mengaktifkan RLS pada tabel `rsvp`
    - Menambahkan policy untuk mengizinkan semua orang menambah data
    - Menambahkan policy untuk membaca data sendiri
*/

CREATE TABLE IF NOT EXISTS rsvp (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  attending boolean DEFAULT true,
  number_of_guests integer DEFAULT 1,
  message text,
  created_at timestamptz DEFAULT now()
);

-- Mengaktifkan Row Level Security
ALTER TABLE rsvp ENABLE ROW LEVEL SECURITY;

-- Policy untuk menambah data (semua orang bisa)
CREATE POLICY "Semua orang bisa mengisi RSVP"
ON rsvp FOR INSERT
TO public
WITH CHECK (true);

-- Policy untuk membaca data (hanya data sendiri)
CREATE POLICY "Tamu bisa melihat RSVP mereka sendiri"
ON rsvp FOR SELECT
TO public
USING (phone = current_user);