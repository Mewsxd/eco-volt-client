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
