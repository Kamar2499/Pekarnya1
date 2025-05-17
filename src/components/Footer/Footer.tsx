import * as React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'primary.dark',
        color: 'rgba(255, 248, 225, 0.8)',
        py: 6,
        mt: 'auto',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4,
          mb: 4
        }}>
          <Box>
            <Typography variant="h6" sx={{ mb: 2, color: 'secondary.main' }}>О пекарне</Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Наша пекарня создает вкуснейшую выпечку с любовью и заботой. Мы используем только натуральные ингредиенты и традиционные рецепты.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ mb: 2, color: 'secondary.main' }}>Контакты</Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>📍 Волгоград, ул. 51-й Гвардейской Дивизии</Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>📞 +7 (8442) 12-34-56</Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>✉️ info@pekarstvo.ru</Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ mb: 2, color: 'secondary.main' }}>Мы в соцсетях</Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {['VK', 'Telegram'].map((social) => (
                <Button 
                  key={social}
                  variant="outlined" 
                  size="small"
                  color="secondary"
                  sx={{ 
                    color: 'rgba(255, 248, 225, 0.8)',
                    borderColor: 'rgba(255, 248, 225, 0.3)',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      bgcolor: 'rgba(255, 215, 0, 0.1)'
                    },
                    textTransform: 'none',
                    borderRadius: '8px',
                    px: 2
                  }}
                >
                  {social}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
        <Box sx={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
          pt: 4,
          textAlign: 'center'
        }}>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            © {new Date().getFullYear()} Свежая выпечка. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
