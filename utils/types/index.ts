import type { Address } from "viem";

export type CreateLotteryArgs = readonly [
    string,            // name
    string,            // symbol
    number,            // numPicks
    number,            // maxBallValue
    bigint,            // gamePeriod
    bigint,            // ticketPrice
    bigint,            // communityFeeBps
    Address,     // prizeToken
    bigint,            // seedJackpotDelay
    bigint             // seedJackpotMinValue
  ];