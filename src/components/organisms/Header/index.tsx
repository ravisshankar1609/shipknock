import Grid from '@mui/material/Grid';
import React from 'react';
import {AppBar, Button, Tab, Tabs, Toolbar} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { COLORS } from '@theme/colors';
const Container = ({...props}) => <Grid container {...props} />
const Item = ({...props}) => <Grid item {...props} />
 const Header = () => {
  return (
    <>
    <Container>
      <AppBar>
        <Toolbar sx={{background:COLORS.purple100}}>
        <LocalShippingIcon/>
        <Tabs textColor='inherit'>
          <Tab label="Products"/>
          <Tab label="Services"/>
          <Tab label="Career"/>
          <Tab label="Contact Us"/>
          <Tab label="About Us"/>
        </Tabs>
        <Button variant='outlined'>Register</Button>
        </Toolbar>
      </AppBar>
    </Container>
    </>
  )
}
export default Header;