import { useAccount, useContractRead } from "wagmi";
import abi from "../abi/abi.json";
import { CONTRACT_ADDRESS } from "../constants/config.js";

export default function useBalance() {
  const { address } = useAccount();
  return useContractRead({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: "balanceOf",
    watch: true,
    ...(address && { args: [address] }),
  });
}
