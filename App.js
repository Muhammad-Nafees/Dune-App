import React, { useEffect } from 'react';
import { View,Text, Dimensions, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import {BlurView} from "@react-native-community/blur"
// import {usenav} from 
import LinearGradient from "react-native-linear-gradient"
import { useSelector } from 'react-redux';
import Routes from './navigation/Routes';


const App = () => {
  
  return (
   
      <Routes/>
    
  );
};

export default App;
