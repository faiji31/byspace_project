const instructors = [
  { name: "PurePearl Studio", role: "Professional Creator", avatar: "https://i.pravatar.cc/100?img=12" },
  { name: "Nadia Rahman", role: "Senior Instructor", avatar: "https://i.pravatar.cc/100?img=47" },
  { name: "Arif Hossain", role: "Industry Expert", avatar: "https://i.pravatar.cc/100?img=15" },
  { name: "Sara Ahmed", role: "Lead Mentor", avatar: "https://i.pravatar.cc/100?img=32" },
];

export const courseIncludes = [
  "Learning Resources",
  "Quality Lesson Videos",
  "Certificate of Completion",
  "Private Consultation",
];

const reviewPool = [
  { name: "PurePearl Studio", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/100?img=5", rating: 5, text: "The course provided me with a comprehensive understanding of the subject. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!" },
  { name: "Albert Flores", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/100?img=13", rating: 5, text: "This course transformed my approach to the subject. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!" },
  { name: "Cody Fisher", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/100?img=33", rating: 5, text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills." },
  { name: "Brooklyn Simmons", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/100?img=44", rating: 5, text: "The lessons on optimizing for various platforms were particularly insightful. The course adapts to the evolving landscape, and the engaging content kept me motivated throughout." },
  { name: "Jenny Wilson", role: "Frontend Developer", avatar: "https://i.pravatar.cc/100?img=25", rating: 4, text: "Very well structured course. A few lessons could go deeper, but overall I learned a lot and the projects were fun to build." },
  { name: "Robert Fox", role: "Product Manager", avatar: "https://i.pravatar.cc/100?img=59", rating: 4, text: "Clear explanations and good pacing. The downloadable resources were a great bonus and saved me a lot of time." },
  { name: "Kristin Watson", role: "Student", avatar: "https://i.pravatar.cc/100?img=48", rating: 3, text: "Good content for beginners, but I expected more advanced examples towards the end of the course." },
  { name: "Guy Hawkins", role: "Freelancer", avatar: "https://i.pravatar.cc/100?img=52", rating: 2, text: "Decent overall, though some videos felt rushed. Support team was helpful when I had questions." },
];

const weights = [0.85, 0.1, 0.03, 0.01, 0.01]; // 5★ → 1★

function build(id, o) {
  const instructor = instructors[id % instructors.length];
  const ratingBreakdown = weights.map((w, i) => ({
    star: 5 - i,
    count: Math.round(o.reviewsCount * w),
    percent: Math.round(w * 100),
  }));

  return {
    id,
    image: `https://picsum.photos/seed/bytespace-${id}/800/500`,
    instructor: instructor.name, // card এর জন্য
    instructorInfo: instructor, // details page এর জন্য
    comments: `${Math.round(o.reviewsCount / 3)} Comments`,
    moreStudents: 26,
    avatars: [1, 2, 3, 4].map((n) => `https://i.pravatar.cc/100?img=${id * 3 + n}`),
    progress: 55,
    tagline: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
    lessonPreview: o.modules.slice(0, 3).map((m, i) => ({
      no: `0${i + 1}`,
      title: m,
      mins: [12, 21, 16][i],
    })),
    moreVideos: o.lessons - 3,
    sneakPeek: [1, 2, 3, 4].map((n) => `https://picsum.photos/seed/peek-${id}-${n}/300/200`),
    ratingBreakdown,
    reviews: reviewPool,
    ...o,
  };
}

export const courses = [
  build(1, {
    title: "Learn Figma from Basic",
    subtitle: "Master interface design from zero to your first prototype",
    category: "Design", level: "Beginner", price: 25, lessons: 17, hours: 2, mins: 16,
    rating: 4.5, reviewsCount: 59, students: 199,
    description: [
      "Embark on a journey into Figma, the industry-standard tool for interface design. This course starts with the absolute basics and takes you step by step to building real screens.",
      "You will learn frames, auto layout, components, variants and prototyping, then combine everything in a small portfolio project you can proudly share.",
    ],
    keyPoints: ["Figma Interface & Tools", "Frames & Auto Layout", "Components & Variants", "Colors & Typography", "Prototyping Basics", "Sharing & Handoff"],
    modules: ["Introduction to Figma", "Working with Frames & Shapes", "Auto Layout Mastery", "Components & Variants", "Prototyping & Interactions", "Sharing and Developer Handoff"],
  }),
  build(2, {
    title: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    category: "Design", level: "Intermediate", price: 25, lessons: 112, hours: 24, mins: 0,
    rating: 4.8, reviewsCount: 172, students: 199,
    description: [
      "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, 'Build Digital Assets: A Comprehensive Guide.' This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content.",
      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secret behind effective communication, exploring color theory, typography, and layout strategies.",
    ],
    keyPoints: ["Foundational Concepts", "Design Principles Mastery", "Advanced Techniques in Digital Creation", "Project Showcase and Critique", "Optimizing for Various Platforms", "Digital Asset Management Best Practices", "Monetization Strategies", "Capstone Project: Building Your Portfolio"],
    modules: ["Introduction to Digital Assets", "Design Principles for Impact", "User-Centric Design Strategies", "Immersive Media and Engagement", "Project Showcases and Critique", "Optimizing Digital Assets for Various Platforms", "Monetizing Your Digital Assets"],
  }),
  build(3, {
    title: "The Power of Big Data",
    subtitle: "Turn massive datasets into decisions that matter",
    category: "Data", level: "Intermediate", price: 30, lessons: 42, hours: 9, mins: 30,
    rating: 4.6, reviewsCount: 134, students: 412,
    description: [
      "Big data is reshaping every industry. In this course you will understand how data is collected, stored, processed and turned into actionable insight.",
      "Through case studies and hands-on labs you will work with real pipelines, dashboards and storytelling techniques used by modern data teams.",
    ],
    keyPoints: ["Big Data Fundamentals", "Data Storage & Warehousing", "Batch vs Stream Processing", "Data Visualization", "Data Ethics & Privacy", "Capstone Analytics Project"],
    modules: ["What is Big Data?", "Storage and Data Warehousing", "Processing Pipelines", "Analytics and Visualization", "Data Ethics and Governance", "Real-World Case Studies"],
  }),
  build(4, {
    title: "Balancing Productivity and Life",
    subtitle: "Build habits that keep you focused without burning out",
    category: "Personal Growth", level: "Beginner", price: 15, lessons: 20, hours: 4, mins: 10,
    rating: 4.4, reviewsCount: 88, students: 356,
    description: [
      "Productivity is not about doing more, it is about doing what matters. This course gives you a practical system to plan your days and protect your energy.",
      "You will learn time blocking, deep work, boundary setting and weekly reviews, with templates you can start using immediately.",
    ],
    keyPoints: ["Goal Setting", "Time Blocking", "Deep Work Habits", "Managing Digital Distractions", "Healthy Boundaries", "Weekly Review System"],
    modules: ["Rethinking Productivity", "Goals That Stick", "Time Blocking Your Week", "Deep Work and Focus", "Rest, Energy and Boundaries", "Building Your Personal System"],
  }),
  build(5, {
    title: "Mastering Money Management",
    subtitle: "Budgeting, saving and investing made simple",
    category: "Finance", level: "Beginner", price: 20, lessons: 28, hours: 6, mins: 5,
    rating: 4.7, reviewsCount: 210, students: 640,
    description: [
      "Take control of your finances with clear, jargon-free lessons. Learn how to budget, build an emergency fund and start investing with confidence.",
      "Each module includes worksheets and real scenarios so you can apply everything to your own situation.",
    ],
    keyPoints: ["Personal Budgeting", "Emergency Fund Planning", "Debt Management", "Intro to Investing", "Setting Financial Goals", "Long-Term Wealth Habits"],
    modules: ["Your Money Mindset", "Building a Budget", "Saving and Emergency Funds", "Understanding Debt", "Introduction to Investing", "Planning for the Future"],
  }),
  build(6, {
    title: "From Idea to Startup Success",
    subtitle: "Validate, build and launch your first startup",
    category: "Business", level: "Intermediate", price: 45, lessons: 56, hours: 12, mins: 40,
    rating: 4.6, reviewsCount: 145, students: 288,
    description: [
      "Go from a rough idea to a launched product. This course walks you through validation, MVP building, branding and early growth.",
      "Learn from real founder stories and complete a full startup canvas and launch plan by the end.",
    ],
    keyPoints: ["Idea Validation", "Lean Canvas", "MVP Building", "Branding Basics", "Pitching to Investors", "Early Growth Tactics"],
    modules: ["Finding a Problem Worth Solving", "Validating Your Idea", "Building the MVP", "Branding and Positioning", "Fundraising and Pitching", "Launch and Early Growth"],
  }),
  build(7, {
    title: "Next.js for Beginners",
    subtitle: "Build fast, modern full-stack apps with the App Router",
    category: "Development", level: "Beginner", price: 35, lessons: 48, hours: 10, mins: 20,
    rating: 4.9, reviewsCount: 320, students: 1120,
    description: [
      "Learn Next.js from the ground up: routing, layouts, data fetching, server components and deployment.",
      "You will build a complete project with dynamic routes, API routes and Tailwind CSS styling.",
    ],
    keyPoints: ["App Router Basics", "Dynamic Routes", "Server & Client Components", "Data Fetching", "API Route Handlers", "Deploying to Vercel"],
    modules: ["Getting Started with Next.js", "Routing and Layouts", "Dynamic Routes and Params", "Server and Client Components", "Data Fetching Patterns", "Deployment and Optimization"],
  }),
  build(8, {
    title: "UI/UX Design Fundamentals",
    subtitle: "Design interfaces people actually love to use",
    category: "Design", level: "Beginner", price: 28, lessons: 36, hours: 8, mins: 15,
    rating: 4.7, reviewsCount: 190, students: 530,
    description: [
      "Understand the core of user-centered design: research, wireframes, visual hierarchy and usability testing.",
      "Practice with guided exercises and finish with a full case study for your portfolio.",
    ],
    keyPoints: ["User Research", "Wireframing", "Visual Hierarchy", "Color & Typography", "Usability Testing", "Portfolio Case Study"],
    modules: ["What is UX vs UI?", "User Research Methods", "Wireframes and Flows", "Visual Design Essentials", "Usability Testing", "Building a Case Study"],
  }),
  build(9, {
    title: "Python for Data Analysis",
    subtitle: "Clean, analyze and visualize data with Pandas",
    category: "Data", level: "Intermediate", price: 32, lessons: 44, hours: 11, mins: 0,
    rating: 4.8, reviewsCount: 265, students: 870,
    description: [
      "Use Python to answer real questions with data. You will work with Pandas, NumPy and Matplotlib on realistic datasets.",
      "By the end you will be able to clean messy data, run analysis and present findings clearly.",
    ],
    keyPoints: ["Python Refresher", "Pandas DataFrames", "Data Cleaning", "Exploratory Analysis", "Visualization with Matplotlib", "Mini Analytics Project"],
    modules: ["Python for Analysts", "NumPy Essentials", "Working with Pandas", "Cleaning Messy Data", "Visualizing Insights", "End-to-End Project"],
  }),
  build(10, {
    title: "Digital Marketing Essentials",
    subtitle: "SEO, social media and ads in one practical course",
    category: "Marketing", level: "Beginner", price: 22, lessons: 30, hours: 7, mins: 10,
    rating: 4.5, reviewsCount: 121, students: 402,
    description: [
      "Learn the building blocks of digital marketing and how each channel fits together in a real campaign.",
      "Plan, launch and measure your own mini campaign with guided templates.",
    ],
    keyPoints: ["Marketing Funnel", "SEO Basics", "Social Media Strategy", "Paid Ads", "Email Marketing", "Analytics & Reporting"],
    modules: ["Digital Marketing Landscape", "SEO Foundations", "Social Media Marketing", "Running Paid Ads", "Email Marketing", "Measuring Results"],
  }),
  build(11, {
    title: "Mastering React Hooks",
    subtitle: "Write cleaner, more powerful React components",
    category: "Development", level: "Advanced", price: 40, lessons: 38, hours: 8, mins: 45,
    rating: 4.9, reviewsCount: 298, students: 760,
    description: [
      "Go beyond useState and useEffect. Learn useReducer, useMemo, useCallback, useRef and how to design custom hooks.",
      "Refactor a real-world app step by step and learn the patterns used by production teams.",
    ],
    keyPoints: ["useState & useEffect Deep Dive", "useReducer Patterns", "Memoization", "Custom Hooks", "Context API", "Performance Optimization"],
    modules: ["Hooks Mental Model", "State Management with Hooks", "Effects Done Right", "Performance and Memoization", "Building Custom Hooks", "Refactoring a Real App"],
  }),
  build(12, {
    title: "Photography Basics",
    subtitle: "Capture stunning photos with any camera",
    category: "Creative", level: "Beginner", price: 18, lessons: 24, hours: 5, mins: 30,
    rating: 4.4, reviewsCount: 97, students: 318,
    description: [
      "Understand exposure, composition and light so you can take confident photos in any situation.",
      "Includes simple editing workflows to make your images stand out.",
    ],
    keyPoints: ["Exposure Triangle", "Composition Rules", "Natural Light", "Portrait Basics", "Editing Workflow", "Building a Photo Portfolio"],
    modules: ["Know Your Camera", "Exposure Explained", "Composition Techniques", "Working with Light", "Portrait and Street Photography", "Editing Your Photos"],
  }),
  build(13, {
    title: "Public Speaking Confidence",
    subtitle: "Speak clearly, calmly and persuasively",
    category: "Personal Growth", level: "Beginner", price: 16, lessons: 18, hours: 3, mins: 50,
    rating: 4.6, reviewsCount: 109, students: 275,
    description: [
      "Overcome stage fright and learn how to structure and deliver talks that people remember.",
      "Practice with short daily exercises and get a framework for any presentation.",
    ],
    keyPoints: ["Managing Nerves", "Structuring a Talk", "Voice & Body Language", "Storytelling", "Handling Q&A", "Virtual Presenting"],
    modules: ["Understanding Stage Fright", "Structuring Your Message", "Voice and Body Language", "Storytelling for Speakers", "Handling Questions", "Presenting Online"],
  }),
  build(14, {
    title: "Freelancing with Upwork",
    subtitle: "Land your first client and grow a steady income",
    category: "Business", level: "Beginner", price: 24, lessons: 26, hours: 5, mins: 55,
    rating: 4.5, reviewsCount: 132, students: 590,
    description: [
      "Learn how to set up a winning profile, write proposals and manage clients professionally.",
      "Includes proposal templates and pricing strategies tailored for beginners.",
    ],
    keyPoints: ["Profile Optimization", "Writing Proposals", "Pricing Your Work", "Client Communication", "Time Management", "Scaling Your Freelance Career"],
    modules: ["Freelancing Landscape", "Creating a Winning Profile", "Finding the Right Jobs", "Proposals That Convert", "Delivering Great Work", "Growing Long-Term Clients"],
  }),
  build(15, {
    title: "Mobile App Design with Flutter",
    subtitle: "Build beautiful cross-platform apps from one codebase",
    category: "Development", level: "Intermediate", price: 42, lessons: 60, hours: 14, mins: 20,
    rating: 4.7, reviewsCount: 204, students: 445,
    description: [
      "Learn Flutter and Dart to design and build polished iOS and Android apps.",
      "You will create three complete apps and learn state management, navigation and API integration.",
    ],
    keyPoints: ["Dart Basics", "Widgets & Layouts", "Navigation", "State Management", "API Integration", "Publishing Your App"],
    modules: ["Dart Fundamentals", "Widgets and Layouts", "Navigation and Routing", "State Management", "Working with APIs", "Publishing to Stores"],
  }),
  build(16, {
    title: "Cyber Security Essentials",
    subtitle: "Protect people, systems and data from modern threats",
    category: "Security", level: "Intermediate", price: 38, lessons: 40, hours: 9, mins: 45,
    rating: 4.8, reviewsCount: 176, students: 380,
    description: [
      "Get a solid foundation in cyber security: threats, network defense, cryptography and incident response.",
      "Hands-on labs help you spot vulnerabilities and apply practical defenses.",
    ],
    keyPoints: ["Threat Landscape", "Network Security", "Cryptography Basics", "Web Application Security", "Incident Response", "Security Best Practices"],
    modules: ["Security Fundamentals", "Understanding Threats", "Network Defense", "Cryptography in Practice", "Securing Web Apps", "Incident Response Basics"],
  }),
  build(17, {
    title: "Content Writing Mastery",
    subtitle: "Write content that ranks, engages and converts",
    category: "Marketing", level: "Beginner", price: 19, lessons: 22, hours: 4, mins: 40,
    rating: 4.5, reviewsCount: 93, students: 260,
    description: [
      "Learn how to research topics, craft compelling headlines and write clear, persuasive copy.",
      "Finish with a small writing portfolio and an editing checklist you can reuse.",
    ],
    keyPoints: ["Audience Research", "Headlines That Work", "Structuring Articles", "SEO Writing", "Editing & Proofreading", "Building a Writing Portfolio"],
    modules: ["Writing With Purpose", "Researching Topics", "Headlines and Hooks", "Structuring Long Content", "SEO Writing Basics", "Editing Like a Pro"],
  }),
  build(18, {
    title: "Video Editing with Premiere Pro",
    subtitle: "Edit professional videos from rough cut to final export",
    category: "Creative", level: "Intermediate", price: 34, lessons: 46, hours: 10, mins: 35,
    rating: 4.7, reviewsCount: 158, students: 498,
    description: [
      "Master Adobe Premiere Pro workflows: organizing footage, cutting, color grading, audio mixing and exporting.",
      "Follow along with real projects including a YouTube video and a short promo.",
    ],
    keyPoints: ["Project Setup", "Cutting & Pacing", "Transitions & Effects", "Color Grading", "Audio Mixing", "Export Settings"],
    modules: ["Premiere Pro Workspace", "Organizing and Cutting Footage", "Transitions, Titles and Effects", "Color Correction and Grading", "Audio Cleanup and Mixing", "Exporting for Every Platform"],
  }),
];

export function getCourseById(id) {
  return courses.find((c) => c.id === Number(id));
}