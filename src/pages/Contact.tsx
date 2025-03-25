import React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, sending an email or saving to a database
    setSnackbar({
      open: true,
      message: "Message sent successfully!",
      severity: "success",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const socialLinks = [
    {
      icon: <GitHubIcon />,
      url: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    {
      icon: <EmailIcon />,
      url: "mailto:your.email@example.com",
      label: "Email",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Your Portfolio - Contact</title>
        <meta
          name="description"
          content="Get in touch with me for collaboration or inquiries about my work."
        />
        <meta property="og:title" content="Your Portfolio - Contact" />
        <meta
          property="og:description"
          content="Get in touch with me for collaboration or inquiries about my work."
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
          Get in Touch
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
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
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
              Contact Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </form>
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
              Connect With Me
            </Typography>
            <Box sx={{ mt: 3 }}>
              {socialLinks.map((link) => (
                <IconButton
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mr: 2, mb: 2 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Box>
            <Typography variant="body1" paragraph sx={{ mt: 3 }}>
              Feel free to reach out through any of these platforms or use the
              contact form. I typically respond within 24 hours.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;
