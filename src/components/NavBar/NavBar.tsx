import React from 'react';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

interface NavBarProps {
  title: string;
  url: string;
}

const NavBar: React.FC<NavBarProps> = ({ title, url }) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Link href={url}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 4 }}>
            <Typography variant="h4" color="inherit" component="div">
              {title}
            </Typography>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
