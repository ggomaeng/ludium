import { toast } from "react-hot-toast";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import abi from "../abi/abi.json";
import { CONTRACT_ADDRESS } from "../constants/config.js";

export default function useMint(address) {
  function onError(e) {
    toast.error(e.message);
  }

  const { config, error } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: "safeMint",
    args: [address],
  });

  const { data, write, isLoading } = useContractWrite({
    ...config,
    onError,
    onSuccess: () => toast.success("Transaction submitted"),
  });

  const {
    isLoading: txLoading,
    isSuccess,
    error: txError,
  } = useWaitForTransaction({
    hash: data?.hash,
    onError,
    onSuccess: () => toast.success("Minted successfully"),
  });

  return {
    write,
    isLoading: isLoading || txLoading,
    isSuccess,
    error: error || txError,
  };
}
