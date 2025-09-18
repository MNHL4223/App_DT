import { View, Text } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigation from "./MainNavigation";
import AuthNavigation from "./AuthNavigation";

const Stack = createNativeStackNavigator();

const Routers = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoading ? (
        <Stack.Screen name="MainNavigation" component={MainNavigation} />
      ) : (
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
};

export default Routers;
