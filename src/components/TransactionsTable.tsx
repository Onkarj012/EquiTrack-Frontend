import React from "react";

const TransactionsTable: React.FC = () => {
  return (
    <div className="container mx-auto mt-4 p-4">
      <h5 className="text-lg font-medium mb-2">Recent Transactions</h5>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-900 divide-y divide-gray-700">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                AAPL
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                Buy
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                10 shares
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                $175.34
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                Jan 15, 2025
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                MSFT
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                Sell
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                5 shares
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                $390.27
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                Jan 14, 2025
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                GOOGL
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                Buy
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                3 shares
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                $142.89
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                Jan 13, 2025
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
