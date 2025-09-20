import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { windowWidth } from "../styles/globalStyle";
import { app, auth } from "../firebase/config";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stateFre, setStateFre] = useState("Loading...");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    try {
      const connect = auth;
      if (connect) {
        console.log("connect sucess");
        setStateFre("=)");
      } else {
        console.log("error connect firebase");
      }
    } catch (e) {
      console.log(e);
    }
  });

  const handleLogin = () => {
    console.log("Button on click");
  };
  const handleRegister = () => {
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
        <Button title="Đăng ký" onPress={handleRegister} />
        <Button title="Đăng nhập" onPress={handleLogin} />
      </View>
      <View>
        <Text>{stateFre}</Text>
        {loginError ? <Text style={{ color: "red" }}>{loginError}</Text> : null}
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
