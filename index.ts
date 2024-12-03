import { toEventHash } from "viem";
import { lotteryFactory } from "./config/contracts/factory";
import type { CreateLotteryArgs } from "./utils/types";
import { publicClient } from "./config/client";

const args:CreateLotteryArgs = [
  "WarpWatch PowerBALD",                     // name
  "WWPB",                                    // symbol
  6,                                         // numPicks
  12,                                        // maxBallValue
  BigInt(86400),                             // gamePeriod (converted to bigint)
  BigInt("99000000000000000000"),            // ticketPrice
  BigInt(2000),                             // communityFeeBps
  "0xeb54dacb4c2ccb64f8074eceea33b5ebb38e5387", // prizeToken (valid `0x` address string)
  BigInt(3600),                              // seedJackpotDelay
  BigInt("99000000000000000000")             // seedJackpotMinValue
];


const tx = await lotteryFactory.write.create(args)
const recipt = await publicClient.waitForTransactionReceipt({hash: tx})
const event = await lotteryFactory.getEvents.LooteryLaunched()


console.log("Tx ID:", tx);
//console.log("Event", event)
console.log("Recipt", recipt)



