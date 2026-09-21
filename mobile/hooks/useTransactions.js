// react custome hook file 
import { useCallback, useState } from 'react'
import {Alert} from "react-native"

// 🔧 Replace with YOUR Mac's IP — run `ipconfig getifaddr en0` to find it
const API_URL = "http://192.168.231.131:3000/api";

// const API_URL = "http://10.0.2.2:3000/api";  // Android emulator only

export const useTransactions = (userId) => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  // const fetchTransactions = useCallback(async () => {
  //   try {
  //     const response = await fetch(`${API_URL}/transactions/${userId}`);
  //     const data = await response.json();
  //     setTransactions(data);
  //   } catch (error) {
  //     console.error("Error fetching transactions:", error);
  //   }
  // }, [userId]);
  const fetchTransactions = useCallback(async () => {
  try {
    const url = `${API_URL}/transactions/${userId}`;
    console.log("GET:", url);
    const response = await fetch(url);
    const text = await response.text();
    console.log("RAW:", text);
    const data = JSON.parse(text);
    setTransactions(data);
  } catch (error) {
    console.error("Error fetching transactions:", error);
  }
}, [userId]);

  const fetchSummary = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/summary/${userId}`);
      const data = await response.json();
      setSummary(data);
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  }, [userId]);

  const loadData = useCallback(async () => {
    if (!userId) return;

    setIsLoading(true);
    try {
      await Promise.all([fetchTransactions(), fetchSummary()]);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchTransactions, fetchSummary, userId]);

  const deleteTransaction = async (id) => {
    try {
      const response = await fetch(`${API_URL}/transactions/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete transaction");
      loadData();
      Alert.alert("Success", "Transaction deleted successfully");
    } catch (error) {
      console.error("Error deleting transaction:", error);
      Alert.alert("Error", error.message);
    }
  };

  return { transactions, summary, isLoading, loadData, deleteTransaction };
};