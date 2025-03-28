import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "CoGig",
    description:
      "A brief description of your first project and its key features.",
    image: "https://via.placeholder.com/400x300",
    technologies: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.com",
  },
  {
    id: 2,
    title: "Glacial Adventures",
    description:
      "A brief description of your second project and its key features.",
    image: "https://via.placeholder.com/400x300",
    technologies: ["Next.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2.com",
  },
  {
    id: 3,
    title: "Vizygo",
    description:
      "A brief description of your second project and its key features.",
    image: "https://via.placeholder.com/400x300",
    technologies: ["Next.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2.com",
  },
  {
    id: 4,
    title: "Cobuild",
    description:
      "A brief description of your second project and its key features.",
    image: "https://via.placeholder.com/400x300",
    technologies: ["Next.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2.com",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Sumit Sharma - Projects</title>
        <meta
          name="description"
          content="Explore my portfolio of web development projects showcasing my skills and expertise."
        />
        <meta property="og:title" content="Your Portfolio - Projects" />
        <meta
          property="og:description"
          content="Explore my portfolio of web development projects showcasing my skills and expertise."
        />
      </Helmet>

      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 4,
            textAlign: "center",
          }}
        >
          My Projects
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            textAlign: "center",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          Here are some of the projects I've worked on.Each project
          demonstrates different aspects of my skills and expertise.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <Card
              component={motion.div}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              sx={{ height: "100%" }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    variant="outlined"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="contained"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Projects;
