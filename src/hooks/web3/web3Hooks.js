import Web3 from "web3";

export const network = process.env.NODE_ENV === 'production'
  ? 'mainnet'
  : 'rinkeby'

export const infuraId = process.env.NODE_ENV === 'production'
  ? '7366068b6d924d018e56caca4bde2c91'
  : '6f043a0db09341cb9805d76316f0fc81'

export const useWeb3 = () => {
  try {
    const provider =
      new Web3
        .providers
        .WebsocketProvider(
          `wss://${network}.infura.io/ws/v3/${infuraId}`
          // 'ws://127.0.0.1:8546'
        );
    const web3 = new Web3(provider)

    provider.on('error', e => {
      console.error('WS Infura Error', e);
    });

    provider.on('end', e => {
      console.log('WS closed');
      console.log('Attempting to reconnect...');
      web3.setProvider(null);
    });

    provider.on('changeAccount', e => {
      console.log('inside mfer')
    })

    return { web3, provider }
  } catch(errors) {
    return { errors }
  }
}