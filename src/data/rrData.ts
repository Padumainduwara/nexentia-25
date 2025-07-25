// src/data/rrData.ts

export interface RuleSection {
  title: string;
  points: string[];
}

// Defines rules for a single sub-competition
export interface SubCompetitionRules {
  subCompetitionName: string;
  content: RuleSection[];
}

// Defines all rules for a main competition category
export interface CompetitionRules {
  slug: string;
  title: string;
  pdfUrl: string;
  // Contains an array of rules, one for each sub-competition
  rules: SubCompetitionRules[];
}

export const rrData: CompetitionRules[] = [
  {
    slug: 'pixelynx',
    title: 'PixelynX Rules & Regulations',
    pdfUrl: '/pdfs/rr-pixelynx.pdf',
    rules: [
      {
        subCompetitionName: 'Digital Poster Designing',
        content: [
          { title: 'Task', points: ['Design an infographic about "Smart Cities: How Technology is Shaping the Future of Urban Life"'] },
          { title: 'Eligibility', points: ['Open to Grades 6-13, individual participation.', 'Only one submission per contestant.'] },
          { title: 'Instructions', points: ['Must use Adobe Photoshop or Illustrator.', 'No templates or plagiarism.', 'Capture screenshots of workspace and layers.', 'Dimensions: 4:3.'] },
          { title: 'Submission', points: ['Submit a .rar file with project files, final artwork (.png, .jpg, or .pdf), and a PDF of screenshots.', 'File name format: POST_SchoolName_YourName.rar'] },
        ],
      },
      {
        subCompetitionName: 'Video Editing',
        content: [
          { title: 'Task', points: ["Choose one topic: 'Our School, Our Story', 'Gadget Commercial Parody', or 'Behind the Scenes of ICT Day'."] },
          { title: 'Eligibility', points: ['Open to Grades 10-13, teams of 1-4 students.'] },
          { title: 'Instructions', points: ['AI-generated content is strictly prohibited.', 'All content must be original or royalty-free.', 'Minimum resolution of 720p (Landscape).'] },
          { title: 'Submission', points: ['Submit final video (.mp4 or .mov) and a PDF with concept description and screenshots.', 'Folder name format: VIDEO_SchoolName_YourName'] },
        ],
      },
      {
        subCompetitionName: 'Animation Competition',
        content: [
          { title: 'Task', points: ['Create a short animation (30s to 2min) on the theme: "A Day in a Future World"'] },
          { title: 'Eligibility', points: ['Open to Grades 6-13, individual participation.'] },
          { title: 'Instructions', points: ['Use 2D, 3D, stop-motion, or motion graphics.', 'No AI-generated content, templates, or plagiarism.'] },
          { title: 'Submission', points: ['Submit final animation (.mp4 or .mov) and a PDF with concept description and screenshots.', 'File name format: ANIM_SchoolName_YourName'] },
        ],
      },
      {
        subCompetitionName: 'Graphic Designing',
        content: [
            { title: 'Task', points: ['Design a creative digital artwork based on the theme: "Breaking Boundaries, The Future of Expression"'] },
            { title: 'Eligibility', points: ['Open to Grades 6-13, individual participation.'] },
            { title: 'Instructions', points: ['Use standard design software (e.g., Photoshop, Illustrator).', 'AI-generated tools are strictly prohibited.', 'Dimensions: 1:1 ratio.'] },
            { title: 'Submission', points: ['Submit a .rar file with project files, final artwork, and a PDF of screenshots.', 'File name format: GRAPHIC_SchoolName_YourName'] },
        ]
      },
      {
        subCompetitionName: 'AI Graphic Designing',
        content: [
            { title: 'Task', points: ['Generate an AI artwork based on the theme: "When Machines Dream"'] },
            { title: 'Eligibility', points: ['Open to Grades 6-13, individual participation.'] },
            { title: 'Instructions', points: ['Free to use any AI graphic generation tools (DALL-E, Midjourney, etc.).', 'Must include the full prompt(s) used.', 'Post-editing is allowed but must be mentioned.'] },
            { title: 'Submission', points: ['Submit final artwork (.png or .jpg) and a text file with prompts.', 'File name format: AIGRAPHIC_SchoolName_YourName'] },
        ]
      },
      {
        subCompetitionName: '3D Modeling',
        content: [
            { title: 'Task', points: ['Create original, self-designed 3D artwork from a provided base file.'] },
            { title: 'Eligibility', points: ['Open to Grades 6-13, individual participation.'] },
            { title: 'Software', points: ['Any 3D software is allowed (Blender is recommended).'] },
            { title: 'Submission', points: ['Submit the project file (Blender, FBX, OBJ) and at least 3 high-quality renders.'] },
        ]
      },
      {
        subCompetitionName: 'Photo Manipulation',
        content: [
            { title: 'Theme', points: ['Broken Reality: When Data Becomes Dangerous'] },
            { title: 'Eligibility', points: ['Open to Grades 6-13, individual participation.'] },
            { title: 'Instructions', points: ['Must use Adobe Photoshop.', 'No templates or plagiarism.', 'Feel free to use any dimension for your design.'] },
            { title: 'Submission', points: ['Submit a .rar file with project files, final artwork, and a PDF of screenshots.', 'File name format: POST_SchoolName_YourName.rar'] },
        ]
      }
    ],
  },
  {
    slug: 'mechatron',
    title: 'Mechatron Rules & Regulations',
    pdfUrl: '/pdfs/rr-mechatron.pdf',
    rules: [
      {
        subCompetitionName: 'IOT Innovation',
        content: [
          { title: 'Task', points: ['Build an IoT prototype that solves a real-world problem.'] },
          { title: 'Eligibility', points: ['Open to Grades 9-13, teams of four.'] },
          { title: 'Instructions', points: ['Round 1 is online via Zoom (5-10 minute presentation).', 'Prototype must be a working model.', 'Submit a project report (PDF) one day before the presentation.'] },
          { title: 'Scoring', points: ['Based on Feasibility, Originality, Social Impact, and Presentation.'] },
        ],
      },
      {
        subCompetitionName: 'Robotic Design Challenge',
        content: [
          { title: 'Task', points: ['Build a functional robot that solves a basic problem or performs a useful task.'] },
          { title: 'Eligibility', points: ['Open to Grades 9-13, individual or teams up to 3.'] },
          { title: 'Competition Format', points: ['Round 1 (Online): Submit a slide presentation and robot design.', 'Round 2 (Physical): Finalists present their project live.'] },
          { title: 'Scoring', points: ['Based on Innovation, Problem Relevance, Design, and Technical Explanation.'] },
        ],
      },
    ],
  },
  {
    slug: 'virtueverse',
    title: 'VirtueVerse E-Sports Rules',
    pdfUrl: '/pdfs/rr-virtueverse.pdf',
    rules: [
      {
        subCompetitionName: 'Custom Games Competition',
        content: [
          { title: 'Eligibility', points: ['Open to all school students.', 'Teams must consist of 5 main players from the same school (1 optional substitute).', 'Only one team per school is allowed.'] },
          { title: 'Match Format', points: ['Game: Valorant (Online), 5v5 Unrated mode.', 'Map Selection: Teams will participate in a map banning phase.', 'First team to win 13 rounds wins.'] },
          { title: 'Code of Conduct', points: ['Maintain respectful communication.', 'Cheating or hacking will lead to immediate disqualification.', 'Be online and ready 15 minutes before the scheduled match time.'] },
        ],
      },
    ],
  },
  {
    slug: 'zenhack',
    title: 'ZenHack Rules & Regulations',
    pdfUrl: '/pdfs/rr-zenthack.pdf',
    rules: [
      {
        subCompetitionName: 'Cyber Security and Ethical Hacking Quiz',
        content: [
          { title: 'Overview', points: ['An intense, knowledge-driven quiz simulating real-world digital threats.'] },
          { title: 'Eligibility', points: ['Individual competition, open to Grades 6-13.'] },
          { title: 'Competition Format', points: ['A 2-stage online quiz competition.', 'Round 1 (Preliminary): 20 MCQs, 7 minutes.', 'Round 2 (Final): 20 MCQs with a reduced time limit.'] },
          { title: 'Instructions', points: ['Only one attempt is allowed per round.', 'Use of AI or search engines will result in disqualification.'] },
        ],
      },
      {
        subCompetitionName: 'Security Tool Designing Competition',
        content: [
          { title: 'Overview', points: ['Conceptualize and develop innovative tools to combat real-world cyber threats.'] },
          { title: 'Eligibility', points: ['Individual competition, open to Grades 6-13.'] },
          { title: 'Competition Format', points: ['A two-part scenario: Cyber Defense Task and Ethical Recovery Task.'] },
          { title: 'Instructions', points: ['Use only approved tools and languages (Python, C++, JS, Wireshark, Nmap, etc.).', 'AI tools are strictly prohibited.'] },
        ],
      },
    ],
  },
  {
    slug: 'questrix',
    title: 'Questrix Rules & Regulations',
    pdfUrl: '/pdfs/rr-questrix.pdf',
    rules: [
      {
        subCompetitionName: 'Puzzle Challenges',
        content: [
          { title: 'Eligibility', points: ['Open to Grades 12/13, teams of four.'] },
          { title: 'Instructions', points: ['Competition will be held physically.', 'Format is a crossword-style ICT puzzle.', 'Questions based on A/L ICT syllabus and general tech knowledge.'] },
        ],
      },
      {
        subCompetitionName: 'Treasure Hunt',
        content: [
          { title: 'Eligibility', points: ['Open to Grades 9-13, teams of four.'] },
          { title: 'Instructions', points: ['Competition will be held physically.', 'Teams will be given a sequence of tech-related tasks and clues to solve.', 'The first team to find the "treasure" location wins.'] },
        ],
      },
    ],
  },
  {
    slug: 'most-popular',
    title: 'Most Popular School ICT Society Rules',
    pdfUrl: '/pdfs/rr-mpss.pdf',
    rules: [
      {
        subCompetitionName: 'Most Popular School ICT Society', // A default name
        content: [
          { title: 'Eligibility & Registration', points: ['Open to all school ICT societies.', 'Only the top five positions of the society can register their school.'] },
          { title: 'Voting', points: ['Posts will be published on the official JICTS WhatsApp Channel.', 'Votes are counted based on red heart (❤️) reactions.', 'The school with the most reactions wins.'] },
          { title: 'Disclaimer', points: ['Any attempt to manipulate reactions will result in disqualification.'] },
        ],
      },
    ],
  },
];
