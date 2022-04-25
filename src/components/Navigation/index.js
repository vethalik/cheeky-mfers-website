import React, {useContext, useEffect, useState} from 'react'

import {
  styled, Button, Container, Grid
} from '@mui/material'
import Link from 'next/link'

import {AuthContext} from "../../containers/AuthContext";
import { LS_KEY } from "../../common";
import Typography from "@mui/material/Typography";

const StyledDiv = styled('div')(({ theme }) => ({
  padding: `${theme.spacing(2)} 0`,
  marginBottom: theme.spacing(4)
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
  padding: `${theme.spacing(2)} 0`,
  fontFamily: 'KGHAPPY'
}))

const StyledImg = styled('img')(({ theme }) => ({
  width: 100,
  height: 'auto'
}))

const Navigation = () => {
  const [auth, setAuth] = useContext(AuthContext)
  
  const [state, setState] = useState({
    shouldUpdate: true
  });

  useEffect(() => {
    if (state.shouldUpdate) {
      const ls = window.localStorage.getItem(LS_KEY);
      const authLocalStorage = ls && JSON.parse(ls)

      setState({ shouldUpdate: false });
      setAuth({ ...authLocalStorage })
    }
  }, [auth])

  return (
    <StyledDiv>
      <Container>
        <Grid container direction="column" alignItems="center" justifyContent="center">
          <Grid item>
            <StyledTypography variant="h1" sx={{ fontSize: { xs: 48, sm: 54, md: 88 } }}>
              Cheeky Mfers
            </StyledTypography>
          </Grid>
        </Grid>
      </Container>
    </StyledDiv>
  )
}

export default Navigation;
