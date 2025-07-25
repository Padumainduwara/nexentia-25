// src/data/competitions.ts

export interface SubCompetition {
  name: string;
  description: string;
}

export interface Competition {
  slug: string;
  title: string;
  subtitle: string;
  logoSrc: string;
  category: string;
  subCompetitions: SubCompetition[];
}

// Data has been fully updated with final descriptions as per the project documents.
export const competitionsData: Competition[] = [
  {
    slug: 'codinex',
    title: 'CODINEX!!',
    subtitle: 'Inter-School Coding Competition',
    logoSrc: '/logos/codinex.png',
    category: 'CODINEX',
    subCompetitions: [
      {
        name: 'Coding Challenges',
        description: 'Put your logic to the test in this algorithm challenge, where you\'ll solve intricate problems with efficient code, tackle tasks that demand precision, and showcase your skills to rise above the rest.',
      },
      {
        name: 'App Development',
        description: 'Step into the world of innovation with the app development competition, where you\'ll craft impactful, user-focused applications, blend creativity with technical skill, and turn bold ideas into working digital solutions.',
      },
      {
        name: 'Website Development',
        description: 'Unleash your creativity in the website development competition, where you\'ll craft dynamic, user-friendly websites that blend innovation, design, and seamless performance to deliver an unforgettable web experience.',
      },
    ],
  },
  {
    slug: 'pixelynx',
    title: 'pixelynx',
    subtitle: 'Digital Art & Design Competition',
    logoSrc: '/logos/pixelynx.png',
    category: 'PIXELYNX',
    subCompetitions: [
      {
        name: 'Digital Poster Designing',
        description: 'Express your ideas through striking visuals in the digital poster designing competition, where creativity, design sense, and impactful messaging come together to craft posters that captivate and communicate.',
      },
      {
        name: 'Video Editing',
        description: 'Showcase your storytelling skills in the video editing competition, where creativity meets precision. Craft compelling videos by blending visuals, sound, and effects to engage and captivate your audience.',
      },
      {
        name: 'Animation Competition',
        description: 'Bring stories to life in the animation competition, where imagination meets motion. Create captivating animations that blend art, storytelling, and technique to leave a lasting visual impact.',
      },
      {
        name: 'Graphic Designing',
        description: 'Transform visuals with creativity in the graphic editing competition, where participants manipulate images, enhance designs, and showcase their artistic flair through powerful visual storytelling.',
      },
      {
        name: 'AI Graphic Designing',
        description: 'Explore the future of design in the AI graphics competition, where creativity meets cutting-edge technology. Use AI tools to generate, enhance, and reimagine visuals, pushing the boundaries of digital art and innovation.',
      },
      {
        name: '3D Modeling',
        description: 'Step into the world of dimension and design in the 3D modeling competition, where creativity meets precision. Craft detailed models, sculpt virtual objects, and bring concepts to life in stunning three-dimensional forms.',
      },
      {
        name: 'Photo Manipulation',
        description: 'Push the boundaries of reality in the photo manipulation competition, where imagination and skill collide. Transform ordinary images into extraordinary visuals using editing techniques that challenge perception and showcase creative mastery.',
      },
    ],
  },
  {
    slug: 'mechatron',
    title: 'MECHATRON',
    subtitle: 'Robotics & IoT Challenge',
    logoSrc: '/logos/mechatron.png',
    category: 'MECHATRON',
    subCompetitions: [
      {
        name: 'IOT Innovation',
        description: 'Enter the IOT innovation competition, where technology meets creativity to solve real-world problems. Design smart systems, connect devices, and build intelligent solutions that shape the future of connected living.',
      },
      {
        name: 'Robotic Design Challenge',
        description: 'Design, build, and program a robot to solve a specific challenge, showcasing mechanical and electrical engineering skills and bringing innovative concepts to life.',
      },
    ],
  },
  {
    slug: 'virtueverse',
    title: 'VIRTUEVERSE',
    subtitle: 'Inter-School E-Sports Arena',
    logoSrc: '/logos/virtueverse.png',
    category: 'VIRTUEVERSE',
    subCompetitions: [
      {
        name: 'Custom Games Competition',
        description: 'Gear up for the custom game competition, where strategy, reflexes, and quick thinking take the spotlight. Compete in a specially selected game and prove your skills as you battle it out for the top spot.',
      },
    ],
  },
  {
    slug: 'zenhack',
    title: 'ZEN HACK',
    subtitle: 'Cyber Security & Ethical Hacking',
    logoSrc: '/logos/zenhack.png',
    category: 'ZENTHACK',
    subCompetitions: [
      {
        name: 'Cyber Security and Ethical Hacking Quiz',
        description: 'Put your cyber skills to the test in this ethical hacking quiz—where sharp minds battle over digital defense, ethics, and online threats.',
      },
      {
        name: 'Security Tool Designing Competition',
        description: 'Design smart solutions to fight digital threats in this cybersecurity tool competition—where innovation meets protection and tech skills secure the digital world.',
      },
    ],
  },
  {
    slug: 'cipher',
    title: 'CIPHER',
    subtitle: 'Inter-School Tech Quiz Challenge',
    logoSrc: '/logos/cipher.png',
    category: 'CIPHERX', // Kept as CIPHERX to match filter bar
    subCompetitions: [
      {
        name: 'Quiz Competition',
        description: 'Challenge your ICT knowledge in a fast-paced quiz filled with tech, innovation, and digital twists. Outsmart your peers and prove your mastery in this battle of minds!',
      },
    ],
  },
  {
    slug: 'questrix',
    title: 'QUESTRIX',
    subtitle: 'Inter-School Puzzle Challenge',
    logoSrc: '/logos/questrix.png',
    category: 'QUESTRIX',
    subCompetitions: [
      {
        name: 'Puzzle Challenges',
        description: 'Dive into a world of logic and tech twists in this thrilling ICT Puzzle Challenge where every clue tests your wit and unlocks deeper knowledge!',
      },
      {
        name: 'Treasure Hunt',
        description: 'Embark on a thrilling tech quest where every clue leads you closer to the prize. Solve, decode, and outsmart your way to the final treasure in this fast-paced ICT adventure!',
      },
    ],
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