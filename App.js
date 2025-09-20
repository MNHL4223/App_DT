import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routers } from "./src/navigations";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routers />
      </NavigationContainer>
    </Provider>
  );
}
