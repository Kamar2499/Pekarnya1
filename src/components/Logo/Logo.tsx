import { Box, Typography, styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const LogoContainer = styled(RouterLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  '&:hover': {
    '& .logo-text': {
      color: theme.palette.secondary.main,
    },
    '& .logo-image': {
      transform: 'scale(1.05)',
    },
  },
}));

const LogoImage = styled('img')(() => ({
  height: '50px',
  width: 'auto',
  marginRight: '12px',
  transition: 'transform 0.3s ease',
  '@media (max-width: 600px)': {
    height: '40px',
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  background: 'linear-gradient(45deg, #FFD700 30%, #FFA000 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontFamily: '"Playfair Display", serif',
  letterSpacing: '1px',
  transition: 'color 0.3s ease',
  fontSize: '1.5rem',
  lineHeight: 1.2,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const Logo = () => {
  return (
    <LogoContainer to="/" sx={{ display: 'flex', alignItems: 'center' }}>
      <Box component="img" 
        src="/images/logo/bakery-logo.png" 
        alt="Логотип пекарни" 
        className="logo-image"
        sx={{
          height: '50px',
          width: 'auto',
          marginRight: '12px',
          transition: 'transform 0.3s ease',
          '@media (max-width: 600px)': {
            height: '40px',
          },
        }}
      />
      <Typography 
        variant="h5" 
        className="logo-text"
        sx={{
          fontWeight: 700,
          background: 'linear-gradient(45deg, #FFD700 30%, #FFA000 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: '"Playfair Display", serif',
          letterSpacing: '1px',
          transition: 'color 0.3s ease',
          fontSize: '1.5rem',
          lineHeight: 1.2,
          '@media (max-width: 900px)': {
            display: 'none',
          },
        }}
      >
        Свежая выпечка
      </Typography>
    </LogoContainer>
  );
};

export default Logo;
