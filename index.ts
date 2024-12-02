import { lotteryFactory } from "./config/contracts/factory";
import type { CreateLotteryArgs } from "./utils/types";

const args:CreateLotteryArgs = [
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


const tx = await lotteryFactory.write.create(args)
const event = await lotteryFactory.getEvents.LooteryLaunched()

console.log("Tx ID:", tx);
