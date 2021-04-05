const test = require('tape');
const WETH = require('./');
const ethers = require('ethers');

const weth = WETH('wapnet', new ethers.providers.JsonRpcProvider('http://testnet.coinsswap.io:80'))

test('WETH contract', async tape => {
  tape.plan(3)
  tape.equals(await weth.contract.symbol(), 'WETH', 'symbol')
  tape.equals(await weth.contract.decimals(), 18, 'decimals')
  tape.equals(await weth.contract.name(), 'Wrapped Ether', 'name')
})
