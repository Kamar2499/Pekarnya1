import { AppBar, Box, Button, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Пекарня "Вкусный уголок"
            </Typography>
            <Button color="inherit" component={Link} to="/">Главная</Button>
            <Button color="inherit" component={Link} to="/menu">Меню</Button>
            <Button color="inherit" component={Link} to="/about">О нас</Button>
            <Button color="inherit" component={Link} to="/contacts">Контакты</Button>
          </Toolbar>
        </Container>
      </AppBar>
      
      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default Layout;
