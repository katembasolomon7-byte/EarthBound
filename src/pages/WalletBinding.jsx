import React, { useState } from "react";

export default function WalletBinding() {
  const [walletAddress, setWalletAddress] = useState("");
  const [isBound, setIsBound] = useState(false);

  const START_BLUE = "#2f8b82";
  const START_BLUE_DARK = "#246e68";

  const handleBind = () => {
    if (!walletAddress.trim()) {
      alert("Please enter a wallet address.");
      return;
    }
    setIsBound(true);
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">🔗 Wallet Binding</h2>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          USDT Wallet Address (TRC20)
        </label>
        <input
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          disabled={isBound}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
          placeholder="Enter your TRC20 USDT address"
          style={{
            outline: "none",
          }}
        />

        <button
          onClick={handleBind}
          disabled={isBound}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: 6,
            color: "#fff",
            border: "none",
            cursor: isBound ? "not-allowed" : "pointer",
            background: isBound ? "#9aa5a0" : START_BLUE,
            fontWeight: 700,
            transition: "background 0.15s",
          }}
          onMouseOver={(e) => { if (!isBound) e.currentTarget.style.background = START_BLUE_DARK; }}
          onMouseOut={(e) => { if (!isBound) e.currentTarget.style.background = START_BLUE; }}
        >
          {isBound ? "Wallet Bound" : "Bind Wallet"}
        </button>

        {isBound && (
          <div className="mt-4 bg-green-100 text-green-800 p-3 rounded">
            ✅ Wallet bound successfully: <strong>{walletAddress}</strong>
          </div>
        )}
      </div>
    </div>
  );
}