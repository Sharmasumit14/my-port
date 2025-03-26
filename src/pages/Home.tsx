import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sumit Sharma</title>
        <meta
          name="description"
          content="Welcome to my portfolio website. I'm a passionate developer showcasing my projects and experience."
        />
        <meta property="og:title" content="Sumit Sharma" />
        <meta
          property="og:description"
          content="Welcome to my portfolio website. I'm a passionate developer showcasing my projects and experience."
        />
      </Helmet>

      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mb: 8,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: 700,
            mb: 2,
          }}
        >
          Hi, I'm [Your Name]
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "text.secondary",
            mb: 4,
          }}
        >
          Full Stack Developer
        </Typography>
        <Button
          component={Link}
          to="/projects"
          variant="contained"
          size="large"
          sx={{ mt: 2 }}
        >
          View My Work
        </Button>
      </Box>

      {/* Featured Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card
            component={motion.div}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                Projects
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Explore my latest projects and see how I've applied my skills to
                create innovative solutions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            component={motion.div}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                Experience
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Learn about my professional journey and the valuable experience
                I've gained along the way.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            component={motion.div}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                Skills
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Discover my technical expertise and the technologies I'm
                passionate about.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
