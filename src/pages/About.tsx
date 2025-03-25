import React from "react";
import { Box, Typography, Grid, Paper, LinearProgress } from "@mui/material";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "SQL", level: 85 },
  { name: "Git", level: 90 },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>Your Portfolio - About Me</title>
        <meta
          name="description"
          content="Learn more about me, my background, and my passion for software development."
        />
        <meta property="og:title" content="Your Portfolio - About Me" />
        <meta
          property="og:description"
          content="Learn more about me, my background, and my passion for software development."
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
          About Me
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            sx={{ p: 3, height: "100%" }}
          >
            <Typography variant="h5" gutterBottom>
              My Story
            </Typography>
            <Typography variant="body1" paragraph>
              I'm a passionate software developer with a strong foundation in
              web development and a keen interest in creating innovative
              solutions. My journey in software development began [Your Story
              Here].
            </Typography>
            <Typography variant="body1" paragraph>
              I believe in writing clean, maintainable code and following best
              practices to deliver high-quality software solutions. I'm always
              eager to learn new technologies and stay up-to-date with the
              latest industry trends.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            sx={{ p: 3, height: "100%" }}
          >
            <Typography variant="h5" gutterBottom>
              Skills & Expertise
            </Typography>
            <Box sx={{ mt: 3 }}>
              {skills.map((skill) => (
                <Box key={skill.name} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography variant="body1">{skill.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.level}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: "grey.200",
                      "& .MuiLinearProgress-bar": {
                        borderRadius: 4,
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            sx={{ p: 3 }}
          >
            <Typography variant="h5" gutterBottom>
              Education
            </Typography>
            <Typography variant="h6" gutterBottom>
              [Your Degree]
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              [University Name] • [Year]
            </Typography>
            <Typography variant="body1">
              [Brief description of your academic achievements and relevant
              coursework]
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
