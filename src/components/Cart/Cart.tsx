import React from 'react';
import { Drawer, Box, Typography, Button, IconButton, Divider, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Close as CloseIcon, Add as AddIcon, Remove as RemoveIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { useCart, CartItem as CartItemType } from '../../contexts/CartContext';
import { motion } from 'framer-motion';

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: '100%',
    maxWidth: '450px',
    padding: '20px',
  },
});

const CartItem: React.FC<{ item: CartItemType }> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <Box sx={{ mb: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}>
      <Box display="flex" alignItems="center" mb={1}>
        <img 
          src={item.image} 
          alt={item.name} 
          style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 4, marginRight: 16 }}
        />
        <Box flexGrow={1}>
          <Typography variant="subtitle1">{item.name}</Typography>
          <Typography variant="body2" color="text.secondary">{item.price} ₽</Typography>
        </Box>
        <IconButton 
          size="small" 
          onClick={() => removeFromCart(item.id)}
          sx={{ color: 'error.main' }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      
      <Box display="flex" alignItems="center" justifyContent="space-between" mt={1}>
        <Box display="flex" alignItems="center">
          <IconButton 
            size="small" 
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
          <Typography mx={1}>{item.quantity}</Typography>
          <IconButton 
            size="small" 
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Box>
        <Typography variant="subtitle1" fontWeight="bold">
          {item.price * item.quantity} ₽
        </Typography>
      </Box>
    </Box>
  );
};

const Cart: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const { items, totalPrice, totalItems, clearCart } = useCart();

  return (
    <StyledDrawer anchor="right" open={open} onClose={onClose}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" component="h2">
          Корзина {totalItems > 0 && `(${totalItems})`}
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {items.length === 0 ? (
        <Box textAlign="center" py={4}>
          <ShoppingCartIcon sx={{ fontSize: 64, color: 'text.disabled', mb: 2 }} />
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Корзина пуста
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            Добавьте что-нибудь из меню
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={onClose}
            sx={{ mt: 2 }}
          >
            В меню
          </Button>
        </Box>
      ) : (
        <>
          <Box sx={{ overflowY: 'auto', maxHeight: '60vh', pr: 1, mb: 2 }}>
            {items.map((item) => (
              <motion.div
                key={`${item.id}-${item.quantity}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <CartItem item={item} />
              </motion.div>
            ))}
          </Box>

          <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography variant="h6">Итого:</Typography>
              <Typography variant="h6" fontWeight="bold">
                {totalPrice} ₽
              </Typography>
            </Box>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{ mb: 2, py: 1.5 }}
              onClick={() => {
                // Оформление заказа
                alert('Заказ оформлен!');
                clearCart();
                onClose();
              }}
            >
              Оформить заказ
            </Button>

            <Button
              fullWidth
              variant="outlined"
              color="error"
              size="small"
              onClick={clearCart}
            >
              Очистить корзину
            </Button>
          </Box>
        </>
      )}
    </StyledDrawer>
  );
};

export default Cart;
