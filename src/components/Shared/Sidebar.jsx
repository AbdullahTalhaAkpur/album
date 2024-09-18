import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import InsightsIcon from '@mui/icons-material/Insights';
import DescriptionIcon from '@mui/icons-material/Description';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const drawerWidth = 240;
const collapsedDrawerWidth = 60;

const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
  width: open ? drawerWidth : collapsedDrawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  '& .MuiDrawer-paper': {
    width: open ? drawerWidth : collapsedDrawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    backgroundColor: '#0F1C53',
    color: '#ffffff',
    borderLeft: '1px solid #2D2D3F',
    borderRight: 'none',
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#1E90FF', // Hover durumunda açık mavi arka plan
    '& .MuiListItemIcon-root': {
      color: '#FFFFFF', // Hover durumunda ikon rengi beyaz
    },
    '& .MuiListItemText-primary': {
      color: '#FFFFFF', // Hover durumunda metin rengi beyaz
    },
  },
  transition: 'background-color 0.3s ease', // Geçiş efekti
}));

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <HomeIcon /> },
    { text: 'Search', icon: <SearchIcon /> },
    { text: 'Insights', icon: <InsightsIcon /> },
    { text: 'Docs', icon: <DescriptionIcon /> },
    { text: 'Products', icon: <ShoppingCartIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { text: 'Messages', icon: <MessageIcon /> },
  ];

  return (
    <StyledDrawer variant="permanent" open={open} anchor="right">
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', p: 1 }}>
        <IconButton onClick={toggleDrawer}>
          <MenuOpenIcon sx={{ color: '#FFFFFF', transform: open ? 'rotate(180deg)' : 'none' }} />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <StyledListItem button key={item.text} sx={{ display: 'flex', flexDirection: open ? 'row' : 'column', alignItems: 'center' }}>
            <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center', color: '#ffffff' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0, display: open ? 'block' : 'none' }} />
          </StyledListItem>
        ))}
      </List>
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <StyledListItem button sx={{ display: 'flex', flexDirection: open ? 'row' : 'column', alignItems: 'center' }}>
          <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center', color: '#ffffff' }}>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Account" sx={{ opacity: open ? 1 : 0, display: open ? 'block' : 'none' }} />
        </StyledListItem>
      </Box>
    </StyledDrawer>
  );
};

export default Sidebar;