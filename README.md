# Modern Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Material-UI. This portfolio features smooth animations, SEO optimization, and a clean, professional design.

## Features

- 🎨 Modern and responsive design
- ⚡ Fast performance with React and Vite
- 📱 Mobile-friendly layout
- 🔍 SEO optimized with React Helmet
- ✨ Smooth animations with Framer Motion
- 🎯 Easy to customize and extend

## Pages

- Home: Introduction and featured content
- Projects: Showcase of your work
- Experience: Professional journey and work history
- About: Personal information and skills
- Contact: Contact form and social links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

### Personal Information

1. Update your personal information in the following files:
   - `src/pages/Home.tsx`: Update the hero section with your name and title
   - `src/pages/About.tsx`: Modify the story section and skills
   - `src/pages/Experience.tsx`: Add your work experience
   - `src/pages/Projects.tsx`: Add your projects
   - `src/pages/Contact.tsx`: Update social media links and contact information

### Styling

1. The theme configuration is in `src/theme.ts`. You can customize:
   - Color palette
   - Typography
   - Component styles

### Projects

To add a new project, update the `projects` array in `src/pages/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    image: "path/to/image.jpg",
    technologies: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://project-url.com",
  },
  // Add more projects...
];
```

### Experience

To add work experience, update the `experiences` array in `src/pages/Experience.tsx`:

```typescript
const experiences: Experience[] = [
  {
    id: 1,
    company: "Company Name",
    position: "Job Title",
    period: "2020 - Present",
    description: "Job description and achievements",
    technologies: ["React", "Node.js", "TypeScript"],
  },
  // Add more experiences...
];
```

### Skills

To update your skills, modify the `skills` array in `src/pages/About.tsx`:

```typescript
const skills: Skill[] = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  // Add more skills...
];
```

## Deployment

1. Build the project:

```bash
npm run build
# or
yarn build
```

2. Deploy the `dist` folder to your preferred hosting service (e.g., Netlify, Vercel, GitHub Pages).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
