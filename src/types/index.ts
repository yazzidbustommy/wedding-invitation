export interface EventDetails {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  mapsUrl: string;
}

export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
}

export interface RSVPFormData {
  name: string;
  phone: string;
  attending: boolean;
  numberOfGuests: number;
  message: string;
}