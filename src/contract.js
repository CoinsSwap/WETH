import { Contract as EthersContract, providers } from 'ethers'

export default class Contract {
  constructor(address, abi, provider) {
    return this._init(address, abi, provider)
  }

  async _init(address, abi, provider) {
    if (!provider && globalThis.ethereum) {
      await window.ethereum.enable()
      provider = new providers.Web3Provider(window.ethereum);
    }

    return new EthersContract(address, abi, provider)
  }
}
