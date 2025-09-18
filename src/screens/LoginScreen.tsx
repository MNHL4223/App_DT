import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Button on click");
  };

  const handleRegiter = () => {
    navigation.navigate("Register" as never);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ĐĂNG NHẬP</Text>
      <TextInput
        style={styles.containerInput}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
      />
      <TextInput
        style={styles.containerInput}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Mật khẩu"
      />
      <View style={styles.row}>
        <Button title="Đăng ký" onPress={handleRegiter} />
        <Button title="Đăng nhập" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerInput: {
    borderWidth: 1,
    borderColor: "gray",
    width: windowWidth * 0.9,
    borderRadius: 5,
    marginVertical: 10,
  },
  row: {
    width: windowWidth * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
