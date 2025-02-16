import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Portfolio = () => {
  interface Stock {
    purchasePrice: number;
    symbol: string;
    _id: string;
    quantity: number;
    buyPrice: number;
    currentPrice?: number | null;
    change?: string;
  }

  const [stocks, setStocks] = useState<Stock[] | null>(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("❌ No token found!");
          return;
        }

        const response = await axios.get("http://localhost:8080/api/stocks", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("📌 API Response Data:", response.data);

        setStocks(
          response.data.map((stock: Stock) => ({
            ...stock,
            buyPrice: stock.purchasePrice,
            currentPrice: stock.currentPrice ?? null,
          }))
        );
      } catch (error) {
        console.error("❌ Error fetching stocks:", error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6 text-white bg-gray-900 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>

        {stocks === null ? (
          <p className="text-gray-400">Loading stocks...</p>
        ) : stocks.length === 0 ? (
          <p className="text-gray-400">
            No stocks found. Add a stock to get started!
          </p>
        ) : (
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-7 font-semibold border-b border-gray-700 pb-2 mb-2 text-gray-300 text-center">
              <div>Ticker</div>
              <div>Quantity</div>
              <div>Avg. Cost</div>
              <div>Current Price</div>
              <div>Current Value</div>
              <div>P&L</div>
              <div>Change</div>
            </div>

            {stocks.map((stock, index) => {
              const currentValue = stock.currentPrice
                ? (stock.currentPrice * stock.quantity).toFixed(2)
                : "N/A";
              const profitLoss = stock.currentPrice
                ? (
                    (stock.currentPrice - stock.buyPrice) *
                    stock.quantity
                  ).toFixed(2)
                : "N/A";
              const isLoss =
                typeof profitLoss === "string" && profitLoss.startsWith("-");

              return (
                <div
                  key={stock._id}
                  className={`grid grid-cols-7 p-2 text-center ${
                    index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
                  } rounded-md`}
                >
                  <div>{stock.symbol ?? "N/A"}</div>
                  <div>{stock.quantity ?? "N/A"}</div>
                  <div>${stock.buyPrice?.toFixed(2) ?? "N/A"}</div>
                  <div>${stock.currentPrice?.toFixed(2) ?? "N/A"}</div>
                  <div>${currentValue}</div>
                  <div className={isLoss ? "text-red-400" : "text-green-400"}>
                    ${profitLoss}
                  </div>
                  <div
                    className={
                      stock.change?.startsWith("-")
                        ? "text-red-400"
                        : "text-green-400"
                    }
                  >
                    {stock.change ?? "N/A"}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
