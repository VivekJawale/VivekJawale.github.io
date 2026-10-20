// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Vivek Jawale",
  role: "Software Engineer",
  tagline:
    "Full-stack engineer working with Golang and React, focused on fast, reliable products for fintech.",
  summary: [
    "I'm a software engineer with 3+ years of experience building algorithmic trading products. I currently work as an SDE-II at Motilal Oswal on StratX, a platform advisors and clients use to run automated trading strategies.",
    "I work across the stack: Golang microservices, gRPC and REST APIs on the backend, and fast, data-heavy React interfaces on the front. I like hard problems, picking up new tools quickly, and shipping with a team.",
  ],
  location: "Mumbai, Maharashtra",
  email: "vivekjawale41@gmail.com",
  phone: "+91 83906 63831",
  resume: "/Vivek-Jawale-Resume.pdf",
  githubUser: "vivekjawale",
  // Set to true to show the GitHub contribution calendar (hidden while public activity is low).
  showGithubCalendar: false,
  links: {
    github: "https://github.com/vivekjawale",
    linkedin: "https://www.linkedin.com/in/vivek-jawale-30828a200/",
    leetcode: "https://leetcode.com/vivekjawale41/",
  },
};

export const experience = [
  {
    company: "Motilal Oswal Financial Services",
    role: "SDE-II",
    period: "Apr 2024 — Present",
    location: "Mumbai",
    product: "StratX",
    blurb:
      "An advanced algorithmic trading platform used by advisors and clients to manage automated strategies.",
    points: [
      "Developed core features of the StratX trading platform using React and Golang.",
      "Built and optimized real-time data pipelines on NATS for market updates and position tracking.",
      "Built real-time PnL calculations and position updates for live trading strategies.",
      "Shipped dashboards for live PnL, positions, order management and strategy monitoring.",
      "Implemented strategy management and portfolio tracking modules for advisor and client workflows.",
      "Improved system performance by optimizing subscription handling and real-time event processing.",
    ],
    stack: ["Golang", "React", "Redux Toolkit", "Chakra UI", "NATS", "MongoDB"],
  },
  {
    company: "Novotoc Infotech",
    role: "Software Developer",
    period: "Jun 2023 — Apr 2024",
    location: "Mumbai",
    product: "KEEV",
    blurb:
      "A no-code algorithmic trading platform for backtesting, optimization, forward testing and automated live trading.",
    points: [
      "Built responsive trading dashboards and strategy configuration interfaces.",
      "Created stock analysis tools and visualization dashboards for clients.",
      "Unified multi-broker deployments under a single theming system.",
      "Integrated trading APIs and strategy execution workflows with the backend team.",
      "Built advanced UI components for strategy building, analytics and charting.",
    ],
    stack: ["React", "Redux", "Redux Toolkit", "Redux Persist", "Chakra UI", "Golang", "Chart.js"],
  },
  {
    company: "Masai School",
    role: "Full Stack Development Intern",
    period: "Jun 2022 — Mar 2023",
    location: "Remote",
    points: [
      "Built MERN stack applications, from static websites to dynamic full-stack apps.",
      "Worked in collaborative teams following modern development workflows.",
    ],
    stack: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
  },
];

export const skills = [
  { group: "Languages", items: ["Golang", "JavaScript"] },
  {
    group: "Backend",
    items: ["Microservices", "REST APIs", "gRPC", "Protocol Buffers", "Fiber",  "NATS"],
  },
  { group: "Frontend", items: ["React", "Redux", "Redux Toolkit", "Chakra UI", "Chart.js"] },
  { group: "Data", items: ["MongoDB", "Redis", "SQL"] },
];

export const education = [
  {
    title: "Full-Stack Web Development",
    school: "Masai School, Bangalore",
    period: "2022 — 2023",
  },
  {
    title: "Bachelor of Arts",
    school: "YCMOU, Nashik",
    period: "2019 — 2022",
  },
  {
    title: "B.Tech, Instrumentation (did not complete)",
    school: "Government College of Engineering, Jalgaon",
    period: "2015 — 2018",
  },
  {
    title: "Higher Secondary",
    school: "Shri Saraswati Junior College, Janephal",
    period: "2013 — 2015",
  },
];

export const certifications = [
  "Problem Solving (Basic) — HackerRank",
  "JavaScript (Basic) — HackerRank",
  "3★ Problem Solving — HackerRank",
];
