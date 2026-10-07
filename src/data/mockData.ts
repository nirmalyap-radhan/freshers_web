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
    location: "Main Auditorium Stage",
    speaker: "Prof. Dr. S. K. Das (HOD, Mathematics)",
    icon: "Sparkles"
  },
  {
    id: "3",
    time: "11:00 AM",
    title: "Interactive Math Fusion Activities",
    subtitle: "Puzzles, Infinity Quiz & Logic Riddles",
    description: "Fun mathematical icebreakers, Fibonacci sequence speed challenge, and interactive puzzle rounds with exciting instant rewards.",
    category: "academic",
    location: "Main Stage & Interactive Zone",
    icon: "Brain"
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
    title: "Gourmet Lunch & Networking",
    subtitle: "Feast & Informal Interactions",
    description: "Delightful buffet lunch served with floral dining ambience. Seniors & freshers bond over delicious food and conversations.",
    category: "food",
    location: "PG Block Dining Pavilion",
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
    title: "Elegance in Numbers",
    category: "highlights",
    imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
    caption: "Students celebrating together at the previous inaugural gala in IQAC Hall.",
    date: "Integral Festa 2025"
  },
  {
    id: "g2",
    title: "Botanical Ambience",
    category: "highlights",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    caption: "Floral decorations framing the entrance of Science PG Block.",
    date: "Decorations Preview"
  },
  {
    id: "g3",
    title: "Cultural Fusion Stage",
    category: "past",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    caption: "Vibrant stage performances by senior mathematics scholars.",
    date: "Fest Memories"
  },
  {
    id: "g4",
    title: "Departmental Campus",
    category: "campus",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    caption: "Science PG Block campus surrounded by lush green foliage.",
    date: "Adaspur Campus"
  },
  {
    id: "g5",
    title: "Mathematical Artistry",
    category: "teaser",
    imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    caption: "Geometrical aesthetics and infinity design installation.",
    date: "Art Installation"
  },
  {
    id: "g6",
    title: "Joyous Moments & Smiles",
    category: "highlights",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    caption: "Freshers and seniors enjoying the interactive icebreaker activities.",
    date: "Fresher Welcome"
  },
  {
    id: "g7",
    title: "Acoustic Sunset Jam",
    category: "past",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    caption: "Unplugged musical performances as dusk settled over campus.",
    date: "Musical Session"
  },
  {
    id: "g8",
    title: "Trophy & Recognition",
    category: "highlights",
    imageUrl: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80",
    caption: "Golden trophies and certificates prepared for event winners.",
    date: "Awards 2026"
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
