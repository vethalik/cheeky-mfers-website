export const LS_KEY = 'login-with-metamask:auth'

export const trimAddress = address => address?.slice(0,5) + '...' + address?.slice(address?.length - 4, address?.length)
export const trimAddressForAvatar = (address = '') => address?.split('0x').pop().slice(0, 2)

export const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://api.seoshanty.com'
  : 'http://localhost:8080'

const imagesBasePath = `/images`
export const imagesCollection = [
  `${imagesBasePath}/mfers/367.png`,
  `${imagesBasePath}/mfers/772.png`,
  `${imagesBasePath}/mfers/2627.png`,
  `${imagesBasePath}/mfers/4196.png`,
  `${imagesBasePath}/mfers/5682.png`,
  `${imagesBasePath}/mfers/6136.png`,
  `${imagesBasePath}/mfers/6436.png`,
  `${imagesBasePath}/mfers/6917.png`,
  `${imagesBasePath}/mfers/7496.png`,
  `${imagesBasePath}/mfers/8500.png`,
  `${imagesBasePath}/mfers/9117.png`,
  `${imagesBasePath}/mfers/9547.png`,
]