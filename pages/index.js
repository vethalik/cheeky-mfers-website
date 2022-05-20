import React, {useContext, useEffect, useState} from 'react';
import Layout from "../src/containers/Layout";
import {
  Avatar,
  Box, Button,
  Container,
  Divider,
  FormControl,
  Grid, InputLabel, Link, MenuItem, Select,
  styled
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useWeb3} from "../src/hooks/web3/web3Hooks";
import {
  contractAddress,
  doBuyMfers, getMfersContract,
  getSaleState
} from "../src/helpers/contract";
import abiMfers from '../src/contract/abiMfers.json'
import {ErrorContext} from "../src/containers/ErrorContext";
import {Alert} from "@mui/lab";
import { LoadingButton } from '@mui/lab';
import {trimAddress} from "../src/helpers/common";

const StyledAlert = styled(Alert)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(4)
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

const StyledGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(10)
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

const InstallMetamaskButton = () => (
  <Button
    variant="outlined"
    href="https://metamask.io/download/"
    target="_blank"
  >
    Install Metamask
  </Button>
)

const ConnectMetamaskButton = ({ onClick }) => (
  <Button
    variant="outlined"
    onClick={onClick}
    target="_blank"
  >
    Connect Metamask
  </Button>
)

const HomePage = () => {
  const { web3, errors } = useWeb3()

  const [quantityToBuy, setQuantityToBuy] = React.useState('1');
  const [isSaleActive, setIsSaleActive] = React.useState(false)
  const [connectedAccount, setConnectedAccount] = React.useState(null)

  const [error, setError] = useContext(ErrorContext)
  const [isMetamaskInstalled, setIsMetamaskInstalled] = React.useState(false)
  const [isMetamaskConnected, setIsMetamaskConnected] = React.useState(false)
  const [shouldFetchInfo, setShouldFetchInfo] = React.useState(true)
  const [shouldFetchMetamask, setShouldFetchMetamask] = React.useState(true)
  const [isLoading, setIsLoading] = React.useState(true)
  const [successMessage, setSuccessMessage] = React.useState(null)


  const handleConnectMetamask = async () => {
    try {
      const [currentAccount] = await window.ethereum.request({ method: 'eth_requestAccounts' });

      if (currentAccount) {
        setConnectedAccount(currentAccount)
        setIsMetamaskConnected(true)
      }

      setShouldFetchMetamask(false)
    } catch (errors) {
      if (errors.code === 4001) {
        errors.message = 'You need to connect your wallet to proceed'
        setError(errors)

        return
      }

      if (errors.code === -32002) {
        errors.message = 'You already have a request open, check your Metamask'
        setError(errors)

        return
      }

      setError(errors);
    }
  }

  const contract = new web3
    .eth
    .Contract(
      abiMfers,
      contractAddress
    )
  const handleChange = (event) => {
    setQuantityToBuy(event.target.value);
  };

  const handleMint = async () => {
    try {
      setIsLoading(true)

      const mfersContract = getMfersContract(window.ethereum)
      await doBuyMfers({
        quantity: quantityToBuy,
        account: connectedAccount,
        contract: mfersContract
      })

      setSuccessMessage('Your transaction was succesfull!')
      setIsLoading(false)
    } catch(errors) {
      setError(errors)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    return () => {}
  }, [])

  useEffect(() => {
    if (!isMetamaskInstalled || !isMetamaskConnected) {
      if (window.ethereum) {
        setIsMetamaskInstalled(true)
        window.ethereum.on('accountsChanged', () => {
          setIsMetamaskConnected(false)
          handleConnectMetamask()
        })
      } else {
        setIsMetamaskInstalled(false)
      }
    } else {
      if (shouldFetchInfo) {
        const init = async () => {
          const contractSaleState = await getSaleState({ contract })
          
          setIsSaleActive(contractSaleState)
          setShouldFetchInfo(false)
          setIsLoading(false)
        }

        init()
      }
    }
  }, [isMetamaskConnected])
  
  return (
    <Layout>
      <StyledContainer>
        {!!error.message && (
          <StyledAlert severity="error" onClose={() => setError({})}>{error.message}</StyledAlert>
        )}

        {!!successMessage && (
          <StyledAlert severity="success" onClose={() => setSuccessMessage(null)}>{successMessage}</StyledAlert>
        )}

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
              {isMetamaskInstalled && isMetamaskConnected && (
                <>
                  <Grid item xs={12}>
                    <Typography>
                      Your account: {trimAddress(connectedAccount)}
                    </Typography>
                  </Grid>

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
                          <MenuItem value={'6'}>6</MenuItem>
                          <MenuItem value={'7'}>7</MenuItem>
                          <MenuItem value={'8'}>8</MenuItem>
                          <MenuItem value={'9'}>9</MenuItem>
                          <MenuItem value={'10'}>10</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>


                  <Grid item xs={12}>
                    <LoadingButton
                      variant="outlined"
                      disabled={!isSaleActive}
                      loading={isLoading}
                      // onClick={handleMint}
                    >
                      {/*{isSaleActive ? 'Buy now' : 'Coming Soon'}*/}
                      Coming Soon
                    </LoadingButton>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Price 0.05 ETH
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Link variant="body1" href="https://etherscan.io/address/0xe35a4d2806e888fed21e649b4fd00ecb12bbd252#code">
                      contract link
                    </Link>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      MINT OPEN!
                    </Typography>
                  </Grid>
                </>
                ) || (
                <>
                  <Grid item xs={12}>
                    {
                      isMetamaskInstalled
                        ? <ConnectMetamaskButton onClick={handleConnectMetamask} />
                        : <InstallMetamaskButton />
                    }
                  </Grid>
                </>
                )}
            </Grid>
          </Grid>
        </Grid>

        <StyledGrid container alignItems="center" justifyContent="center">
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
        </StyledGrid>

        <StyledGrid container alignItems="center" justifyContent="center" direction="column">
          <Grid item>
            <StyledTitle variant="h2">
              THE TEAM
            </StyledTitle>
          </Grid>
          <Grid item>
            <Grid container justifyContent="center" alignItems="center" spacing={6}>
              <Grid item>
                <Grid container justifyContent="center" direction="column" alignItems="center" spacing={6}>
                  <Grid item>
                    <TeamMfer teamMember="vethalik" />
                  </Grid>
                  <Grid item>
                    <Link variant="body1" href="https://twitter.com/vethalik" target="_blank">
                      @vethalik
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justifyContent="center" direction="column" alignItems="center" spacing={6}>
                  <Grid item>
                    <TeamMfer teamMember="512" />
                  </Grid>
                  <Grid item>
                    <Link variant="body1" href="https://twitter.com/FivetwelveLab" target="_blank">
                      @fivetwelvelab
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </StyledGrid>

        <Grid container alignItems="center" justifyContent="center" direction="column">
          <Grid item>
            <StyledTitle variant="h2">
              WHY THIS PROJECT
            </StyledTitle>
          </Grid>
          <Grid item>
            <StyledTypography variant="body1">
              We simply love mfers and decided to work on our interpretation. Cheeky mfers are happy, friendly mfers with new traits, accessories, colourful features and a striking visual style.
            </StyledTypography>

            <StyledTypography variant="body1">
              Full story coming soon!
            </StyledTypography>
          </Grid>
        </Grid>
      </StyledContainer>
    </Layout>
  )
}

export default HomePage
