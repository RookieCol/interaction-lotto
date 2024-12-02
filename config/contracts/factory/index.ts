import { getContract, type Address } from "viem";
import { factoryABI } from "./abi";
import { publicClient, walletClient } from "../../client";


const factoryAddress = {
  proxy: "0xca90207F3632C27BAeabe381eB5a6772D75C11A5",
  implementation: "0x054cb4a19bc24fe8feef7ee1404b8833b87277e4",
};

const lotteryFactory = getContract({
  address: factoryAddress.implementation as Address,
  client: { public: publicClient, wallet: walletClient },
  abi: factoryABI
});

export { lotteryFactory };
