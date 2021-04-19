import abi from './../node_modules/@coinsswap/abis/src/abis/weth'

import { Contract } from 'ethers'
import contractAddresses from '@coinsswap/contract-address'

const networks = {
  MAINNET: 1,
  KOVAN: 42,
  WAPNET: 7475
}

/**
 * @param {Number, String, Object} network{chainId} or networkname
 * @return {Number} Ethereum chainId
 */
const ChainId = network => {
  if (!network) return 1
  if (isNaN(network) && typeof network === 'object') return network.chainId
  if (!isNaN(network) ) return network

  return networks[network.toUpperCase()]
}

const token = chainId => {
  return {
    chainId,
    address: contractsAddresses[chainId].weth,
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether'
  }
}

export default (network, provider) => {
  const chainId = ChainId(network)
  const contract = new Contract(contractAddresses[chainId].weth, abi, provider)

  return {
    contract,
    token,
    deposit: contract.deposit,
    withdraw: contract.withdraw,
    wrap: contract.deposit,
    unwrap: contract.withdraw
  }
}
