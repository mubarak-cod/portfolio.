// projects.js

export const projects = [
  {
    id: 1,
    title: "CAC Camp Experience Platform",
    description:
      "A fully responsive web platform showcasing camp activities, memories, and navigation features with custom map integration and animated UI components.",
    image: "/images/cac-camp.png",
    category: "Full Stack",
    technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    metrics: {
      users: "2K+",
      performance: "95 Lighthouse",
      loadTime: "1.2s"
    },
    demoUrl: "https://experienceikejiarakeji.com",
    githubUrl: "https://github.com/yourusername/cac-camp"
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description:
      "A modern admin dashboard with order tracking, analytics, and real-time updates for managing products and customer activities.",
    image: "/images/dashboard.png",
    category: "Web Apps",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    metrics: {
      users: "500+",
      performance: "92 Lighthouse",
      loadTime: "1.5s"
    },
    demoUrl: "https://your-dashboard-demo.com",
    githubUrl: "https://github.com/yourusername/dashboard"
  },
  {
    id: 3,
    title: "Animated UI Component Library",
    description:
      "A collection of reusable and highly animated UI components built for scalability and performance in modern web apps.",
    image: "/images/ui-library.png",
    category: "UI Components",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    metrics: {
      components: "30+",
      reuseRate: "High",
      performance: "Optimized"
    },
    demoUrl: "https://your-ui-library.com",
    githubUrl: "https://github.com/yourusername/ui-library"
  },
  {
    id: 4,
    title: "Portfolio Website (Next.js)",
    description:
      "A high-performance personal portfolio with smooth animations, case studies, and optimized SEO for visibility.",
    image: "/images/portfolio.png",
    category: "Web Apps",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    metrics: {
      performance: "98 Lighthouse",
      seo: "100%",
      accessibility: "95%"
    },
    demoUrl: "https://your-portfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio"
  },
  {
    id: 5,
    title: "Authentication System",
    description:
      "Secure authentication system with sign-up, login, protected routes, and user profile management using modern backend services.",
    image: "/images/auth.png",
    category: "Full Stack",
    technologies: ["React", "Firebase", "Node.js"],
    metrics: {
      security: "JWT/Auth",
      uptime: "99.9%",
      users: "1K+"
    },
    demoUrl: "https://your-auth-app.com",
    githubUrl: "https://github.com/yourusername/auth-system"
  },
  {
    id: 6,
    title: "Interactive Image & Video Slider",
    description:
      "A smooth and responsive media slider with swipe gestures, animations, and optimized performance for both mobile and desktop.",
    image: "/images/slider.png",
    category: "UI Components",
    technologies: ["React", "CSS", "JavaScript"],
    metrics: {
      fps: "60fps",
      responsiveness: "Mobile-first",
      performance: "Optimized"
    },
    demoUrl: "https://your-slider-demo.com",
    githubUrl: "https://github.com/yourusername/slider"
  }
];

export const categories = [
  "All",
  "Web Apps",
  "UI Components",
  "Full Stack"
];