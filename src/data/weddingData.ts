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
    date: "12 December 2025",
    time: "09:00 - 11:00",
    location: "Wedding Venue, City",
    description: "We are honored to invite you to witness our sacred marriage ceremony (Akad Nikah) as we begin our journey together as husband and wife."
  },
  {
    id: "reception-bride",
    title: "Reception at Bride's Family",
    date: "13 December 2025",
    time: "10:00 - 15:00",
    location: "Bride's Family Residence, City",
    description: "Join us for a reception celebrating our marriage at the bride's family residence. We look forward to sharing this joyous occasion with you."
  },
  {
    id: "reception-groom",
    title: "Reception at Groom's Family",
    date: "14 December 2025",
    time: "10:00 - 15:00",
    location: "Groom's Family Residence, City",
    description: "We cordially invite you to join us for a reception at the groom's family residence as we continue to celebrate our union."
  }
];

// Gallery images
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Couple holding hands"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Couple smiling together"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3805762/pexels-photo-3805762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Couple walking on beach"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Couple in garden"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Engagement photo"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Couple dancing"
  }
];

// Love story timeline
export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: "January 2020",
    title: "First Meeting",
    description: "We met through mutual friends at a university event and instantly connected."
  },
  {
    id: 2,
    date: "June 2021",
    title: "First Date",
    description: "Our first official date was at a quaint cafe where we talked for hours."
  },
  {
    id: 3,
    date: "December 2022",
    title: "Falling in Love",
    description: "As we spent more time together, our connection grew deeper and we fell in love."
  },
  {
    id: 4,
    date: "March 2024",
    title: "The Proposal",
    description: "During a weekend getaway, surrounded by nature's beauty, he proposed and she said yes!"
  },
  {
    id: 5,
    date: "December 2025",
    title: "Our Wedding",
    description: "The day we officially begin our journey together as husband and wife."
  }
];