import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { windowWidth } from "../styles/globalStyle";
import { registerWithEmail } from "../firebase/server";
const RegisterScreen = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState({
    displayName: "",
    phoneNumber: "",
    email: "",
    pass: "",
  });

  const handleRegister = async () => {
    const result = await registerWithEmail(
      profile.displayName,
      profile.email,
      profile.phoneNumber,
      profile.pass
    );
    if (result) {
      console.log("Register success:", result);
      navigation.goBack();
    } else {
      console.log("Register failed");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>ĐĂNG KÝ</Text>
      </View>
      <ScrollView>
        <TextInput
          style={styles.containerInput}
          value={profile.displayName}
          onChangeText={(text) => setProfile({ ...profile, displayName: text })}
          placeholder="Họ và tên"
        />
        <TextInput
          style={styles.containerInput}
          value={profile.phoneNumber}
          onChangeText={(text) => setProfile({ ...profile, phoneNumber: text })}
          placeholder="Số điện thoại"
        />
        <TextInput
          style={styles.containerInput}
          value={profile.email}
          onChangeText={(text) => setProfile({ ...profile, email: text })}
          placeholder="Email"
        />
        <TextInput
          style={styles.containerInput}
          value={profile.pass}
          onChangeText={(text) => setProfile({ ...profile, pass: text })}
          placeholder="Mật khẩu"
        />
      </ScrollView>
      <View style={styles.containerFooter}>
        <Button title="Đăng ký" onPress={handleRegister} />
      </View>
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
  containerHeader: {
    marginTop: 60,
    flex: 1,
  },
  containerFooter: {
    marginBottom: 60,
    flex: 1,
  },
});
