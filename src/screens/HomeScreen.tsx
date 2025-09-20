import { View, Text, Button } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { authSelector } from "../store/reducers/authReducer";

const HomeScreen = ({ navigation }: any) => {
  const user = useSelector(authSelector);
  console.log(user);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Xin chào {user?.displayName}</Text>
    </View>
  );
};

export default HomeScreen;
