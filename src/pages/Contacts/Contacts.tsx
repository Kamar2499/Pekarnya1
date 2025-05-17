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
                  <Typography color="text.secondary">Волгоград, ул. 51-й Гвардейской Дивизии</Typography>
                  <Link href="https://yandex.ru/maps/org/pekarstvo/" target="_blank" rel="noopener noreferrer" color="primary" sx={{ display: 'inline-block', mt: 1 }}>
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
              src="https://yandex.ru/map-widget/v1/?ll(44.5166,48.7071&z=16&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjMxMTQ2NjQyEpoB0KDQvtGB0YHQuNGPLCDQktC-0LfQvNC-0LbQvdGW0LrQsCDQo9C60YDQsNC40L3QutC4LdCb0L7QvNC40YDRg9C_0L7Qu9GPLCDQktC-0LfQvNC-0LbQvdC10YHQutC-0Lkg0YHQsNC50YIsINCj0LrRgNCw0LjQvdGC0L7Qv9C-0LvRjNGB0LrQsNGPINGD0YHRgtCw0L3QvtCy0LrQuCDQl9Cw0LrRgNGD0LMgMjEiCg3L8h9CFf3uX0I%2C&z=16.8"
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
