import React, {useContext, useEffect, useState} from 'react';
import Layout from "../src/containers/Layout";
import {
  Avatar,
  Box, Button,
  Container,
  Divider,
  FormControl,
  Grid, InputLabel, MenuItem, Select,
  styled
} from "@mui/material";
import Typography from "@mui/material/Typography";

const StyledSelect = styled(Select)(({ theme }) => ({
  // marginTop: theme.spacing(16),
  marginBottom: theme.spacing(2),
  color: 'white'
}))

const StyledTitle = styled(Typography)(({ theme }) => ({
  padding: `${theme.spacing(2)} 0`,
  marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  fontFamily: 'KGHAPPY'
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: 24
}))

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingBottom: theme.spacing(8)
}))


const SideMfer = ({ position = 1 }) => (
  <Box
    component="img"
    sx={{
      height: 'auto',
      width: '100%',
    }}
    alt="Main Cheeky Mfer on display"
    src={`/images/design/mfers-side-${position}.jpg`}
  />
)

const TeamMfer = ({ teamMember }) => {
  const size = 261
  return (
    <Avatar
      sx={{ width: size, height: size }}
      src={`/images/design/mfers-team-${teamMember}.jpg`}
    />
  )
}

const HomePage = () => {
  const [quantityToBuy, setQuantityToBuy] = React.useState('1');

  const handleChange = (event) => {
    setQuantityToBuy(event.target.value);
  };

  return (
    <Layout>
      <StyledContainer>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={12} md={6} lg={8}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              columnSpacing={1}
            >
              <Grid item sm={9}>
                <Box
                  component="img"
                  sx={{
                    height: 'auto',
                    width: '99%',
                    maxWidth: { xs: '100%', md: '100%' },
                  }}
                  alt="Main Cheeky Mfer on display"
                  src="/images/design/mfers-main.jpg"
                />
              </Grid>

              <Grid item xs={12} sm={3}>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  sx={{ direction: { xs: 'row', sm: 'column'}}}
                >
                  <Grid item xs={4} sm={12}>
                    <SideMfer position={1} />
                  </Grid>
                  <Grid item xs={4} sm={12}>
                    <SideMfer position={2} />
                  </Grid>
                  <Grid item xs={4} sm={12}>
                    <SideMfer position={3} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm={12} md={6} lg={4}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={12}>
                <div>
                  <FormControl fullWidth sx={{ marginTop: { xs: 12, md: 0 }}}>
                    <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={quantityToBuy}
                      label="Quantity"
                      onChange={handleChange}
                      sx={{ minWidth: 200, textAlign: 'center'}}
                    >
                      <MenuItem value={'1'}>1</MenuItem>
                      <MenuItem value={'2'}>2</MenuItem>
                      <MenuItem value={'3'}>3</MenuItem>
                      <MenuItem value={'4'}>4</MenuItem>
                      <MenuItem value={'5'}>5</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Grid>

              <Grid item xs={12}>
                <Button variant="outlined" disabled>Coming Soon</Button>
              </Grid>

              <Grid item xs={12}>
                <Typography>
                  Price TBD
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography>
                  contract link (Coming Soon)
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography>
                  Cheeky Mfers left: MINT SOON
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <StyledTitle variant="h2">
              ABOUT
            </StyledTitle>
          </Grid>
          <Grid item>
            <StyledTypography variant="body1">
              Cheeky Mfers is a 10k generative art project built by Vethalik and 512, inspired by Sartoshi and in the public domain (cc0). Feel free to use these mfers the way you want.
            </StyledTypography>
          </Grid>
        </Grid>

        <Grid container alignItems="center" justifyContent="center" direction="column">
          <Grid item>
            <StyledTitle variant="h2">
              THE TEAM
            </StyledTitle>
          </Grid>
          <Grid item>
            <Grid container justifyContent="center" alignItems="center" spacing={6}>
              <Grid item>
                <TeamMfer teamMember="vethalik" />
              </Grid>
              <Grid item>
                <TeamMfer teamMember="512" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container alignItems="center" justifyContent="center" direction="column">
          <Grid item>
            <StyledTitle variant="h2">
              WHY THIS PROJECT
            </StyledTitle>
          </Grid>
          <Grid item>
            <StyledTypography variant="body1">
              Cheeky Mfers is a 10k generative art project built by Vethalik and 512, inspired by Sartoshi and in the public domain (cc0). Feel free to use these mfers the way you want.
            </StyledTypography>
          </Grid>
        </Grid>
      </StyledContainer>
    </Layout>
  )
}

export default HomePage