import React, { use } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { HomeScreen } from "../screens";
import { useDispatch } from "react-redux";
import { removeAuth } from "../store/reducers/authReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Drawer = createDrawerNavigator();
const CustomDrawerContent = (props) => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    dispatch(removeAuth());
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Đăng xuất" onPress={handleLogout} />
    </DrawerContentScrollView>
  );
};
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
