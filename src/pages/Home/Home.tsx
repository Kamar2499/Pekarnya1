import * as React from 'react';
import { Box, Container, Typography, Button, useTheme, useMediaQuery, Grid, Paper, alpha, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import { LocalDining, RestaurantMenu, Cake, BreakfastDining, LocalCafe, LocalShipping } from '@mui/icons-material';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

// Styled Components
const StyledHeading = styled('h1')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(40),
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  lineHeight: 1.2,
  background: 'linear-gradient(90deg, #fff, #ffcc80)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 10,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    borderRadius: '2px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.pxToRem(32),
  },
}));

const StyledSubheading = styled('h2')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(32),
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -10,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '3px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '2px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.pxToRem(26),
  },
}));

const StyledFeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  borderRadius: theme.shape.borderRadius * 2,
  background: alpha(theme.palette.background.paper, 0.7),
  backdropFilter: 'blur(10px)',
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

const StyledIconWrapper = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 24px',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  fontSize: 40,
}));

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  const [heroRef, heroInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const [featuresRef, featuresInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Features data
  const features: Feature[] = [
    {
      icon: <LocalDining fontSize="inherit" />,
      title: 'Свежая выпечка',
      description: 'Ежедневно свежая выпечка из натуральных ингредиентов',
    },
    {
      icon: <RestaurantMenu fontSize="inherit" />,
      title: 'Богатый ассортимент',
      description: 'Широкий выбор хлеба, выпечки и кондитерских изделий',
    },
    {
      icon: <Cake fontSize="inherit" />,
      title: 'Авторские торты',
      description: 'Индивидуальное оформление тортов на заказ',
    },
    {
      icon: <BreakfastDining fontSize="inherit" />,
      title: 'Завтраки',
      description: 'Вкусные и полезные завтраки на любой вкус',
    },
  ];

  return (
    <Box className="home-page" sx={{ flexGrow: 1, overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box 
        ref={heroRef}
        sx={{ 
          bgcolor: 'primary.main',
          background: 'linear-gradient(135deg, #5d4037 0%, #3e2723 100%)',
          color: 'primary.contrastText',
          py: { xs: 12, md: 20 },
          minHeight: '100vh',
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
            background: 'url("/Pekarnya1/bread-pattern.png")',
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
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <StyledHeading>
                  {'Добро пожаловать в нашу пекарню'}
                </StyledHeading>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant={isMobile ? 'h5' : 'h4'}
                  component="p"
                  sx={{
                    mb: 6,
                    color: 'text.secondary',
                    fontWeight: 400,
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.7,
                  }}
                >
                  Насладитесь вкусом свежей выпечки, приготовленной с любовью по традиционным рецептам
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
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
                      color="primary"
                      size="large"
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: '50px',
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                        '&:hover': {
                          boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.4)}`,
                        },
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
                      color="inherit"
                      size="large"
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: '50px',
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                          backgroundColor: alpha(theme.palette.common.white, 0.1),
                        },
                      }}
                    >
                      О нас
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>
      
      {/* Features Section */}
      <Box 
        ref={featuresRef}
        sx={{
          py: { xs: 10, md: 15 },
          position: 'relative',
          overflow: 'hidden',
          bgcolor: 'background.default',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <StyledSubheading>
                {'Наши преимущества'}
              </StyledSubheading>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '700px',
                  mx: 'auto',
                  mb: 2
                }}
              >
                {'Почему выбирают нас'}
              </Typography>
            </motion.div>
            <Divider 
              sx={{ 
                width: 80, 
                height: 4,
                mx: 'auto',
                my: 3,
                bgcolor: 'primary.main',
              }} 
            />
          </Box>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4 }}>
            {features.map((feature, index) => (
              <Box key={index}>
                <motion.div
                  variants={item}
                  initial="hidden"
                  animate={featuresInView ? "show" : "hidden"}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <StyledFeatureCard>
                    <StyledIconWrapper>
                      {feature.icon}
                    </StyledIconWrapper>
                    <Typography variant="h6" component="h3" gutterBottom align="center">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center">
                      {feature.description}
                    </Typography>
                  </StyledFeatureCard>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      
      {/* CTA Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.9)} 0%, ${alpha(theme.palette.primary.dark, 0.95)} 100%)`,
          color: 'primary.contrastText',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Box textAlign="center">
              <LocalCafe 
                sx={{ 
                  fontSize: 60, 
                  mb: 3,
                  color: theme.palette.secondary.main,
                }} 
              />
              <Typography 
                variant={isMobile ? 'h4' : 'h3'} 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                Хотите попробовать нашу выпечку?
              </Typography>
              <Typography 
                variant="h6" 
                component="p" 
                sx={{ 
                  mb: 4,
                  maxWidth: 700,
                  mx: 'auto',
                  opacity: 0.9,
                  lineHeight: 1.7,
                }}
              >
                Закажите прямо сейчас с доставкой на дом или заберите самовывозом из нашей пекарни.
                Свежая выпечка каждый день с 8:00 до 21:00.
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
                  endIcon={<LocalShipping />}
                  sx={{
                    px: 5,
                    py: 1.5,
                    borderRadius: 50,
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    boxShadow: `0 8px 20px ${alpha(theme.palette.secondary.main, 0.3)}`,
                    '&:hover': {
                      boxShadow: `0 12px 24px ${alpha(theme.palette.secondary.main, 0.4)}`,
                    },
                  }}
                >
                  Заказать сейчас
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
        
        {/* Decorative elements */}
        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.2)} 0%, transparent 70%)`,
            filter: 'blur(15px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '10%',
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.15)} 0%, transparent 70%)`,
            filter: 'blur(10px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </Box>
      
      {/* Additional content can be added here */}
      <Box sx={{ 
        py: 4,
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
        px: 2
      }}>
        {/* Add more sections as needed */}
      </Box>
    </Box>
  );
};

export default Home;
