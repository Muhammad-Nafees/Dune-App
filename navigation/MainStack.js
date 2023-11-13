import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import Navigations, { } from "./Navigations";


const Stack = createStackNavigator()

const Mainstack = () => {

   return (
      <NavigationContainer independent={true}>
         <Navigations />
         {/* <Drawerslider /> */}
      </NavigationContainer>
   )

}

export default Mainstack;
