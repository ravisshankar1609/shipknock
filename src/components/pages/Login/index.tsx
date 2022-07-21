import Grid from '@mui/material/Grid'
import React from 'react'
import ContainerMaxWidth from 'src/components/molecule/Container'
const Container = ({...props}) => <Grid container {...props} />
const Item = ({...props}) => <Item container {...props} />

function Login() {
  return (
    <>
        <ContainerMaxWidth>
            
        </ContainerMaxWidth>
    </>
  )
}
export default Login