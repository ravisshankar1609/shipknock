import Grid from '@mui/material/Grid'
import Footer from '@organisms/Footer'
import Header from '@organisms/Header'
import React from 'react'

const Container = ({...props}) => <Grid container {...props} />
const Item = ({...props}) => <Grid item {...props} />
 const index = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <Container>
      <Header/>
        {children}
      <Footer/>
    </Container>
    </>
  )
}
export default index