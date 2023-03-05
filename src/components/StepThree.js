import { goerli, useAccount, useNetwork } from "wagmi";
import useBalance from "../hooks/useBalance.js";

export default function StepThree() {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { data } = useBalance();

  return (
    <div className="mt-10">
      <div className="text-lg font-bold mb-2">Step 3. My NFT Balance</div>
      {!address && (
        <div className="text-red-500 mb-2">Connect wallet first</div>
      )}
      {address && chain?.id !== goerli.id && (
        <div className="text-red-500 mb-2">Switch to Goerli network</div>
      )}
      Total count: {data?.toString()}
    </div>
  );
}
