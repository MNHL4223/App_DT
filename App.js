import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routers } from "./src/navigations";
export default function App() {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
}
