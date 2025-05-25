import { Card, CardContent, CardMedia, Typography, CardActionArea, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useCart } from '../../contexts/CartContext';
import { AddShoppingCart } from '@mui/icons-material';

interface NutritionInfo {
  proteins: number;
  fats: number;
  carbs: number;
  calories: number;
}

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  weight: number; // Вес в граммах
  nutrition: NutritionInfo;
}

const ProductCard = ({ id, name, description, price, image, weight, nutrition }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id,
      name,
      price,
      image,
    });
  };

  return (
    <motion.div whileHover={{ scale: 1.03 }}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardActionArea 
          sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'stretch',
            '&:hover .add-to-cart-button': {
              opacity: 1,
              transform: 'translateY(0)',
            }
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              height="200"
              image={image}
              alt={name}
              sx={{ objectFit: 'cover' }}
            />
            <Button
              className="add-to-cart-button"
              variant="contained"
              color="primary"
              size="small"
              startIcon={<AddShoppingCart />}
              onClick={handleAddToCart}
              sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
                opacity: 0,
                transform: 'translateY(10px)',
                transition: 'all 0.3s ease',
                minWidth: 'auto',
                borderRadius: '50%',
                p: 1,
                '& .MuiButton-startIcon': {
                  margin: 0,
                },
                '&:hover': {
                  transform: 'translateY(0) scale(1.1)',
                },
              }}
            />
          </Box>
          <CardContent sx={{ flexGrow: 1, pb: '16px !important' }}>
            <Typography gutterBottom variant="h6" component="div" noWrap>
              {name}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ 
                mb: 2,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                height: '40px',
              }}
            >
              {description}
            </Typography>
            <Box sx={{ mt: 'auto', pt: 1, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, flexWrap: 'wrap', gap: 0.5 }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                  Белки: {nutrition.proteins}г
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                  Жиры: {nutrition.fats}г
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                  Углеводы: {nutrition.carbs}г
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                  {weight} г · {nutrition.calories} ккал
                </Typography>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                  {price} ₽
                </Typography>
              </Box>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="small"
                startIcon={<AddShoppingCart />}
                onClick={handleAddToCart}
                sx={{ mt: 1 }}
              >
                В корзину
              </Button>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
