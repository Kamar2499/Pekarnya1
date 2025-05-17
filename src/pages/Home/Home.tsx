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
        background: 'linear-gradient(135deg, #5d4037 0%, #3e2723 100%)',
        color: 'primary.contrastText',
        py: { xs: 15, md: 25 },
        minHeight: { xs: '100vh', md: 'auto' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
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
          opacity: 0.03,
          pointerEvents: 'none',
          backgroundSize: '400px',
          animation: 'grain 8s steps(10) infinite',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
          pointerEvents: 'none',
        }
      }}>
        <Box sx={{ 
          position: 'relative', 
          zIndex: 1, 
          py: 4,
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4 },
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography 
                variant="h1"
                component="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 800,
                  mb: 3,
                  textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                  background: 'linear-gradient(45deg, #ffd54f 20%, #ff8f00 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                  lineHeight: 1.2,
                  letterSpacing: '-0.5px',
                  px: 3,
                  py: 3,
                  borderRadius: '12px',
                  position: 'relative',
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '200px',
                    height: '6px',
                    background: 'linear-gradient(90deg, #ffd54f, #ff8f00)',
                    borderRadius: '3px',
                  }
                }}
              >
                Добро пожаловать в нашу пекарню!
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            >
              <Typography 
                variant={isMobile ? 'h6' : 'h5'} 
                sx={{ 
                  mb: 6, 
                  maxWidth: '800px', 
                  mx: 'auto',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                  px: 2,
                }}
              >
                Ощутите неповторимый вкус свежей выпечки, созданной с душой по старинным рецептам. 
                Каждое изделие — это маленькое произведение искусства, наполненное теплом и заботой.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
            >
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button 
                    component={Link} 
                    to="/menu" 
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    sx={{
                      px: 6,
                      py: 1.8,
                      borderRadius: '50px',
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      boxShadow: '0 4px 20px rgba(255, 167, 38, 0.4)',
                      fontWeight: 700,
                      letterSpacing: '0.5px',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transition: '0.5s',
                      },
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 25px rgba(255, 167, 38, 0.6)',
                        '&:before': {
                          left: '100%',
                        }
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    В меню
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button 
                    component={Link} 
                    to="/about" 
                    variant="outlined" 
                    color="secondary" 
                    size="large"
                    sx={{
                      px: 6,
                      py: 1.8,
                      borderRadius: '50px',
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      borderWidth: '2px',
                      fontWeight: 600,
                      color: 'secondary.light',
                      borderColor: 'rgba(255, 213, 79, 0.5)',
                      '&:hover': {
                        borderColor: 'secondary.light',
                        backgroundColor: 'rgba(255, 213, 79, 0.1)',
                        borderWidth: '2px',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    О нас
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
