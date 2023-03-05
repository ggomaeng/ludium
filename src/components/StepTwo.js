import { useAccount, useNetwork, useSwitchNetwork, goerli } from "wagmi";
import useMint from "../hooks/useMint.js";

export default function StepTwo() {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const { write: mint, isLoading } = useMint(address);

  return (
    <div className="mt-10">
      <div className="text-lg font-bold mb-2">Step 2. Mint</div>
      {!address && (
        <div className="text-red-500 mb-2">Connect wallet first</div>
      )}

      {address && chain?.id !== goerli.id && (
        <div className="text-red-500 mb-2">Switch to Goerli network</div>
      )}
      <button
        onClick={() => {
          if (chain?.id !== goerli.id) {
            switchNetwork(goerli.id);
            return;
          }

          mint?.();
        }}
        disabled={chain?.id !== goerli.id || !address || isLoading}
      >
        {isLoading ? "Minting" : "Mint"}
      </button>
    </div>
  );
}
