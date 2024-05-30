import React from 'react';

import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { AppBar, IconButton, Stack, Toolbar } from '@mui/material';



function Footer() {


  return (

    <AppBar position="relative"

     sx={{ backgroundColor: '#333',
    top: 'auto',
    bottom: 0,}}>
      <Toolbar>
        
          <Typography variant="body2" sx={{textAlign: 'left',
    display: 'flex',
    alignItems: 'center',}}>Left Text</Typography>
        
         
          <Typography sx={{flex: 1,
    textAlign: 'center',}} variant="body2">&copy; {new Date().getFullYear()} UIP. All rights reserved.</Typography>
        
        
          <Stack direction={'row'} ml={2}>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit">
            <LinkedInIcon />
          </IconButton>
          </Stack>
        
      </Toolbar>
    </AppBar>
  );
}

export default Footer;