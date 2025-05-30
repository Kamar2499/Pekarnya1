import { Box, Container, Typography, Paper, TextField, Button, Link, Chip, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { Phone, Email, LocationOn, Schedule, Send } from '@mui/icons-material';
import { useState } from 'react';

interface ContactQuestion {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  read: boolean;
}

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSnackbar({
        open: true,
        message: 'Пожалуйста, заполните все поля',
        severity: 'error'
      });
      return;
    }


    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setSnackbar({
        open: true,
        message: 'Пожалуйста, введите корректный email',
        severity: 'error'
      });
      return;
    }

    // Получаем существующие вопросы из localStorage
    const existingQuestions: ContactQuestion[] = JSON.parse(localStorage.getItem('contactQuestions') || '[]');
    
    // Создаем новый вопрос
    const newQuestion: ContactQuestion = {
      id: Date.now().toString(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      date: new Date().toISOString(),
      read: false
    };

    // Добавляем новый вопрос в массив
    const updatedQuestions = [...existingQuestions, newQuestion];

    // Сохраняем обновленный массив в localStorage
    localStorage.setItem('contactQuestions', JSON.stringify(updatedQuestions));


    // Очищаем форму
    setFormData({ name: '', email: '', message: '' });

    // Показываем уведомление об успешной отправке
    setSnackbar({
      open: true,
      message: 'Ваш вопрос отправлен! Мы свяжемся с вами в ближайшее время.',
      severity: 'success'
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 6, fontWeight: 'bold', textAlign: 'center' }}>
          Контакты
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 4,
          mb: 6,
          '& > *': {
            flex: { xs: '1 1 100%', md: '1 1 50%' },
            minWidth: 0,
          }
        }}>
          <Paper elevation={3} sx={{ p: 4, height: '100%', borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
              Свяжитесь с нами
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <LocationOn color="primary" sx={{ mr: 2, mt: 0.5, flexShrink: 0 }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>Адрес</Typography>
                  <Typography color="text.secondary">Волгоград, ул. 51-й Гвардейской Дивизии</Typography>
                  <Link href="https://yandex.ru/maps/38/volgograd/?ll=44.492249%2C48.768252&mode=poi&poi%5Bpoint%5D=44.492229%2C48.768251&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D84047717558&z=21" target="_blank" rel="noopener noreferrer" color="primary" sx={{ display: 'inline-block', mt: 1 }}>
                    Посмотреть на карте
                  </Link>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Phone color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>Телефон</Typography>
                  <Link href="tel:+78442123456" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    +7 (8442) 12-34-56
                  </Link>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>Email</Typography>
                  <Link href="mailto:info@pekarstvo.ru" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    info@pekarstvo.ru
                  </Link>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Schedule color="primary" sx={{ mr: 2, mt: 0.5, flexShrink: 0 }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mb: 1 }}>Часы работы</Typography>
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: 200 }}>
                      <Typography component="span" color="text.secondary">Пн - Пт:</Typography>
                      <Typography component="span" fontWeight="medium">8:00 - 21:00</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: 200 }}>
                      <Typography component="span" color="text.secondary">Сб - Вс:</Typography>
                      <Typography component="span" fontWeight="medium">9:00 - 20:00</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mb: 2 }}>Мы в соцсетях</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {['VK', 'Telegram'].map((network) => (
                    <Chip
                      key={network}
                      label={network}
                      component="a"
                      href={network === 'VK' ? 'https://vk.com' : 'https://t.me'}
                      target="_blank"
                      rel="noopener noreferrer"
                      clickable
                      variant="outlined"
                      sx={{ '&:hover': { bgcolor: 'action.hover' } }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Paper>
          
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
              Напишите нам
            </Typography>
            
            <Box 
              component="form" 
              onSubmit={handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
            >
              <TextField
                name="name"
                label="Ваше имя"
                variant="outlined"
                fullWidth
                required
                value={formData.name}
                onChange={handleInputChange}
              />
              
              <TextField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                value={formData.email}
                onChange={handleInputChange}
              />
              
              <TextField
                name="message"
                label="Ваше сообщение"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
                value={formData.message}
                onChange={handleInputChange}
              />
              
              <Button 
                type="submit" 
                variant="contained" 
                size="large" 
                endIcon={<Send />}
                sx={{ 
                  alignSelf: 'flex-start',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Отправить сообщение
              </Button>
            </Box>
            
            <Snackbar 
              open={snackbar.open} 
              autoHideDuration={6000} 
              onClose={handleCloseSnackbar}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Alert 
                onClose={handleCloseSnackbar} 
                severity={snackbar.severity}
                sx={{ width: '100%' }}
                elevation={6}
                variant="filled"
              >
                {snackbar.message}
              </Alert>
            </Snackbar>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contacts;
