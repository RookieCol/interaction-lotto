import { publicClient } from "../config/client";
import { lotteryFactory } from "../config/contracts/factory";
import { factoryABI } from "../config/contracts/factory/abi";

const looteryMasterCopy = await publicClient.readContract({
    address: lotteryFactory.address,
    abi: factoryABI,
    functionName: 'getLooteryMasterCopy',
  });
  console.log('looteryMasterCopy:', looteryMasterCopy);
  
  const randomiser = await publicClient.readContract({
    address: lotteryFactory.address,
    abi: factoryABI,
    functionName: 'getRandomiser',
  });
  console.log('randomiser:', randomiser);
  
  const ticketSVGRenderer = await publicClient.readContract({
    address: lotteryFactory.address,
    abi: factoryABI,
    functionName: 'getTicketSVGRenderer',
  });
  console.log('ticketSVGRenderer:', ticketSVGRenderer);
  