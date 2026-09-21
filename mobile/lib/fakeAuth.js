import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "fake_user";

let currentUser = null;

export const setCurrentUser = async (user) => {
  currentUser = user;
  await AsyncStorage.setItem(KEY, JSON.stringify(user));
};

export const getCurrentUser = async () => {
  if (currentUser) return currentUser;
  const raw = await AsyncStorage.getItem(KEY);
  if (raw) currentUser = JSON.parse(raw);
  return currentUser;
};

export const clearCurrentUser = async () => {
  currentUser = null;
  await AsyncStorage.removeItem(KEY);
};
