import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  // Анимации для появления элементов
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={item}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            sx={{ mb: 6, fontWeight: 'bold', textAlign: 'center' }}
          >
            О нашей пекарне
          </Typography>
        </motion.div>
        
        <motion.div variants={item}>
          <Paper 
            elevation={3} 
            component={motion.div}
            variants={fadeIn}
            sx={{ p: 4, mb: 6, borderRadius: 2 }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Наша история
            </Typography>
            <Typography paragraph sx={{ mb: 3, fontSize: '1.1rem' }}>
              Добро пожаловать в нашу уютную пекарню «Вкусный уголок»! Мы начали нашу историю в 2010 году с маленькой пекарни на окраине города. 
              Наша страсть к выпечке и желание радовать людей вкусной и качественной продукцией привели к тому, что сегодня мы — одна из самых 
              любимых пекарен в городе.
            </Typography>
            <Typography paragraph sx={{ mb: 3, fontSize: '1.1rem' }}>
              Каждое утро мы начинаем с приготовления свежей выпечки по традиционным рецептам, которые передаются в нашей семье из поколения в поколение. 
              Мы используем только натуральные ингредиенты и заботимся о качестве каждого продукта.
            </Typography>
          </Paper>
        </motion.div>

        <motion.div variants={item}>
          <Typography 
            variant="h4" 
            align="center" 
            sx={{ mb: 5, fontWeight: 'bold' }}
            component={motion.h2}
            variants={fadeIn}
          >
            Наша команда
          </Typography>
          
          {/* Блок с командой можно добавить позже */}
          
          <Paper 
            elevation={3} 
            sx={{ p: 4, borderRadius: 2, mb: 4 }}
            component={motion.div}
            variants={fadeIn}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Наши принципы
            </Typography>
            <Box 
              component={motion.div}
              variants={container}
              sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 4
              }}
            >
              {[
                {
                  title: 'Качество',
                  description: 'Используем только свежие и натуральные ингредиенты от проверенных поставщиков.'
                },
                {
                  title: 'Традиции',
                  description: 'Соблюдаем традиционные рецепты и технологии приготовления.'
                },
                {
                  title: 'Забота',
                  description: 'Заботимся о каждом нашем клиенте и создаём уютную атмосферу.'
                },
                {
                  title: 'Инновации',
                  description: 'Постоянно развиваемся и внедряем новые вкусы и технологии.'
                }
              ].map((principle, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Box sx={{ 
                    p: 3, 
                    height: '100%',
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: 3,
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Box 
                        component={motion.div}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: 'spring',
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 * index
                        }}
                        sx={{ 
                          bgcolor: 'primary.main', 
                          color: 'white', 
                          width: 40, 
                          height: 40, 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          mr: 2,
                          mt: 0.5,
                          flexShrink: 0,
                          fontSize: '1.2rem',
                          fontWeight: 'bold'
                        }}
                      >
                        {index + 1}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                          {principle.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {principle.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Paper>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default About;
