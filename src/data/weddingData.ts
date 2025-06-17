import { EventDetails, TimelineEvent } from '../types';

// Main wedding info
export const coupleInfo = {
  groomFullName: "M. Yazid Al Busthomi",
  brideFullName: "Sarirotul Latifah",
  groomShortName: "Yazid",
  brideShortName: "Tifa",
  weddingDate: "2025-12-12", // ISO format for the main date (Akad)
};

// Wedding events
export const events: EventDetails[] = [
  {
    id: "akad",
    title: "Akad Nikah",
    date: "12 Desember 2025",
    time: "09:00 - 11:00",
    location: "Gedung Pernikahan, Kota",
    description: "",
    mapsUrl: "https://maps.google.com/?q=Wedding+Venue+City"
  },
  {
    id: "reception-bride",
    title: "Resepsi di Kediaman Mempelai Wanita",
    date: "13 Desember 2025",
    time: "10:00 - 15:00",
    location: "Kediaman Keluarga Mempelai Wanita, Kota",
    description: "",
    mapsUrl: "https://maps.google.com/?q=Bride+Family+Residence+City"
  },
  {
    id: "reception-groom",
    title: "Resepsi di Kediaman Mempelai Pria",
    date: "14 Desember 2025",
    time: "10:00 - 15:00",
    location: "Kediaman Keluarga Mempelai Pria, Kota",
    description: "",
    mapsUrl: "https://maps.google.com/?q=Groom+Family+Residence+City"
  }
];

// Love story timeline
export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: "Januari 2020",
    title: "Pertemuan Pertama",
    description: "Kami bertemu melalui teman bersama di sebuah acara universitas dan langsung merasakan kecocokan."
  },
  {
    id: 2,
    date: "Juni 2021",
    title: "Kencan Pertama",
    description: "Kencan pertama kami di sebuah kafe yang nyaman, dimana kami berbincang selama berjam-jam."
  },
  {
    id: 3,
    date: "Desember 2022",
    title: "Jatuh Cinta",
    description: "Seiring waktu berjalan, hubungan kami semakin dekat dan kami saling jatuh cinta."
  },
  {
    id: 4,
    date: "Maret 2024",
    title: "Lamaran",
    description: "Di tengah keindahan alam saat liburan akhir pekan, dia melamar dan dia menerima!"
  },
  {
    id: 5,
    date: "Desember 2025",
    title: "Pernikahan Kami",
    description: "Hari dimana kami resmi memulai perjalanan bersama sebagai suami istri."
  }
];