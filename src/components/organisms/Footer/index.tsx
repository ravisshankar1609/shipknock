import Grid from '@mui/material/Grid'
import React from 'react'

const Container = ({...props}) => <Grid container {...props} />
const Item = ({...props}) => <Grid item {...props} />
 const Footer = () => {
  return (
    <>
    <Container>
        <Item xs={12}>
footer
        </Item>
    </Container>
    </>
  )
}
export default Footer;