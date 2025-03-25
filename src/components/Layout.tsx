import React from "react";
import { ReactNode, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
  Avatar,
  Stack,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const menuItems = [
    { text: "Home", path: "/", icon: <HomeIcon /> },
    { text: "Projects", path: "/projects", icon: <CodeIcon /> },
    { text: "Experience", path: "/experience", icon: <WorkIcon /> },
    { text: "About", path: "/about", icon: <PersonIcon /> },
    { text: "Contact", path: "/contact", icon: <ContactMailIcon /> },
  ];

  const socialLinks = [
    {
      icon: <GitHubIcon />,
      url: "https://github.com/Sharmasumit14",
      label: "GitHub",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/sumit-sharma-4882ab21b/",
      label: "LinkedIn",
    },
    // {
    //   icon: <TwitterIcon />,
    //   url: "https://twitter.com/yourusername",
    //   label: "Twitter",
    // },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 280, height: "100%" }}>
      <Box
        sx={{
          p: 4,
          textAlign: "center",
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(236,72,153,0.15))",
          borderRadius: "0 0 30px 30px",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at top right, rgba(124,58,237,0.2), transparent 70%)",
            zIndex: 0,
          },
        }}
      >
        <Avatar
          sx={{
            width: 120,
            height: 120,
            margin: "0 auto 20px",
            border: "4px solid",
            borderImage: "linear-gradient(135deg, #7C3AED, #EC4899) 1",
            position: "relative",
            zIndex: 1,
            boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
          }}
          component={motion.div}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        ></Avatar>
        <Typography
          variant="h5"
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            background: "linear-gradient(135deg, #7C3AED, #EC4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
            position: "relative",
            zIndex: 1,
            textShadow: "0 2px 10px rgba(124,58,237,0.2)",
          }}
        >
          Sumit Sharma
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mt: 1,
            position: "relative",
            zIndex: 1,
            opacity: 0.8,
          }}
        >
          Full Stack Developer
        </Typography>
      </Box>
      <Divider sx={{ my: 3, opacity: 0.2 }} />
      <List sx={{ px: 2 }}>
        {menuItems.map((item, index) => (
          <Link
            to={item.path}
            key={item.text}
            style={{ textDecoration: "none" }}
          >
            <ListItem
              button
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(124, 58, 237, 0.1)",
                borderRadius: "12px",
                margin: "0 8px",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <ListItemIcon
                sx={{
                  color:
                    location.pathname === item.path
                      ? "primary.main"
                      : "text.secondary",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  color:
                    location.pathname === item.path
                      ? "primary.main"
                      : "text.primary",
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "4px",
                    height: "0%",
                    background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                    transition: "height 0.3s ease",
                    borderRadius: "0 4px 4px 0",
                  },
                  "&:hover::before": {
                    height: "100%",
                  },
                }}
              />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider sx={{ my: 3, opacity: 0.2 }} />
      <Box sx={{ px: 3, pb: 3 }}>
        <Stack direction="row" spacing={2} justifyContent="center">
          {socialLinks.map((social) => (
            <Tooltip key={social.label} title={social.label}>
              <IconButton
                component={motion.a}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  color: "text.secondary",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {social.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Stack>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box component="nav" sx={{ width: { sm: 280 }, flexShrink: { sm: 0 } }}>
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
            }}
            open
          >
            {drawer}
          </Drawer>
        )}
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 280px)` },
          ml: { sm: "280px" },
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.8), rgba(30,41,59,0.8))",
          minHeight: "100vh",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at top right, rgba(124,58,237,0.1), transparent 70%)",
            pointerEvents: "none",
          },
        }}
      >
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              position: "fixed",
              top: 16,
              right: 16,
              zIndex: 1200,
              background: "rgba(15, 23, 42, 0.8)",
              backdropFilter: "blur(10px)",
              "&:hover": {
                background: "rgba(15, 23, 42, 0.9)",
              },
            }}
            component={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Container maxWidth="lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          background: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(124, 58, 237, 0.2)",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()} Your Portfolio. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
