import { StarknetConfig, argent, braavos, publicProvider, useInjectedConnectors } from "@starknet-react/core";
import { devnet, goerli, mainnet } from "@starknet-react/chains";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./globals.css"

function Root({ children }: { children: React.ReactNode }) {
  const chains = [goerli, mainnet, devnet];
  const providers = [publicProvider()];
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [
      argent(),
      braavos(),
    ],
    // Randomize the order of the connectors.
    order: "random"
  });

  return (
    <StarknetConfig autoConnect
      chains={chains}
      providers={providers}
      connectors={connectors}>
      {children}
    </StarknetConfig>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root>
      <App />
    </Root>
  </React.StrictMode>,
);
