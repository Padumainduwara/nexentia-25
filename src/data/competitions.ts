// src/data/competitions.ts

export interface SubCompetition {
  name: string;
  description: string;
}

export interface Competition {
  slug: string; // URL එකේදී භාවිතා වන නම (e.g., 'codinex')
  title: string;
  subtitle: string;
  logoSrc: string;
  category: string; // Filter කිරීම සඳහා අලුතින් එක් කළ property එක
  subCompetitions: SubCompetition[];
}

// සියලුම තරඟ වල දත්ත අඩංගු array එක
export const competitionsData: Competition[] = [
  {
    slug: 'codinex',
    title: 'CODINEX!!',
    subtitle: 'Inter-School Coding Competition',
    logoSrc: '/logos/codinex.png',
    category: 'CODINEX',
    subCompetitions: [
      { name: 'Competitive Programming', description: 'Solve algorithmic challenges against the clock.' },
      { name: 'Hackathon', description: 'Build a creative solution for a real-world problem in 24 hours.' },
      { name: 'Web Development', description: 'Design and develop a fully functional modern website.' },
    ],
  },
  {
    slug: 'pixelynx',
    title: 'pixelynx',
    subtitle: 'Digital Art & Design Competition',
    logoSrc: '/logos/pixelynx.png',
    category: 'PIXELYNX',
    subCompetitions: [
        { name: 'Graphic Design', description: 'Create a stunning poster based on the given theme.' },
        { name: 'UI/UX Design', description: 'Design a user-friendly interface for a mobile application.' },
    ],
  },
  {
    slug: 'mechatron',
    title: 'MECHATRON',
    subtitle: 'Robotics & IoT Challenge',
    logoSrc: '/logos/mechatron.png',
    category: 'MECHATRON',
    subCompetitions: [
        { name: 'Line Following Robot', description: 'Build a robot that follows a black line on a white surface.' },
    ],
  },
  {
    slug: 'virtueverse',
    title: 'VIRTUEVERSE',
    subtitle: 'Inter-School E-Sports Arena',
    logoSrc: '/logos/virtueverse.png',
    category: 'VIRTUEVERSE',
    subCompetitions: [
        { name: 'Valorant Tournament', description: '5v5 tactical shooter competition.' },
    ],
  },
  {
    slug: 'zenhack',
    title: 'ZEN HACK',
    subtitle: 'Cyber Security & Ethical Hacking',
    logoSrc: '/logos/zenhack.png',
    category: 'ZENTHACK',
    subCompetitions: [
        { name: 'Capture The Flag (CTF)', description: 'Find hidden flags in a series of security challenges.' },
    ],
  },
  {
    slug: 'cipher',
    title: 'CIPHER',
    subtitle: 'Inter-School Tech Quiz Challenge',
    logoSrc: '/logos/cipher.png',
    category: 'CIPHERX',
    subCompetitions: [],
  },
  {
    slug: 'questrix',
    title: 'QUESTRIX',
    subtitle: 'Inter-School Puzzle Challenge',
    logoSrc: '/logos/questrix.png',
    category: 'QUESTRIX',
    subCompetitions: [],
  },
  {
    slug: 'most-popular',
    title: 'Most Popular',
    subtitle: 'Most Popular School ICT Society',
    logoSrc: '/logos/award.png',
    category: 'MOST POPULAR SOCIETY',
    subCompetitions: [],
  },
];
