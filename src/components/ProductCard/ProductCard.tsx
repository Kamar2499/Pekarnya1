import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material';
import { motion } from 'framer-motion';

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
  nutrition: NutritionInfo;
}

const ProductCard = ({ id, name, description, price, image, nutrition }: ProductCardProps) => {
  return (
    <motion.div whileHover={{ scale: 1.03 }}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardActionArea sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={name}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {description}
            </Typography>
            <Box sx={{ mt: 'auto', pt: 1, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Белки: {nutrition.proteins}г
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Жиры: {nutrition.fats}г
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Углеводы: {nutrition.carbs}г
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  {nutrition.calories} ккал
                </Typography>
                <Typography variant="h6" color="primary">
                  {price} ₽
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
