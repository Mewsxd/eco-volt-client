// import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";

// // Define the QuickSwap pair contract for the tokens (e.g., MATIC/USDC)
// const QUICKSWAP_PAIR_ADDRESS = "0x853ee4b2a13f8a742d64c8f088be7ba2131f670d"; // Example: MATIC/USDC pair
// const QUICKSWAP_PAIR_ABI = [
//   "function getReserves() view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
//   "function token0() view returns (address)",
//   "function token1() view returns (address)",
// ];

// interface TokenPriceProps {
//   providerUrl: string; // RPC URL for Polygon (e.g., Alchemy, Infura, etc.)
// }

// const TokenPrice: React.FC<TokenPriceProps> = ({ providerUrl }) => {
//   const [price, setPrice] = useState<number | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchPrice = async () => {
//       try {
//         setLoading(true);
//         const provider = new ethers.JsonRpcProvider(providerUrl);
//         const pairContract = new ethers.Contract(
//           QUICKSWAP_PAIR_ADDRESS,
//           QUICKSWAP_PAIR_ABI,
//           provider
//         );

//         const [reserve0, reserve1] = await pairContract.getReserves();
//         const token0 = await pairContract.token0();
//         const token1 = await pairContract.token1();

//         // Assume USDC is token0 and MATIC is token1 (you can switch based on the token addresses)
//         const token0Decimals = 6; // USDC has 6 decimals
//         const token1Decimals = 18; // MATIC has 18 decimals

//         const reserve0Adjusted = Number(reserve0) / 10 ** token0Decimals;
//         const reserve1Adjusted = Number(reserve1) / 10 ** token1Decimals;

//         // Calculate price: USDC/MATIC (price of 1 MATIC in USDC)
//         const maticPriceInUsdc = reserve0Adjusted / reserve1Adjusted;

//         setPrice(maticPriceInUsdc);
//       } catch (err) {
//         setError("Failed to fetch price");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPrice();
//   }, [providerUrl]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return <p>The current price of MATIC in USDC is: {price?.toFixed(6)}</p>;
// };

// export default TokenPrice;
import React, { useState, useEffect } from "react";

interface TokenPrice {
  price: number;
  symbol: string;
  lastUpdated: string;
}

interface TokenPriceProps {
  tokenAddress: string;
  refreshInterval?: number;
}

const PolygonTokenPrice: React.FC<TokenPriceProps> = ({
  tokenAddress,
  refreshInterval = 30000,
}) => {
  const [priceData, setPriceData] = useState<TokenPrice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrice = async () => {
    try {
      const apiKey =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImJlYzM5OTU1LWI0MjAtNDRlZi05YTBkLTFiZjllMGUyNmI0MSIsIm9yZ0lkIjoiMzk1Mzk4IiwidXNlcklkIjoiNDA2MzAzIiwidHlwZUlkIjoiZDU1NTdmYWQtYjdkZC00MmE5LTg1ZTEtM2YwZjFlYjcyMWNhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTc3MzYyMjAsImV4cCI6NDg3MzQ5NjIyMH0.STwAVPjRBLIj0pJ_19fKSXv-Q8AdVeSJyVeisXYRUCg";
      const url = `https://deep-index.moralis.io/api/v2/erc20/${tokenAddress}/price?chain=polygon`;

      console.log("Fetching token price from:", url);

      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "X-API-Key": apiKey,
        },
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(
          `Failed to fetch token price: ${response.status} ${errorDetails}`
        );
      }

      const data = await response.json();

      setPriceData({
        price: data.usdPrice,
        symbol: data.tokenSymbol,
        lastUpdated: new Date().toISOString(),
      });
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch price");
      console.error("Error fetching price:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrice();

    const interval = setInterval(fetchPrice, refreshInterval);
    return () => clearInterval(interval);
  }, [tokenAddress, refreshInterval]);

  if (loading) {
    return <div className="p-4">Loading token price...</div>;
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">
        Error: {error}
        <button
          onClick={fetchPrice}
          className="ml-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-2">{priceData?.symbol} Price</h2>
      <div className="text-2xl font-semibold text-green-600">
        ${priceData?.price.toFixed(6)}
      </div>
      <div className="text-sm text-gray-500 mt-2">
        Last updated: {new Date(priceData?.lastUpdated || "").toLocaleString()}
      </div>
      <button
        onClick={fetchPrice}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Refresh Price
      </button>
    </div>
  );
};

export default PolygonTokenPrice;
