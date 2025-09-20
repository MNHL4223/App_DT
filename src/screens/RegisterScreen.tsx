import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { windowHeight, windowWidth } from "../styles/globalStyle";
import { addAuth } from "../store/reducers/authReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
const RegisterScreen = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
    pass: "",
  });
  const dispatch = useDispatch();
  const handleRegister = async () => {
    try {
      if (profile.email && profile.pass) {
        dispatch(addAuth(profile));
        await AsyncStorage.setItem("user", JSON.stringify(profile));
        const test = await AsyncStorage.getItem("user");
        console.log(`dl test ${test}`);
        navigation.goBack();
      }
    } catch (e) {
      console.log(`Error button register: ${e}`);
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
          value={profile.name}
          onChangeText={(text) => setProfile({ ...profile, name: text })}
          placeholder="Họ và tên"
        />
        <TextInput
          style={styles.containerInput}
          value={profile.phone}
          onChangeText={(text) => setProfile({ ...profile, phone: text })}
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
