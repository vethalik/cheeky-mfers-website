import Web3 from "web3";
import abiContract from "../contract/abiMfers.json";

export const contractAddress = 'git`'

export const getMfersContract = provider => {
  const web3 = new Web3(provider)

  const contract = new web3
    .eth
    .Contract(
      abiContract,
      contractAddress
    )

  return contract;
}

export const getSaleState = async ({ contract }) => {
  try {
    const isActiveCheck = await contract
      .methods
      .saleIsActive()
      .call()
    
    return isActiveCheck
  } catch(errors) {
    console.log('[ERROR] error in getSaleState', errors)
    return { errors }
  }
}

export const doBuyMfers = async ({
  quantity,
  contract,
  account,
}) => {
  try {
    const txValue = 0.069e18

    const buy = await contract
      .methods
      .mint(quantity)
      .send({
        from: account,
        value: txValue * quantity, //txValue,
        gasLimit: 3000000,
        gasPrice: 2000000000
      })

    return buy
  } catch(error) {
    if (error.code === -20001) {
      error.message = 'The network appears to be congestionated, '
    }
    console.log('[ERROR] error in doBuyMfers', error.message)
    throw new Error(error.message)
  }
}