import { getContract } from "viem";
import { factoryABI } from "./abi";
import { publicClient, walletClient } from "../../client";
import { scrollSepolia } from "viem/chains";

const lotteryFactory = getContract({
  address: "0xca90207F3632C27BAeabe381eB5a6772D75C11A5",
  client: { public: publicClient, wallet: walletClient },
  abi: factoryABI
});

export { lotteryFactory };
