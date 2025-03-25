import React from "react";
import { Box, Typography, Paper, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Company 1",
    position: "Senior Full Stack Developer",
    period: "2020 - Present",
    description:
      "Led the development of multiple web applications using React and Node.js. Implemented new features and improved application performance.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
  },
  {
    id: 2,
    company: "Company 2",
    position: "Full Stack Developer",
    period: "2018 - 2020",
    description:
      "Developed and maintained web applications using modern technologies. Collaborated with the team to deliver high-quality solutions.",
    technologies: ["JavaScript", "Python", "Django", "PostgreSQL"],
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>Your Portfolio - Experience</title>
        <meta
          name="description"
          content="Explore my professional experience and career journey in software development."
        />
        <meta property="og:title" content="Your Portfolio - Experience" />
        <meta
          property="og:description"
          content="Explore my professional experience and career journey in software development."
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
          Professional Experience
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
          My journey in software development, highlighting key roles and
          achievements.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {experiences.map((exp) => (
          <Grid item xs={12} key={exp.id}>
            <Paper
              component={motion.div}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              sx={{
                p: 3,
                height: "100%",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "4px",
                  backgroundColor: "primary.main",
                  borderRadius: "2px",
                },
              }}
            >
              <Typography variant="h5" component="h2" gutterBottom>
                {exp.position}
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                {exp.company}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                {exp.period}
              </Typography>
              <Typography variant="body1" paragraph>
                {exp.description}
              </Typography>
              <Box sx={{ mt: 2 }}>
                {exp.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{ mr: 1, mb: 1 }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Experience;
