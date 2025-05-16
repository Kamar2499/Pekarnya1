import * as React from 'react';
import { Box, Container, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: 'primary.main',
        background: 'linear-gradient(135deg, #8B4513 0%, #5D4037 100%)',
        color: 'primary.contrastText',
        py: { xs: 10, md: 15 },
        textAlign: 'center',
        mb: 8,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/bread-pattern.png")',
          opacity: 0.05,
          pointerEvents: 'none',
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant={isMobile ? 'h3' : 'h2'} 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold',
                mb: 4,
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                color: 'secondary.main',
                lineHeight: 1.2
              }}
            >
              Добро пожаловать в нашу пекарню
            </Typography>
            <Typography 
              variant={isMobile ? 'h6' : 'h5'} 
              sx={{ 
                mb: 6, 
                maxWidth: '800px', 
                mx: 'auto',
                color: 'primary.contrastText',
                fontWeight: 300
              }}
            >
              Насладитесь свежей выпечкой, приготовленной с любовью по традиционным рецептам
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                component={Link} 
                to="/menu" 
                variant="contained" 
                color="secondary" 
                size="large"
                sx={{
                  px: 6,
                  py: 1.5,
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  boxShadow: 3,
                  fontWeight: 'bold',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 6,
                    bgcolor: 'secondary.dark'
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                В меню
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
