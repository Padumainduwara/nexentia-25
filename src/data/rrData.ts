// src/data/rrData.ts

export interface RuleSection {
  title: string;
  points: string[];
}

export interface SubCompetitionRules {
  subCompetitionName: string;
  pdfUrl: string;
  content: RuleSection[];
}

export interface CompetitionRules {
  slug: string;
  title: string;
  rules: SubCompetitionRules[];
}

export const rrData: CompetitionRules[] = [
  {
    slug: 'codinex',
    title: 'CODINEX!! Rules & Regulations',
    rules: [
      {
        subCompetitionName: 'Coding Challenges',
        pdfUrl: '/pdfs/rr-codinex-algorithm.pdf',
        content: [
          { title: 'Eligibility', points: ['Students from Grade 9-13 can participate.', 'This competition is for individuals, not for teams.'] },
          { title: 'Instructions', points: ['The competition will be held physically using PCs (offline).', 'Participants will face 10 algorithmic problems.', 'The total competition duration is 1 hour 30 minutes (90 minutes).', 'Participants must declare their programming language at the beginning and use only that language.', 'The allowed programming languages are: Python 3, C, C++, Java.', 'PCs provided will include offline editors/compilers.', 'No internet access or online help is permitted.', 'Code must be compiled and tested locally during the given time.', 'Each solution must be saved as a separate file named based on the question and language (e.g., Q1.py, Q2.cpp).', 'All code files must be placed in a folder named "CODINEX_SchoolName_YourName".', 'Participants must work individually. Collaboration, communication, or plagiarism will result in disqualification.', 'Participants may solve questions in any order.', 'All final submissions must be made before the time ends.'] },
          { title: 'Judging Criteria', points: ['Correctness of the logic and output.', 'Efficiency and proper use of algorithms.', 'Code readability and organization.', 'Adherence to input/output specifications.'] },
        ],
      },
      {
        subCompetitionName: 'App Development',
        pdfUrl: '/pdfs/rr-codinex-app.pdf',
        content: [
            { title: 'Task', points: ['Build an educational productivity app that helps students plan and track their study schedule.'] },
            { title: 'Eligibility', points: ['Students from Grade 9-13 can participate.', 'Solo or duet entries are allowed.'] },
            { title: 'Instructions', points: ['The app must be original and built for this competition.', 'You may use any platform or framework (Flutter, React Native, Web, etc.).', 'Must include a task planner, calendar view, and at least one smart feature (e.g., Pomodoro timer, progress tracking).'] },
            { title: 'Submission', points: ['Submit the app source code (via a public GitHub repository).', 'A hosted link (if applicable) and a brief video demonstration (2-3 minutes) must also be submitted.'] },
            { title: 'Judging Criteria', points: ['Functionality and technical execution.', 'UI/UX design and usability.', 'Innovation and creativity.', 'Adherence to the theme and requirements.'] },
        ]
      },
      {
        subCompetitionName: 'Website Development',
        pdfUrl: '/pdfs/rr-codinex-web.pdf',
        content: [
            { title: 'Task', points: ['Design and develop a Teacher Performance and Development Tracking System. The platform should allow storing teacher information, performance reviews, student feedback, training history, and career milestones.'] },
            { title: 'Eligibility', points: ['To All Students with no Age or Grade Restrictions.', 'Only For Individuals Not for Teams.'] },
            { title: 'Instructions', points: ['The website must be original and fully functional.', 'You can use any modern web technologies (React, Vue, Angular, Node.js, etc.).', 'Backend functionalities (e.g., user authentication, database integration) will significantly boost your score.', 'The design must be responsive and user-friendly.'] },
            { title: 'Submission', points: ['Submit a link to your public GitHub repository containing all source code.', 'A hosted link to the live web app (e.g., on Netlify, Vercel) must be provided.'] },
        ]
      }
    ],
  },
  {
    slug: 'pixelynx',
    title: 'PixelynX Rules & Regulations',
    rules: [
        {
            subCompetitionName: 'Digital Poster Designing',
            pdfUrl: '/pdfs/rr-pixelynx-poster.pdf',
            content: [
                { title: 'Task', points: ['Design an infographic about "Smart Cities: How Technology is Shaping the Future of Urban Life"'] },
                { title: 'Eligibility', points: ['Open for any category, Grades 6-13.', 'Individual participation only.', 'Only one submission per contestant.'] },
                { title: 'Instructions', points: ['Use either Adobe Photoshop or Adobe Illustrator.', 'Regularly capture screenshots of your workspace for submission.', 'No templates or plagiarism allowed.', 'Dimensions: 4:3 size.'] },
                { title: 'Submission', points: ['Submit a .rar file with all project files (textures, images, etc.).', 'Artwork exported in .png, .jpg, or .pdf.', 'Include a PDF with screenshots of all layers and 5 workspace screenshots.', 'File format: "POST_SCHOOLNAME_YOURNAME.RAR"'] },
                { title: 'Judging Criteria', points: ['Functionality (Theme-relativity)', 'Creativity (Uniqueness)', 'Aesthetics (Visual Appeal)', 'Technical Execution', 'User Experience'] },
            ],
        },
        {
            subCompetitionName: 'Video Editing',
            pdfUrl: '/pdfs/rr-pixelynx-video.pdf',
            content: [
                { title: 'Task', points: ["Submit one video on one of these topics:", "1. School in the year 2050 (Max 5 mins)", "2. Gadget Commercial Parody (30s - 2 mins)", "3. Glitched Reality (1-3 mins)"] },
                { title: 'Eligibility', points: ['Open for any category, Grades 10-13.', 'Team-based (1 to 4 students).'] },
                { title: 'Instructions', points: ['AI-generated content is strictly prohibited.', 'All content must be original or royalty-free.', 'Capture at least 3 screenshots of your editing timeline.', 'Landscape format, minimum 720p resolution.'] },
                { title: 'Submission', points: ['Submit video in .mp4 or .mov format.', 'Include a PDF with a short description (max 150 words) and screenshots.', 'Folder name: "VIDEO_SCHOOLNAME_YOURNAME"'] },
                { title: 'Judging Criteria', points: ['Concept & Theme Relevance', 'Editing Technique', 'Storytelling & Creative Presentation', 'Visual & Audio Quality', 'Effort & Production Quality'] },
            ],
        },
        {
            subCompetitionName: 'Animation Competition',
            pdfUrl: '/pdfs/rr-pixelynx-animation.pdf',
            content: [
                { title: 'Task', points: ['Create a short animation (30 seconds to 2 minutes) on the theme: "A Day in a Future World"'] },
                { title: 'Eligibility', points: ['Open for any category, Grades 6-13.', 'Individual participation only.'] },
                { title: 'Instructions', points: ['Use 2D, 3D, stop-motion, or motion graphics.', 'No AI-generated content.', 'Plagiarism or use of templates is strictly prohibited.', 'Capture screenshots of your timeline/workspace.'] },
                { title: 'Submission', points: ['Submit final animation in .mp4 or .mov format.', 'Include a PDF with at least 3 screenshots and a short concept explanation (max 100 words).', 'File name: "ANIM_SCHOOLNAME_YOURNAME"'] },
                { title: 'Judging Criteria', points: ['Theme Interpretation', 'Animation Skill', 'Art Direction', 'Audio Integration', 'Originality & Technical Execution'] },
            ],
        },
        {
            subCompetitionName: 'Graphic Designing',
            pdfUrl: '/pdfs/rr-pixelynx-graphic.pdf',
            content: [
                { title: 'Task', points: ['Design a creative digital artwork based on the theme: "Breaking Boundaries, The Future of Expression"'] },
                { title: 'Eligibility', points: ['Open for any category, Grades 6-13.', 'Individual participation only.'] },
                { title: 'Instructions', points: ['Use standard design software (Photoshop, Illustrator, etc.).', 'AI-generated tools are strictly prohibited.', 'Capture screenshots of your workspace and layers.', 'Dimensions: 1:1 ratio.'] },
                { title: 'Submission', points: ['Submit a .rar file with all project files.', 'Export artwork in .png, .jpg, or .pdf.', 'Include a PDF with layer screenshots and 5 workspace screenshots.', 'File name: "GRAPHIC_SCHOOLNAME_YOURNAME"'] },
                { title: 'Judging Criteria', points: ['Functionality (Relevance to theme)', 'Creativity', 'Aesthetics', 'Technical Execution', 'User Experience'] },
            ]
        },
        {
            subCompetitionName: 'AI Graphic Designing',
            pdfUrl: '/pdfs/rr-pixelynx-ai.pdf',
            content: [
                { title: 'Task', points: ['Generate an AI artwork based on the theme: "When Machines Dream"'] },
                { title: 'Eligibility', points: ['Open for any category, Grades 6-13.', 'Individual participation only.'] },
                { title: 'Instructions', points: ['Use any AI graphic generation tools (DALL-E, Midjourney, etc.).', 'You must include the full prompt(s) used.', 'Post-editing is allowed but must be mentioned.'] },
                { title: 'Submission', points: ['Submit final artwork in .png or .jpg format.', 'Include a text/PDF file with the prompt(s) and a brief concept description (max 50 words).', 'File name: "AIGRAPHIC_SCHOOLNAME_YOURNAME"'] },
                { title: 'Judging Criteria', points: ['Prompt Creativity', 'Theme Relevance', 'Visual Impact', 'Post-Processing Quality', 'Originality'] },
            ]
        },
        {
            subCompetitionName: '3D Modeling',
            pdfUrl: '/pdfs/rr-pixelynx-3d.pdf',
            content: [
                { title: 'General Information', points: ['Eligibility: Grades 6 to 13.', 'Individual participation only.', 'Open Theme, but must be original, self-designed artwork.', 'Software: Any 3D software (Blender recommended).'] },
                { title: 'Submission Requirements', points: ['A base file (Blender, FBX, or OBJ) will be provided to work from.', 'Submit the completed project file, OBJ, and FBX files.', 'At least 3 high-quality renders of the final model (PNG/JPEG).'] },
                { title: 'Additional Rules', points: ['Plagiarism or use of non-original models will result in disqualification.', 'AI-generated content is strictly prohibited.', 'Use of references, HDRIs, and textures is allowed.'] },
                { title: 'Judging Criteria', points: ['Originality & Creativity', 'Technical Skill (Detail, Complexity, Topology)', 'Aesthetic Quality (Colors, Lighting, Composition)', 'Presentation'] },
            ]
        },
        {
            subCompetitionName: 'Photo Manipulation',
            pdfUrl: '/pdfs/rr-pixelynx-photomanipulation.pdf',
            content: [
                { title: 'Theme', points: ['Broken Reality: When Data Becomes Dangerous'] },
                { title: 'Eligibility', points: ['Open for any category, Grades 6-13.', 'Individual participation only.'] },
                { title: 'Instructions', points: ['Only use Adobe Photoshop.', 'Regularly capture screenshots of your workspace.', 'No templates or plagiarism.', 'Feel free to use any dimension for your design.'] },
                { title: 'Submission', points: ['Submit all project files in a .rar file.', 'Export artwork in .png or .jpg.', 'Include a PDF with screenshots of all layers and 5 workspace screenshots.', 'File format: "POST_SCHOOLNAME_YOURNAME.RAR"'] },
                { title: 'Judging Criteria', points: ['Functionality (Theme relevance)', 'Creativity', 'Aesthetics', 'Technical Execution', 'User Experience'] },
            ]
        }
    ],
  },
  {
    slug: 'mechatron',
    title: 'Mechatron Rules & Regulations',
    rules: [
      {
        subCompetitionName: 'IOT Innovation',
        pdfUrl: '/pdfs/rr-mechatron-iot.pdf',
        content: [
          { title: 'Task', points: ['Build an IoT prototype that solves a real-world problem.'] },
          { title: 'Eligibility', points: ['Students from Grade 9-13.', 'Teams of four only.'] },
          { title: 'Instructions', points: ['Round 1 will be held online.', 'Present prototype via Zoom for 5-10 minutes.', 'The invention should be simple, useful, and fulfill a social need.', 'Use of recycled or eco-friendly materials is encouraged.', 'The prototype must be a working model.', 'Submit a project report (PDF) one day before the Zoom session.'] },
          { title: 'Scoring', points: ['Feasibility (25 Marks)', 'Originality (25 Marks)', 'Usefulness & Social Impact (25 Marks)', 'Presentation & Clarity (25 Marks)'] },
        ],
      },
      {
        subCompetitionName: 'Robotic Design Challenge',
        pdfUrl: '/pdfs/rr-mechatron-robotic.pdf',
        content: [
          { title: 'Task', points: ['Build a functional robot (wired or wireless) that solves a basic problem or performs a useful task.'] },
          { title: 'Eligibility', points: ['Students from Grade 9-13.', 'Individual or teams of up to 3 members.'] },
          { title: 'Competition Format', points: ['Round 1 (Online): Submit a slide presentation and robot structure/model design. Top 10 teams will be selected.', 'Round 2 (Final): Finalists will present their project live physically (15 min presentation + 5 min Q&A).'] },
          { title: 'Scoring', points: ['Innovation & Originality (25 Marks)', 'Problem Relevance (20 Marks)', 'Robot Structure & Design (15 Marks)', 'Technical Explanation (15 Marks)', 'Slide Presentation Quality (10 Marks)', 'Optional Video (5 Bonus Marks)'] },
        ],
      },
    ],
  },
  {
    slug: 'virtueverse',
    title: 'VirtueVerse E-Sports Rules',
    rules: [
      {
        subCompetitionName: 'Custom Games Competition',
        pdfUrl: '/pdfs/rr-virtueverse-esports.pdf',
        content: [
          { title: 'Eligibility', points: ['Open to all school students.', 'Teams must consist of 5 main players from the same school.', 'One optional substitute is allowed.', 'Only one team per school.'] },
          { title: 'Team Registration', points: ['Register with a team name, full names, and in-game Riot IDs.', 'Registration must be completed by the deadline.', 'No team member changes without prior notice to the organizing committee.'] },
          { title: 'Match Format', points: ['Game: Valorant (Online)', 'Game Mode: 5v5, Unrated.', 'Format: Best of 1 or Best of 3 depending on the stage.', 'Map Selection: Teams will participate in a map banning phase.', 'First team to win 13 rounds wins. Tie (12-12) leads to overtime.'] },
          { title: 'Code of Conduct', points: ['Maintain respectful communication.', 'Cheating or hacking will lead to immediate disqualification.', 'Sportsmanship is mandatory.'] },
          { title: 'Punctuality', points: ['Be online and ready 15 minutes before the scheduled match time.', 'Failure to show up within 10 minutes of the scheduled time results in a forfeit.'] },
        ],
      },
    ],
  },
  {
    slug: 'zenthack',
    title: 'ZenThack Rules & Regulations',
    rules: [
      {
        subCompetitionName: 'Cyber Security and Ethical Hacking Quiz',
        pdfUrl: '/pdfs/rr-zenthack-quiz.pdf',
        content: [
          { title: 'Overview', points: ['A multi-stage quiz testing advanced cybersecurity concepts, ethical hacking techniques, and incident response strategies.'] },
          { title: 'Eligibility', points: ['Individual competition only.', 'Open to Grades 6-13.'] },
          { title: 'Competition Format', points: ['A 2-stage quiz competition.', 'Round 1 - Preliminary (Online): 20 MCQs | 7 Minutes | Real-time scoring.', 'Round 2 - Final (Online): 20 MCQs | Reduced time limit.'] },
          { title: 'Disqualification Criteria', points: ['Use of AI or search engines.', 'Submitting multiple entries or copied work.', 'Disruptive or unethical behavior.'] },
        ],
      },
      {
        subCompetitionName: 'Security Tool Designing Competition',
        pdfUrl: '/pdfs/rr-zenthack-tool.pdf',
        content: [
          { title: 'Overview', points: ['Conceptualize and develop innovative tools to combat real-world cyber threats.'] },
          { title: 'Eligibility', points: ['Individual competition only.', 'Open to Grades 6-13.'] },
          { title: 'Competition Format', points: ['A two-part scenario:', '1. Cyber Defense Task: Implement secure coding and system-hardening measures.', '2. Ethical Recovery Task: Analyze system logs, identify breach vectors, and restore data.'] },
          { title: 'Instructions', points: ['Use only approved tools and languages (Python, C++, JavaScript, SQL, Wireshark, Nmap, etc.).', 'AI tools are strictly prohibited.'] },
        ],
      },
    ],
  },
  {
    slug: 'cipher',
    title: 'CipherX Quiz Rules',
    rules: [
        {
            subCompetitionName: 'Quiz Competition',
            pdfUrl: '/pdfs/rr-cipherx-quiz.pdf',
            content: [
                { title: 'Overview', points: ["Tests students' knowledge in ICT, programming, and general knowledge.", 'The first round will be held online, with the top two teams qualifying for the physical final round.'] },
                { title: 'Team Composition', points: ['Each school can send one team.', 'A maximum of 4 students per team.'] },
                { title: 'Competition Format', points: ['Preliminary Round (Online): MCQs and short answer questions in Zoom breakout rooms.', 'Semifinal Round (Online): For the top 8 teams from the preliminary round.', 'Final Round (Physical): For the top 2 teams from the semifinal round, held at the main event.'] },
                { title: 'Guidelines', points: ['All team members must have their cameras and microphones on during online rounds.', 'Any form of cheating will lead to immediate disqualification.'] },
            ],
        }
    ]
  },
  {
    slug: 'questrix',
    title: 'Questrix Rules & Regulations',
    rules: [
      {
        subCompetitionName: 'Puzzle Challenges',
        pdfUrl: '/pdfs/rr-questrix-puzzle.pdf',
        content: [
          { title: 'Eligibility', points: ['Students from Grade 12/13 can participate.', 'This is for teams of four, not individuals.'] },
          { title: 'Instructions', points: ['The competition will be held physically.', 'The format is a crossword-style ICT puzzle.', 'There will be one round.', 'Questions will be based on G.C.E. A/L ICT syllabus and general tech knowledge.'] },
          { title: 'Scoring', points: ['Marks awarded for each correct word.', 'Teams ranked based on correct answers and time taken.', 'In case of a tie, the earliest submission wins.'] },
        ],
      },
      {
        subCompetitionName: 'Treasure Hunt',
        pdfUrl: '/pdfs/rr-questrix-treasurehunt.pdf',
        content: [
          { title: 'Eligibility', points: ['Students from Grade 9-13 can participate.', 'This is for teams of four, not individuals.'] },
          { title: 'Instructions', points: ['The competition will be held Online.', 'Teams will be given a sequence of tech-related tasks and clues.', 'The first team to find the "treasure" wins.', 'Tasks may include logic puzzles, QR codes, decoding, etc.'] },
          { title: 'Scoring', points: ['The winning team is the one that completes all tasks and reaches the treasure first.', 'Ranking is based on time taken and number of correctly completed clues.'] },
        ],
      },
    ],
  },
  {
    slug: 'most-popular',
    title: 'Most Popular School ICT Society Rules',
    rules: [
      {
        subCompetitionName: 'Most Popular School ICT Society',
        pdfUrl: '/pdfs/rr-mpss.pdf',
        content: [
          { title: 'Eligibility', points: ['The competition is open to all school ICT societies across the island.'] },
          { title: 'Registration Requirement', points: ['Only the top five positions of the society (President, Vice President, etc.) are eligible to register their school.'] },
          { title: 'Voting', points: ['Posts for each registered school will be published on the official Josephian ICT Society WhatsApp channel.', 'Votes will be counted based on the number of red heart (❤️) reactions received by each post.', 'The voting will remain open for a specified period.'] },
          { title: 'Winner Selection', points: ['The school whose post accumulates the highest number of red heart reactions by the deadline will be declared the winner.'] },
          { title: 'Disclaimer', points: ['Any attempt to manipulate or artificially increase the number of reactions will result in disqualification.'] },
        ],
      },
    ],
  },
];