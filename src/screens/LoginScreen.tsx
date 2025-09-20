import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { use, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { windowWidth } from "../styles/globalStyle";
import { loginWithEmail, readDocs } from "../firebase/server";
import { useDispatch, useSelector } from "react-redux";
import { addAuth, authSelector } from "../store/reducers/authReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUser, saveUser } from "../utils/asyncStorage";
const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stateFre, setStateFre] = useState("Loading...");
  const dispatch = useDispatch();
  const user = useSelector(authSelector);
  // useEffect(() => {
  //   try {
  //     const connect = auth;
  //     if (connect) {
  //       console.log("connect sucess");
  //       setStateFre("=)");
  //     } else {
  //       console.log("error connect firebase");
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // });

  const handleLogin = async () => {
    const result = await loginWithEmail(email, password);
    let dataUser: any = await readDocs({
      collectionName: "user",
      conditions: [{ field: "id", op: "==", value: result.user.uid }],
    });
    if (result.user) {
      // add info user to redux
      dataUser = dataUser.items[0];
      console.log(dataUser);
      dispatch(
        addAuth({
          id: result.user.uid,
          email: result.user.email,
          displayName: dataUser.displayName,
          phoneNumber: dataUser.phoneNumber,
        })
      );
      saveUser(dataUser); // luu thong tin user vao asyncStorage
      const test = await getUser();
      console.log(` info trong asyncStore ${JSON.stringify(test, null, 2)}`);
      console.log("đăng nhập thành công");
    } else {
      console.log(result.error);
    }
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
