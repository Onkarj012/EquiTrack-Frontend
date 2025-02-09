import { useState } from "react";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stocks = [
    {
      name: "Apple Inc.",
      ticker: "AAPL",
      quantity: 100,
      buyPrice: 150.25,
      currentPrice: 175.5,
      change: "+16.8%",
    },
    {
      name: "Microsoft Corporation",
      ticker: "MSFT",
      quantity: 50,
      buyPrice: 280.1,
      currentPrice: 310.25,
      change: "+10.8%",
    },
    {
      name: "Tesla, Inc.",
      ticker: "TSLA",
      quantity: 25,
      buyPrice: 190.75,
      currentPrice: 180.2,
      change: "-5.5%",
    },
  ];

  return (
    <div
      className={`p-6 text-white bg-gray-900 min-h-screen ${
        isModalOpen ? "overflow-hidden" : ""
      }`}
    >
      <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>

      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search stocks..."
            className="p-2 bg-gray-800 text-white rounded-md placeholder-gray-400 focus:outline-none"
          />
          <select className="p-3 bg-gray-800 text-white rounded-md focus:outline-none">
            <option>Sort by</option>
            <option>Price</option>
            <option>Change</option>
          </select>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gray-700 hover:bg-gray-700 text-white px-4 py-2 rounded-xl"
        >
          + Add New Stock
        </button>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <div className="grid grid-cols-8 font-semibold border-b border-gray-700 pb-2 mb-2 text-gray-300 text-center">
          <div className="text-left">Stock Name</div>
          <div>Ticker</div>
          <div>Quantity</div>
          <div>Avg. Cost</div>
          <div>LTP</div>
          <div>Current Value</div>
          <div>P&L</div>
          <div>Change</div>
        </div>

        {stocks.map((stock, index) => {
          const currentValue = (stock.currentPrice * stock.quantity).toFixed(2);
          const profitLoss = (
            (stock.currentPrice - stock.buyPrice) *
            stock.quantity
          ).toFixed(2);
          const isLoss = profitLoss.startsWith("-");

          return (
            <div
              key={index}
              className={`grid grid-cols-8 p-2 text-center ${
                index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
              } rounded-md`}
            >
              <div className="text-left">{stock.name}</div>
              <div>{stock.ticker}</div>
              <div>{stock.quantity}</div>
              <div>${stock.buyPrice.toFixed(2)}</div>
              <div>${stock.currentPrice.toFixed(2)}</div>
              <div>${currentValue}</div>
              <div className={isLoss ? "text-red-400" : "text-green-400"}>
                ${profitLoss}
              </div>
              <div
                className={
                  stock.change.includes("-") ? "text-red-400" : "text-green-400"
                }
              >
                {stock.change}
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
            <p className="text-3xl mb-4">Add Stock Position</p>
            <input
              type="text"
              placeholder="Stock Ticker (e.g. AAPL)"
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="number"
              placeholder="Quantity"
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="number"
              placeholder="Purchase Price"
              className="w-full p-2 mb-4 border rounded"
            />
            <input type="date" className="w-full p-2 mb-4 border rounded" />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-700 rounded"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded">
                + Add Position
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
