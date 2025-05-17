import { Box, Container, Typography, Paper, TextField, Button, Link, Divider, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Phone, Email, LocationOn, Schedule } from '@mui/icons-material';

const Contacts = () => {
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
                  <Typography color="text.secondary">г. Москва, ул. Большая Дмитровка, 7/5с1</Typography>
                  <Link href="https://yandex.ru/maps/-/CDBQbPjB" target="_blank" rel="noopener noreferrer" color="primary" sx={{ display: 'inline-block', mt: 1 }}>
                    Посмотреть на карте
                  </Link>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Phone color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>Телефон</Typography>
                  <Link href="tel:+74951234567" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    +7 (495) 123-45-67
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
                  {['Instagram', 'VK', 'Telegram'].map((network) => (
                    <Chip
                      key={network}
                      label={network}
                      component="a"
                      href="#"
                      clickable
                      variant="outlined"
                      sx={{ '&:hover': { bgcolor: 'action.hover' } }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Paper>
          
          <Paper elevation={3} sx={{ p: 4, height: '100%', borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
              Напишите нам
            </Typography>
            <form>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                  <Box sx={{ flex: 1 }}>
                    <TextField
                      fullWidth
                      label="Ваше имя"
                      variant="outlined"
                      required
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      variant="outlined"
                      required
                    />
                  </Box>
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    label="Тема"
                    variant="outlined"
                    required
                  />
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    label="Сообщение"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                  />
                </Box>
                <Box>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    size="large"
                    fullWidth
                    sx={{ py: 1.5 }}
                  >
                    Отправить сообщение
                  </Button>
                </Box>
              </Box>
            </form>
          </Paper>
        </Box>
        
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2, mb: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
            Как нас найти
          </Typography>
          <Box sx={{ height: 400, width: '100%', borderRadius: 2, overflow: 'hidden' }}>
            <iframe
              title="Наше местоположение"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.372959246882!2d37.6172993159307!3d55.75582628055298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa887f5c8f0f1f3f5!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1620000000000!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Box>
        </Paper>
        
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
            Часто задаваемые вопросы
          </Typography>
          
          <Box sx={{ '& > div:not(:last-child)': { mb: 3 } }}>
            {[
              {
                question: 'Можно ли заказать торт на заказ?',
                answer: 'Да, мы принимаем заказы на торты с индивидуальным дизайном. Для уточнения деталей и оформления заказа, пожалуйста, свяжитесь с нами по телефону или через форму обратной связи.'
              },
              {
                question: 'Есть ли у вас доставка?',
                answer: 'Да, мы осуществляем доставку по городу. Стоимость и условия доставки уточняйте у оператора при оформлении заказа.'
              },
              {
                question: 'Можно ли оплатить заказ картой?',
                answer: 'Да, в нашей пекарне принимаются к оплате банковские карты, а также наличные. Также доступна бесконтактная оплата.'
              },
              {
                question: 'Есть ли у вас веганская выпечка?',
                answer: 'Да, у нас есть ассортимент веганской выпечки. Ассортимент может меняться, уточняйте наличие у наших бариста.'
              }
            ].map((faq, index) => (
              <Box key={index}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mb: 1 }}>
                  {faq.question}
                </Typography>
                <Typography color="text.secondary">
                  {faq.answer}
                </Typography>
                {index < 3 && <Divider sx={{ mt: 2 }} />}
              </Box>
            ))}
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Contacts;
