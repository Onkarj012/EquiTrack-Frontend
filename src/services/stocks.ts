import api from "../api";

export const getUserStocks = async () => {
  const response = await api.get("/stocks");
  return response.data; // Returns array of stocks with live prices
};

export const addStock = async (symbol: string, quantity: number, buyPrice: number) => {
  const response = await api.post("/stocks/add", { symbol, quantity, buyPrice });
  return response.data;
};

export const deleteStock = async (stockId: string) => {
  await api.delete(`/stocks/${stockId}`);
};
