import { ethers } from 'ethers';

const FACTORY_ADDRESS = "0xca90207F3632C27BAeabe381eB5a6772D75C11A5";
const FACTORY_ABI = [
  {
    "inputs": [
      { "internalType": "string", "name": "name", "type": "string" },
      { "internalType": "string", "name": "symbol", "type": "string" },
      { "internalType": "uint8", "name": "pickLength", "type": "uint8" },
      { "internalType": "uint8", "name": "maxBallValue", "type": "uint8" },
      { "internalType": "uint256", "name": "gamePeriod", "type": "uint256" },
      { "internalType": "uint256", "name": "ticketPrice", "type": "uint256" },
      { "internalType": "uint256", "name": "communityFeeBps", "type": "uint256" },
      { "internalType": "address", "name": "prizeToken", "type": "address" },
      { "internalType": "uint256", "name": "seedJackpotDelay", "type": "uint256" },
      { "internalType": "uint256", "name": "seedJackpotMinValue", "type": "uint256" }
    ],
    "name": "create",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const args: readonly [
  string, // name
  string, // symbol
  number, // numPicks
  number, // maxBallValue
  bigint, // gamePeriod
  bigint, // ticketPrice
  bigint, // communityFeeBps
  `0x${string}`, // prizeToken
  bigint, // seedJackpotDelay
  bigint // seedJackpotMinValue
] = [
  "WarpWatch PowerBALD", // name
  "WWPB", // symbol
  5, // numPicks
  18, // maxBallValue
  BigInt(86400), // gamePeriod
  BigInt("99000000000000000000"), // ticketPrice
  BigInt(2000), // communityFeeBps
  "0xeb54dacb4c2ccb64f8074eceea33b5ebb38e5387", // prizeToken
  BigInt(3600), // seedJackpotDelay
  BigInt("99000000000000000000") // seedJackpotMinValue
];

const nmonic = process.env.NMONIC;

if (!nmonic) {
  throw new Error('No seed phrase found. Please set the NMONIC environment variable.');
}

async function main() {
  try {
    const provider = new ethers.JsonRpcProvider('https://sepolia-rpc.scroll.io');
    const wallet = new ethers.Wallet(nmonic as string, provider);

    const factoryContract = new ethers.Contract(FACTORY_ADDRESS, FACTORY_ABI, wallet);

    console.log("Sending transaction...");
    const tx = await factoryContract.create(...args);
    console.log("Transaction hash:", tx.hash);

    const receipt = await tx.wait();
    console.log("Transaction confirmed:", receipt);

 
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
