import React from 'react';
import Layout from '../Layout'
import {Box, CircularProgress, Grid} from "@mui/material";
const Loader = () => {
  return (
    <Layout>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Loader;