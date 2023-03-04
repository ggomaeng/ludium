import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import abi from "../abi/abi.json";

export default function useMint(address, uri) {
  const { config, error } = usePrepareContractWrite({
    address: "0x9444fd8637c8af89bf25d84f6c30505c14c1babd",
    abi,
    functionName: "safeMint",
    args: [address, uri],
  });

  const { data, write } = useContractWrite(config);

  const {
    isLoading,
    isSuccess,
    error: txError,
  } = useWaitForTransaction({
    hash: data?.hash,
  });

  return { write, isLoading, isSuccess, error: error || txError };
}
