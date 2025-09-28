import type { Skill, Project, Experience, Education, BlogPost } from './types';

export const NAME = 'Adil Munawar';
export const ROLE = 'Full Stack Developer';
export const BIO = {
  short:
    "I'm a passionate full-stack developer specializing in creating modern and performant web applications. I thrive on turning complex problems into elegant, user-friendly solutions.",
  long: "Hello! I'm Adil, a full-stack developer with a strong foundation in both front-end and back-end technologies. My journey in software development has been driven by a curiosity for how things work and a desire to build applications that make a real impact. I'm proficient in the JavaScript ecosystem, particularly with React, Next.js, and Node.js, and I'm always eager to learn new technologies and improve my craft. When I'm not coding, I enjoy exploring the outdoors and contributing to open-source projects.",
};

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com/in',
  twitter: 'https://twitter.com',
};

export const SKILLS: Skill[] = [
  { name: 'TypeScript', proficiency: 95 },
  { name: 'React', proficiency: 90 },
  { name: 'Next.js', proficiency: 90 },
  { name: 'Node.js', proficiency: 85 },
  { name: 'PostgreSQL', proficiency: 80 },
  { name: 'Docker', proficiency: 75 },
  { name: 'Tailwind CSS', proficiency: 95 },
  { name: 'GraphQL', proficiency: 70 },
];

export const PROJECTS: Project[] = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process. Built with a microservices architecture for scalability.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    imageId: 'project-1',
  },
  {
    title: 'Real-time Task Manager',
    description:
      'A collaborative task management application allowing teams to organize projects in real-time. Features include drag-and-drop boards and live updates with WebSockets.',
    technologies: ['React', 'Express.js', 'Socket.IO', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    imageId: 'project-2',
  },
  {
    title: 'Developer Portfolio',
    description:
      'A personal portfolio website to showcase my skills and projects, featuring a personalized bio generator powered by GenAI and a blog.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Genkit'],
    liveUrl: '#',
    githubUrl: '#',
    imageId: 'project-3',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'TechCorp',
    role: 'Senior Full-Stack Developer',
    startDate: 'Jan 2021',
    endDate: 'Present',
    description: [
      'Led the development of a new customer-facing analytics dashboard using Next.js and Chart.js, improving data visualization and user engagement.',
      'Architected and implemented a new RESTful API service with Node.js and Express, reducing latency by 30%.',
      'Mentored junior developers, conducting code reviews and providing technical guidance.',
    ],
  },
  {
    company: 'Innovate LLC',
    role: 'Software Engineer',
    startDate: 'Jun 2018',
    endDate: 'Dec 2020',
    description: [
      'Contributed to a large-scale React application, developing new features and maintaining existing code.',
      'Collaborated with a team of designers and developers to create a responsive and accessible user interface.',
      'Wrote unit and integration tests to ensure code quality and reliability.',
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: 'University of Technology',
    degree: 'B.S. in Computer Science',
    startDate: '2014',
    endDate: '2018',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'deep-dive-into-react-server-components',
    title: 'A Deep Dive into React Server Components',
    date: '2024-05-15',
    excerpt:
      'Explore the future of React with Server Components. Understand how they work, why they are a game-changer for performance, and how to start using them in your Next.js apps.',
    content:
      'React Server Components (RSCs) are a new architecture that allows you to render components on the server, reducing the amount of JavaScript sent to the client. This results in faster initial page loads and a better user experience. In this post, we will explore the concepts behind RSCs, compare them to traditional server-side rendering (SSR), and walk through practical examples of how to implement them in a Next.js application. We will cover data fetching, state management, and the new patterns that emerge with this powerful feature.',
    imageId: 'blog-1',
  },
  {
    slug: 'mastering-typescript-for-large-scale-apps',
    title: 'Mastering TypeScript for Large-Scale Apps',
    date: '2024-04-22',
    excerpt:
      'TypeScript is more than just types. Learn advanced patterns and best practices for building robust, maintainable, and scalable applications with TypeScript.',
    content:
      "As applications grow in complexity, maintaining code quality and preventing bugs becomes a major challenge. TypeScript's static type system is a powerful tool for addressing this, but its benefits go far beyond simple type checking. This article covers advanced TypeScript features like generics, conditional types, and module augmentation. We'll also discuss design patterns such as dependency injection and how to structure your project for maximum scalability and developer productivity. Whether you're a seasoned TypeScript developer or just starting, you'll find valuable insights to level up your skills.",
    imageId: 'blog-2',
  },
  {
    slug: 'cicd-pipelines-with-docker-and-github-actions',
    title: 'CI/CD Pipelines with Docker and GitHub Actions',
    date: '2024-03-10',
    excerpt:
      'Automate your development workflow from commit to deployment. This guide walks you through setting up a CI/CD pipeline using Docker and GitHub Actions.',
    content:
      'A solid CI/CD pipeline is essential for modern software development. It automates testing and deployment, allowing teams to ship features faster and more reliably. In this tutorial, we will build a complete CI/CD pipeline from scratch. We will start by containerizing a Node.js application with Docker. Then, we will configure GitHub Actions to automatically build the Docker image, run tests, and deploy the application to a cloud provider. You will learn best practices for writing workflow files, managing secrets, and optimizing your pipeline for speed and efficiency.',
    imageId: 'blog-3',
  },
];
