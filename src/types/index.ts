export type PageId = 'home' | 'about' | 'events' | 'gallery' | 'team' | 'contact';

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  subtitle?: string;
  description?: string;
  category: 'ceremony' | 'academic' | 'games' | 'cultural' | 'food';
  location: string;
  speaker?: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'highlights' | 'past' | 'campus' | 'teaser';
  imageUrl: string;
  caption: string;
  date: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'faculty' | 'coordinator' | 'volunteer';
  image: string;
  bio?: string;
  email?: string;
}

export interface RSVPData {
  name: string;
  rollNo: string;
  stream: string;
  foodPreference: 'veg' | 'non-veg';
  ticketCode?: string;
}
