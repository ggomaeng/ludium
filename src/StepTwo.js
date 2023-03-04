import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import useMint from "./hooks/useMint.js";
const CHAIN_GOERLI = 5;

export default function StepTwo() {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const { write: mint } = useMint(address, "");

  return (
    <div className="mt-10">
      <div className="text-lg font-bold mb-2">Step 2. Mint</div>
      {!address && (
        <div className="text-red-500 mb-2">Connect wallet first</div>
      )}

      {address && chain?.id !== CHAIN_GOERLI && (
        <div className="text-red-500 mb-2">Switch to Goerli network</div>
      )}
      <button
        onClick={() => {
          if (chain?.id !== CHAIN_GOERLI) {
            switchNetwork(CHAIN_GOERLI);
            return;
          }

          mint?.();
        }}
        disabled={chain?.id !== CHAIN_GOERLI || !address}
      >
        Mint
      </button>
    </div>
  );
}
