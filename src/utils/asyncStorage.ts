import AsyncStorage from "@react-native-async-storage/async-storage";
const saveUser = async (user) => {
  await AsyncStorage.setItem("user", JSON.stringify(user));
};
const getUser = async () => {
  const str = await AsyncStorage.getItem("user");
  return str ? JSON.parse(str) : null;
};
const removeUser = async () => {
  await AsyncStorage.removeItem("user");
};

export { saveUser, getUser, removeUser };
