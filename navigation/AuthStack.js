import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";



const AuthStack = () => {

   const Stack = createStackNavigator()

   return (
      <Stack.Navigator initialRouteName="Login">
         <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
         <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
      </Stack.Navigator>

   )

}

export default AuthStack
