import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigation from "./MainNavigation";
import AuthNavigation from "./AuthNavigation";
import { useDispatch, useSelector } from "react-redux";
import { addAuth, authSelector } from "../store/reducers/authReducer";
import DrawerNavigation from "./DrawerNavigation";
import { getUser } from "../utils/asyncStorage";

const Stack = createNativeStackNavigator();

const Routers = () => {
  const dispatch = useDispatch();
  const authData = useSelector(authSelector);
  useEffect(() => {
    const checkLogin = async () => {
      const user = await getUser();
      if (user) dispatch(addAuth(user));
    };
    checkLogin();
  }, []);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authData ? (
        <Stack.Screen name="MainNavigation" component={DrawerNavigation} />
      ) : (
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
};

export default Routers;
