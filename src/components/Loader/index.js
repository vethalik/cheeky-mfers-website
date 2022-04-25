import React from 'react';
import {Box, CircularProgress, Grid, styled, Typography} from "@mui/material";

const StyledDivBuyBox = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(16),
  textAlign: 'center'
}))

const Loader = () => {
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Loader;