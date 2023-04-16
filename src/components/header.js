import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Logo from '../../src/logo.png';
import LogoDark from '../../src/logo-dark.png';


const Header = () => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            component='img'
            alt='Scatterplot'
            src={theme.palette.mode === 'dark' ? LogoDark : Logo}
            sx={{height: '3.5rem'}}
          />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
