import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './styles/navbar.css';

const Navbar = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" class="navbar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, }}
            style={{
                color: '#87b9c6'
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ fontFamily: 'Montserrat', flexGrow: 1, color: '#87b9c6', display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }}>Ever After Services</Typography>
          <Button href="/" style={{fontFamily: 'Montserrat', color: '#87b9c6', textTransform: 'none', fontWeight: 'bold', textDecoration: props.active === "home" ? 'underline': 'none'}}>Home</Button>
          <Button href="/about" style={{fontFamily: 'Montserrat', color: '#87b9c6', textTransform: 'none', fontWeight: 'bold', textDecoration: props.active === "about" ? 'underline': 'none'}}>About</Button>
          <Button href="/services" style={{fontFamily: 'Montserrat', color: '#87b9c6', textTransform: 'none', fontWeight: 'bold', textDecoration: props.active === "services" ? 'underline': 'none'}}>Services</Button>
          <Button href="/faqs" style={{fontFamily: 'Montserrat', color: '#87b9c6', textTransform: 'none', fontWeight: 'bold', textDecoration: props.active === "faqs" ? 'underline': 'none'}}>FAQs</Button>
          <Button href="/contact" style={{fontFamily: 'Montserrat', color: '#87b9c6', textTransform: 'none', fontWeight: 'bold', textDecoration: props.active === "contact" ? 'underline': 'none'}}>Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;