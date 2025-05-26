import { useEffect, useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, Paper, useMediaQuery, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useCart } from '../../contexts/CartContext';

interface NutritionInfo {
  proteins: number;
  fats: number;
  carbs: number;
  calories: number;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  weight: number;
  nutrition: NutritionInfo;
}

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState('all');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { addToCart } = useCart();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    const fetchProducts = () => {
      // Имитация загрузки данных
      setTimeout(() => {
        const productsData: Product[] = [
          {
            id: 1,
            name: 'Хлеб ржаной',
            description: 'Ароматный ржаной хлеб на закваске',
            price: 120,
            image: '/images/u-6e32659b6d6d8912ac3488ad8b805e58.jpg',
            category: 'bread',
            weight: 500,
            nutrition: {
              proteins: 6.6,
              fats: 1.2,
              carbs: 42.4,
              calories: 200
            }
          },
          {
            id: 2,
            name: 'Круассан с шоколадом',
            description: 'Слоеный круассан с начинкой из темного шоколада',
            price: 150,
            image: '/images/shutterstock_1074425702_1663856296-320x480.jpg',
            category: 'pastry',
            weight: 100,
            nutrition: {
              proteins: 7.4,
              fats: 21.2,
              carbs: 45.1,
              calories: 420
            }
          },
          {
            id: 3,
            name: 'Пирог с яблоками',
            description: 'Ароматный пирог с яблочной начинкой и корицей',
            price: 180,
            image: '/images/images.jpg',
            category: 'pie',
            weight: 350,
            nutrition: {
              proteins: 3.8,
              fats: 11.5,
              carbs: 52.3,
              calories: 320
            }
          },
          {
            id: 4,
            name: 'Багет французский',
            description: 'Хрустящий багет с хрустящей корочкой',
            price: 110,
            image: `${process.env.PUBLIC_URL || ''}/images/screenshot15.jpg`,
            category: 'bread',
            weight: 300,
            nutrition: {
              proteins: 7.5,
              fats: 1.3,
              carbs: 49.2,
              calories: 240
            }
          },
          {
            id: 5,
            name: 'Эклер с заварным кремом',
            description: 'Нежное заварное тесто с ванильным кремом',
            price: 160,
            image: `${process.env.PUBLIC_URL || ''}/images/images11.jpg`,
            category: 'pastry',
            weight: 120,
            nutrition: {
              proteins: 5.2,
              fats: 15.8,
              carbs: 35.7,
              calories: 320
            }
          },
          {
            id: 6,
            name: 'Черничный чизкейк',
            description: 'Нежный чизкейк с черничным соусом',
            price: 220,
            image: `${process.env.PUBLIC_URL || ''}/images/images222.jpg`,
            category: 'cake',
            weight: 300,
            nutrition: {
              proteins: 6.8,
              fats: 22.5,
              carbs: 30.1,
              calories: 380
            }
          },
          {
            id: 7,
            name: 'Бородинский хлеб',
            description: 'Традиционный ржано-пшеничный хлеб с тмином и кориандром',
            price: 130,
            image: `${process.env.PUBLIC_URL || ''}/images/borodinsky.jpg`,
            category: 'bread',
            weight: 450,
            nutrition: {
              proteins: 6.8,
              fats: 1.3,
              carbs: 40.7,
              calories: 201
            }
          },
          {
            id: 8,
            name: 'Круассан с миндальным кремом',
            description: 'Слоеный круассан с нежным миндальным кремом и миндальными лепестками',
            price: 170,
            image: `${process.env.PUBLIC_URL || ''}/images/almond-croissant.jpg`,
            category: 'pastry',
            weight: 120,
            nutrition: {
              proteins: 7.1,
              fats: 23.5,
              carbs: 48.3,
              calories: 442
            }
          },
          {
            id: 9,
            name: 'Пирог с вишней',
            description: 'Нежное песочное тесто с кисло-сладкой вишневой начинкой',
            price: 200,
            image: `${process.env.PUBLIC_URL || ''}/images/cherry-pie.jpg`,
            category: 'pie',
            weight: 300,
            nutrition: {
              proteins: 4.2,
              fats: 12.8,
              carbs: 54.7,
              calories: 342
            }
          },
          {
            id: 10,
            name: 'Тирамису',
            description: 'Классический итальянский десерт с кофейной пропиткой и сыром маскарпоне',
            price: 280,
            image: `${process.env.PUBLIC_URL || ''}/images/tiramisu.jpg`,
            category: 'cake',
            weight: 250,
            nutrition: {
              proteins: 8.3,
              fats: 25.7,
              carbs: 42.1,
              calories: 480
            }
          },
          {
            id: 11,
            name: 'Багет с зёрнами',
            description: 'Французский багет с семенами подсолнечника, льна и кунжута',
            price: 140,
            image: `${process.env.PUBLIC_URL || ''}/images/grain-baguette.jpg`,
            category: 'bread',
            weight: 350,
            nutrition: {
              proteins: 8.2,
              fats: 2.1,
              carbs: 51.3,
              calories: 265
            }
          },
          {
            id: 12,
            name: 'Шоколадный эклер',
            description: 'Заварное пирожное с шоколадным кремом и глазурью',
            price: 180,
            image: `${process.env.PUBLIC_URL || ''}/images/chocolate-eclair.jpg`,
            category: 'pastry',
            weight: 150,
            nutrition: {
              proteins: 5.8,
              fats: 18.3,
              carbs: 38.7,
              calories: 385
            }
          }
        ];

        setProducts(productsData);
        setLoading(false);
      }, 500);
    };

    fetchProducts();
  }, []);


  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const filteredProducts = tabValue === 'all' 
    ? products 
    : products.filter(product => product.category === tabValue);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography>Загрузка меню...</Typography>
      </Container>
    );
  }

  // Анимации для появления карточек
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

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 4 }, px: { xs: 1, sm: 2 } }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            mb: 4,
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.5rem' },
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            width: '100%',
          }}
        >
          Наше меню
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Paper
          elevation={2}
          sx={{
            mb: 4,
            borderRadius: 3,
            overflow: 'hidden',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Tabs
            value={tabValue}
            onChange={(_, newValue) => setTabValue(newValue)}
            variant={isMobile ? 'scrollable' : 'fullWidth'}
            scrollButtons="auto"
            aria-label="Категории меню"
            sx={{
              '& .MuiTabs-indicator': {
                height: 4,
                borderRadius: '2px 2px 0 0',
                backgroundColor: theme.palette.secondary.main,
              },
            }}
          >
            <Tab label="Все" value="all" sx={{ py: 2, fontSize: { xs: '0.8rem', sm: '1rem' } }} />
            <Tab label="Хлеб" value="bread" sx={{ py: 2, fontSize: { xs: '0.8rem', sm: '1rem' } }} />
            <Tab label="Выпечка" value="pastry" sx={{ py: 2, fontSize: { xs: '0.8rem', sm: '1rem' } }} />
            <Tab label="Пироги" value="pie" sx={{ py: 2, fontSize: { xs: '0.8rem', sm: '1rem' } }} />
            <Tab label="Торты" value="cake" sx={{ py: 2, fontSize: { xs: '0.8rem', sm: '1rem' } }} />
          </Tabs>
        </Paper>
      </motion.div>

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 2, ease: 'linear' },
              scale: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
            }}
          >
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL || ''}/bread-icon.svg`}
              alt="Loading..."
              sx={{ width: 80, height: 80, filter: 'drop-shadow(0 0 8px rgba(255, 160, 0, 0.5))' }}
            />
          </motion.div>
        </Box>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={{ xs: 2, sm: 3 }}
          >
            <AnimatePresence>
              {products
                .filter(product => tabValue === 'all' || product.category === tabValue)
                .map((product) => (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    style={{ position: 'relative' }}
                  >
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      image={product.image}
                      weight={product.weight}
                      nutrition={product.nutrition}
                    />
                  </motion.div>
                ))}
            </AnimatePresence>
          </Box>

          {products.filter(product => tabValue === 'all' || product.category === tabValue).length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ textAlign: 'center', padding: '4rem 1rem' }}
            >
              <Typography variant="h6" color="textSecondary" gutterBottom>
                В этой категории пока нет товаров
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Скоро добавим что-то новенькое!
              </Typography>
            </motion.div>
          )}
        </motion.div>
      )}
    </Container>
  );
};

export default Menu;
