import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

export default function StepOne() {
  return (
    <div>
      <div className="text-lg font-bold mb-2">Step 1. Connect wallet</div>
      <ConnectButton />
    </div>
  );
}
