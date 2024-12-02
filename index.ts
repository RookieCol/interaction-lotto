import { walletClient } from "./config/client";
import { lotteryFactory } from "./config/contracts/factory";
import { factoryABI } from "./config/contracts/factory/abi";

// Define args as a fixed tuple with the correct types
const args: readonly [
  string,            // name
  string,            // symbol
  number,            // numPicks
  number,            // maxBallValue
  bigint,            // gamePeriod
  bigint,            // ticketPrice
  bigint,            // communityFeeBps
  `0x${string}`,     // prizeToken
  bigint,            // seedJackpotDelay
  bigint             // seedJackpotMinValue
] = [
  "WarpWatch PowerBALD",                     // name
  "WWPB",                                    // symbol
  5,                                         // numPicks
  18,                                        // maxBallValue
  BigInt(86400),                             // gamePeriod (converted to bigint)
  BigInt("99000000000000000000"),            // ticketPrice
  BigInt(10000),                             // communityFeeBps
  "0xeb54dacb4c2ccb64f8074eceea33b5ebb38e5387", // prizeToken (valid `0x` address string)
  BigInt(3600),                              // seedJackpotDelay
  BigInt("99000000000000000000")             // seedJackpotMinValue
];


const tx = lotteryFactory.write.create(args)

console.log("Simulated result:", tx);
