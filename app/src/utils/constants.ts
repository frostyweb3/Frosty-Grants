//import { TokenInfo } from '@uniswap/token-lists';
//import { getAddress } from 'src/utils/ethers';

// Default RPC URL when user does not have a wallet connected
export const RPC_URL = `https://api.avax-test.network/ext/bc/C/rpc`;

// Read data using Multicall2: https://github.com/makerdao/multicall
export const MULTICALL_ADDRESS = '0xf20C61fdc756a1Af110728861B28740fE133F891'; // another 0xA76B980A0A3568597894040E53EFA6d1Be5e355c
export const MULTICALL_ABI = [
  'function getCurrentBlockTimestamp() view returns (uint256 timestamp)',
  'function aggregate(tuple(address target, bytes callData)[] calls) view returns (uint256 blockNumber, bytes[] returnData)',
  'function getLastBlockHash() view returns (bytes32 blockHash)',
  'function getEthBalance(address addr) view returns (uint256 balance)',
  'function getCurrentBlockDifficulty() view returns (uint256 difficulty)',
  'function getCurrentBlockGasLimit() view returns (uint256 gaslimit)',
  'function getCurrentBlockCoinbase() view returns (address coinbase)',
  'function getBlockHash(uint256 blockNumber) view returns (bytes32 blockHash)',
  'function tryAggregate(bool requireSuccess, tuple(address target, bytes callData)[] calls) public view returns (tuple(bool success, bytes returnData)[] returnData)',
  'function tryBlockAndAggregate(bool requireSuccess, tuple(address target, bytes callData)[] calls) public view returns (uint256 blockNumber, bytes32 blockHash, tuple(bool success, bytes returnData)[] returnData)',
];

// Data for Grants contracts
export const WAD = '1000000000000000000'; // 1e18
export const GRANT_REGISTRY_ADDRESS = '0xbcFD9E59C86d6337ba68f0a7464cFA9cE46Ec9e8';
export { abi as GRANT_REGISTRY_ABI } from '../../../contracts/artifacts/contracts/GrantRegistry.sol/GrantRegistry.json';

export { abi as GRANT_ROUND_ABI } from '../../../contracts/artifacts/contracts/GrantRound.sol/GrantRound.json';

export const GRANT_ROUND_MANAGER_ADDRESS = '0x87496eb0b9c2031D2B7aC6395eDB13409742b324';
export { abi as GRANT_ROUND_MANAGER_ABI } from '../../../contracts/artifacts/contracts/GrantRoundManager.sol/GrantRoundManager.json';

//export const WAVAX_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
//export const PNG_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

export const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function balanceOf(address) view returns (uint)',
  'function approve(address spender, uint256 amount) external returns (bool)',
  'function allowance(address owner, address spender) external view returns (uint256)',
  'function transfer(address to, uint amount)',
  'event Transfer(address indexed from, address indexed to, uint amount)',
];
/*
//need to add tokens
export const SUPPORTED_TOKENS: TokenInfo[] = [
  // TokenList format
  {
    chainId: 43113,
    address: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
    name: 'Wrapped Avax',
    symbol: 'WAVAX',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
  },
  {
    chainId: 43113,
    address: '0x83080D4b5fC60e22dFFA8d14AD3BB41Dde48F199',
    name: 'png',
    symbol: 'PNG',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png?1600306604',
  },
];

export const SUPPORTED_TOKENS_MAPPING = (() => {
  const tokenMappingByAddress: Record<string, TokenInfo> = {};
  SUPPORTED_TOKENS.forEach((token) => (tokenMappingByAddress[getAddress(token.address)] = token));
  return tokenMappingByAddress;
})();
*/