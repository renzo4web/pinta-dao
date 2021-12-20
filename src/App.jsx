import { useEffect, useMemo, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import { Button } from "@mui/material";

const App = () => {
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("👋 Address:", address);

  if (!address) {
    return (
      <div className="landing">
        <span className="dog-spin">🐶</span>
        <h1>Welcome to PintaDAO</h1>

        <Button
          color="secondary"
          variant={"contained"}
          sx={{ fontWeight: "bold" }}
          onClick={() => connectWallet("injected")}
        >
          Connect your wallet
        </Button>
      </div>
    );
  }

  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>
  );
};

export default App;
