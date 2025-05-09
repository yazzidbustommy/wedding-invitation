import { EventDetails, GalleryImage, TimelineEvent } from '../types';

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
    description: "Kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara akad nikah kami sebagai awal perjalanan kami sebagai suami istri.",
    mapsUrl: "https://maps.google.com/?q=Wedding+Venue+City"
  },
  {
    id: "reception-bride",
    title: "Resepsi di Kediaman Mempelai Wanita",
    date: "13 Desember 2025",
    time: "10:00 - 15:00",
    location: "Kediaman Keluarga Mempelai Wanita, Kota",
    description: "Kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara resepsi pernikahan kami di kediaman mempelai wanita.",
    mapsUrl: "https://maps.google.com/?q=Bride+Family+Residence+City"
  },
  {
    id: "reception-groom",
    title: "Resepsi di Kediaman Mempelai Pria",
    date: "14 Desember 2025",
    time: "10:00 - 15:00",
    location: "Kediaman Keluarga Mempelai Pria, Kota",
    description: "Kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara resepsi pernikahan kami di kediaman mempelai pria.",
    mapsUrl: "https://maps.google.com/?q=Groom+Family+Residence+City"
  }
];

// Gallery images
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Foto pasangan bergandengan tangan"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Foto pasangan tersenyum bersama"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3805762/pexels-photo-3805762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Foto pasangan berjalan di pantai"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Foto pasangan di taman"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Foto pertunangan"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Foto pasangan berdansa"
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
];`