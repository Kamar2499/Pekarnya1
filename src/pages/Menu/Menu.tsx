import { useEffect, useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ProductCard from '../../components/ProductCard/ProductCard';

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
  nutrition: NutritionInfo;
}

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState('all');

  useEffect(() => {
    // В реальном приложении здесь был бы запрос к API
    const fetchProducts = () => {
      // Имитация загрузки данных
      setTimeout(() => {
        setProducts([
          {
            id: 1,
            name: 'Хлеб ржаной',
            description: 'Ароматный ржаной хлеб на закваске',
            price: 120,
            image: '/images/u-6e32659b6d6d8912ac3488ad8b805e58.jpg',
            category: 'bread',
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
            image: '/images/screenshot15.jpg',
            category: 'bread',
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
            image: '/images/images11.jpg',
            category: 'pastry',
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
            image: '/images/images222.jpg',
            category: 'cake',
            nutrition: {
              proteins: 6.8,
              fats: 22.5,
              carbs: 30.1,
              calories: 380
            }
          },
        ]);
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
          Наше меню
        </Typography>
        
        <Paper sx={{ mb: 4, borderRadius: 2, overflow: 'hidden' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Категории меню"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: 'primary.main',
                height: 3,
              },
            }}
          >
            <Tab value="all" label="Все" />
            <Tab value="bread" label="Хлеб" />
            <Tab value="pastry" label="Выпечка" />
            <Tab value="pie" label="Пироги" />
            <Tab value="cake" label="Торты" />
          </Tabs>
        </Paper>
      </motion.div>

      <Box 
        component={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
        key={tabValue} // Добавляем key для перезапуска анимации при смене вкладки
        sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 4,
          mt: 4
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <motion.div key={product.id} variants={item}>
              <ProductCard {...product} />
            </motion.div>
          ))
        ) : (
          <motion.div 
            variants={item}
            style={{ 
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '2rem 0'
            }}
          >
            <Typography variant="h6" color="text.secondary">
              Товары в этой категории скоро появятся
            </Typography>
          </motion.div>
        )}
      </Box>
    </Container>
  );
};

export default Menu;
