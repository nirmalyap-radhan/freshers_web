import type { ScheduleItem, GalleryItem, TeamMember } from '../types';

export const EVENT_DETAILS = {
  title: "Integral Festa",
  subtitle: "AN INFINITY FUSION",
  tagline: "Freshers Welcome 2026",
  department: "DEPARTMENT OF MATHEMATICS",
  institution: "Science PG Block, Adaspur",
  date: "14th October 2026",
  time: "10:00 AM",
  venue: "IQAC Hall, Science PG Block",
  address: "Adaspur, Cuttack, Odisha - 754011",
  targetDate: "2026-10-14T10:00:00+05:30",
  instagramUrl: "https://www.instagram.com/unc_mathematics?stkn=ajFycWFidHMwdXNl",
  instagramHandle: "@unc_mathematics",
  contacts: [
    { number: "8260068120", formatted: "+91 82600 68120", label: "Contact Helpline 1" },
    { number: "6371904697", formatted: "+91 63719 04697", label: "Contact Helpline 2" },
    { number: "9937668627", formatted: "+91 99376 68627", label: "Contact Helpline 3" },
  ]
};

export const SCHEDULE_DATA: ScheduleItem[] = [
  {
    id: "1",
    time: "10:00 AM",
    title: "Welcome & Registration",
    subtitle: "Receiving Freshers & Welcome Kit",
    description: "Registration desk opens at IQAC Hall lobby. Juniors receive personalized Infinity Fusion badges, floral corsages, and event guides.",
    category: "ceremony",
    location: "IQAC Hall Entrance",
    icon: "UserCheck"
  },
  {
    id: "2",
    time: "10:30 AM",
    title: "Inaugural Ceremony",
    subtitle: "Lamping & Auspicious Invocation",
    description: "Traditional lamp lighting by HOD & Faculty members, followed by Saraswati Vandana and welcome address by Senior Batch.",
    category: "ceremony",
    location: "Science PG IQAC Hall",
    speaker: "Dr. Ajit Kumar Patra (HOD, Mathematics)",
    icon: "Sparkles"
  },
  {
    id: "3",
    time: "11:00 AM",
    title: "Keynote Speeches & Addresses",
    subtitle: "Addresses by Chief Guest, Principal & Teachers",
    description: "Inspirational addresses, wisdom and insights shared by the Honorable Chief Guest, College Principal, HOD, and esteemed faculty members.",
    category: "ceremony",
    location: "Science PG IQAC Hall",
    speaker: "Chief Guest, Principal & Teachers",
    icon: "Sparkles"
  },
  {
    id: "4",
    time: "12:00 PM",
    title: "Stage Games & Performances",
    subtitle: "Unleashing Junior Talent",
    description: "Spot talent showcase, rapid-fire Q&A, hilarious funny awards, and musical acoustic jamming sessions by the departmental band.",
    category: "games",
    location: "Main Auditorium Stage",
    icon: "Music"
  },
  {
    id: "5",
    time: "01:00 PM",
    title: "Gourmet Lunch",
    category: "food",
    location: "College Stadium",
    icon: "Utensils"
  },
  {
    id: "6",
    time: "02:00 PM",
    title: "Fun Activities & Icebreakers",
    subtitle: "Mr. & Ms. Fresher Audition Rounds",
    description: "Ramp walk, personality round, talent showcase, and witty Q&A for the coveted titles of Mr. & Ms. Integral Festa 2026.",
    category: "games",
    location: "Main Stage",
    icon: "Trophy"
  },
  {
    id: "7",
    time: "03:30 PM",
    title: "Grand Cultural Extravaganza",
    subtitle: "Dance, Music & Dramatic Acts",
    description: "Electrifying dance routines, classical fusion acts, beatboxing, drama performance, and DJ sunset dance floor session.",
    category: "cultural",
    location: "Main Auditorium Stage",
    icon: "Flame"
  },
  {
    id: "8",
    time: "04:30 PM",
    title: "Felicitation & Closing Ceremony",
    subtitle: "Crownings, Momento Distribution & Vote of Thanks",
    description: "Crowing of Mr. & Ms. Fresher 2026, award distribution for math activities, group photograph, and vote of thanks.",
    category: "ceremony",
    location: "Main Stage",
    icon: "Crown"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Departmental Elegance",
    category: "highlights",
    imageUrl: "/gallery/IMG_3969.JPG",
    caption: "Senior Scholars & Faculty celebrations at Science PG Block.",
    date: "Integral Festa 2026"
  },
  {
    id: "g2",
    title: "Fresher Welcome Gala",
    category: "highlights",
    imageUrl: "/gallery/IMG_3970.JPG",
    caption: "Warm reception and inaugural moments at IQAC Hall.",
    date: "Decorations & Gala"
  },
  {
    id: "g3",
    title: "Cultural Fusion Stage",
    category: "past",
    imageUrl: "/gallery/IMG_3971.JPG",
    caption: "Vibrant stage performances by mathematics scholars.",
    date: "Fest Memories"
  },
  {
    id: "g4",
    title: "Departmental Campus",
    category: "campus",
    imageUrl: "/gallery/IMG_3972.JPG",
    caption: "Science PG Block campus surrounded by lush green foliage.",
    date: "Adaspur Campus"
  },
  {
    id: "g5",
    title: "Infinity Fusion Fest",
    category: "teaser",
    imageUrl: "/gallery/IMG_3974.JPG",
    caption: "Artistic mathematical installations and floral decor.",
    date: "Art Installation"
  },
  {
    id: "g6",
    title: "Joyous Moments & Smiles",
    category: "highlights",
    imageUrl: "/gallery/IMG_3975.JPG",
    caption: "Freshers and seniors enjoying the interactive icebreaker activities.",
    date: "Fresher Welcome"
  },
  {
    id: "g7",
    title: "Festive Celebrations",
    category: "past",
    imageUrl: "/gallery/IMG_3976.JPG",
    caption: "Unforgettable memories of Integral Festa celebration.",
    date: "Fest Moments"
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: "t1",
    name: "Dr. Shibani Mohapatra",
    role: "Head of Department & Patron",
    category: "faculty",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: "Professor in Differential Equations & Topology. Guiding Integral Festa with academic vision.",
    email: "hod.math@sciencepg.edu.in"
  },
  {
    id: "t2",
    name: "Prof. Rajesh Kumar Mishra",
    role: "Faculty Coordinator",
    category: "faculty",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bio: "Associate Professor in Real Analysis & Complex Dynamics. Mentor for student cultural activities.",
    email: "rkmishra@sciencepg.edu.in"
  },
  {
    id: "t3",
    name: "Ananya Routray",
    role: "Student President & Lead Convener",
    category: "coordinator",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bio: "M.Sc. Final Year (Mathematics). Spearheading fest management and artistic design.",
    email: "ananya.msc24@sciencepg.edu.in"
  },
  {
    id: "t4",
    name: "Soumya Ranjan Panda",
    role: "Event Operations & Logistics Head",
    category: "coordinator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "M.Sc. Final Year. Managing venue arrangements, sound systems, and timing schedules.",
    email: "soumya.math@sciencepg.edu.in"
  },
  {
    id: "t5",
    name: "Priyanka Sahoo",
    role: "Cultural & Creative Lead",
    category: "coordinator",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    bio: "Curator of stage acts, dance routines, floral arrangements, and aesthetic identity.",
    email: "priyanka.c@sciencepg.edu.in"
  },
  {
    id: "t6",
    name: "Subham Das",
    role: "Technical & Web Coordinator",
    category: "coordinator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: "M.Sc. 1st Year. Digital registration portal lead and media coordinator.",
    email: "subham.tech@sciencepg.edu.in"
  },
  {
    id: "t7",
    name: "Lipsa Tripathy",
    role: "Volunteer Lead - Reception",
    category: "volunteer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    bio: "Welcoming guests, freshers kit distribution, and hospitality management."
  },
  {
    id: "t8",
    name: "Ayush Samal",
    role: "Volunteer Lead - Media & Photo",
    category: "volunteer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    bio: "Capturing candid moments, stage photography, and video highlights."
  }
];
