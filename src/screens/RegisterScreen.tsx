import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleRegister = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ĐĂNG KÝ</Text>
      <TextInput
        style={styles.containerInput}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Họ và tên"
      />
      <TextInput
        style={styles.containerInput}
        value={phone}
        onChangeText={(text) => setPhone(text)}
        placeholder="Số điện thoại"
      />
      <TextInput
        style={styles.containerInput}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
      />
      <TextInput
        style={styles.containerInput}
        value={pass}
        onChangeText={(text) => setPass(text)}
        placeholder="Mật khẩu"
      />
      <Button title="Đăng ký" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;

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
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
