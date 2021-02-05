import abi from './abi.js'
import { Contract } from 'ethers'

const contracts = {
  MAINNET: {
    chainId: 1,
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
  },
  KOVAN: {
    chainId: 42,
    address: '0xd0A1E359811322d97991E03f863a0C30C2cF029C'
  }
}

/**
 * @param {Number, String} chainId
 * @return {Number} Ethereum chainId
 */
const ChainId = chainId => {
  if (!chainId) return 'MAINNET'
  if (isNaN(chainId)) return chainId
  return Object.entries(contracts).filter(entry => {
    entry[1].chainId === chainId ? entry[0] : false
  })[0]
}

const token = chainId => {
  const address = contracts[ChainId(chainId)].address
  return {
    chainId,
    address,
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether'
  }
}

export default (chainId, provider) => {
  chainId = ChainId(chainId)

  const contract = new Contract(contracts[chainId].address, abi, provider)

  const deposit = amount => contract.deposit(amount)
  const withdraw = amount => contract.withdraw(amount)

  return {
    contract,
    abi,
    token,
    deposit,
    withdraw,
    wrap: deposit,
    unwrap: withdraw
  }
}
