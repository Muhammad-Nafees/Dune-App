import React, { useEffect, useState } from 'react';
import {
     View,
     Text,
     Dimensions,
     Image,
     TextInput,
     TouchableOpacity,
     ScrollView,
     SafeAreaView,
     ImageBackground,
     BackHandler
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { useIsFocused } from '@react-navigation/native';


const Settingsdrawer = () => {

     const { width, height } = Dimensions.get('screen');
     const [iscolorChange, setIsColorchange] = useState(false)

     const navigation = useNavigation()

     return (
          <>

               {/* <SafeAreaView>
        <ScrollView> */}

               <View style={{}}>
                    <LinearGradient
                         colors={["#000000", '#063083',]} start={{ x: 0, y: 0.3 }} end={{ x: 0.8, y: 0 }} locations={[0.5, 1,]}
                         style={{ height: "100%", width: "100%", }}>

                         <ScrollView>
                              <View style={{ justifyContent: "center", alignItems: "center", marginTop: 18 }}>
                                   <View style={{ flexDirection: "row", width: "50%", justifyContent: "space-between", alignItems: "center", marginRight: 'auto', marginLeft: "10%" }}>

                                        <TouchableOpacity onPress={() => navigation.goBack()}>
                                             <View style={{ borderWidth: 0.2, width: 32, height: 32, justifyContent: "center", alignItems: "center", borderColor: "#FFFFFF", borderRadius: 4 }}>
                                                  <Image style={{ width: 15, height: 15, resizeMode: "center" }} source={require("../assets/backarrow.png")} />
                                             </View>
                                        </TouchableOpacity>

                                        <View>
                                             <Text style={{ color: "#FFFFFF", fontWeight: "400", fontSize: 20 }}>Settings</Text>
                                        </View>

                                   </View>
                              </View>
                              {/* -------------------xxxxxxxxxxxxxxxxx------------------------ */}


                              <View>
                                   <View style={{ justifyContent: "center", alignItems: "center", marginTop: 16 }}>
                                        <LinearGradient start={{ x: 0.1, y: 0.5 }} end={{ x: 1.5, y: 1 }} locations={[0.1, 0.6,]} colors={["rgba(255, 255, 255, 0.05)", "rgba(0, 0, 0, 0.00)"]} style={{ width: '90%', borderColor: "#FFFFFF", borderRadius: 10, height: 215 }}>

                                             <View style={{ marginLeft: '5%', marginTop: 10 }}>
                                                  <Text style={{ color: "#9747FF", fontSize: 15, fontWeight: "500" }}>Account</Text>
                                             </View>

                                             {/* -------------------xxxxxxxxxxxxxxxxx------------------------ */}

                                             <View style={{ marginTop: 15, marginLeft: '5%', marginRight: "auto", flexDirection: "row", alignItems: "center", borderColor: "#FFFFFF", width: "65%", justifyContent: 'space-between' }}>
                                                  <View>
                                                       <Image style={{ width: 28, height: 28, resizeMode: "center" }} source={require("../assets/productman.png")} />
                                                  </View>

                                                  <View style={{ width: "75%", borderColor: "#FFFFFF" }}>
                                                       <Text style={{ fontSize: 18.5, fontWeight: "300", }}>Email</Text>
                                                       <Text style={{ fontWeight: '100', color: "#FFFFFF", fontSize: 13 }}>youremail@example.com</Text>
                                                  </View>

                                             </View>


                                             {/* -------------------xxxxxxxxxxxxxxxxx------------------------ */}


                                             <View style={{ marginTop: 12, marginLeft: '5%', marginRight: "auto", flexDirection: "row", alignItems: "center", borderColor: "#FFFFFF", width: "65%", justifyContent: 'space-between' }}>

                                                  <View>
                                                       <Image style={{ width: 24, height: 24, resizeMode: "center" }} source={require("../assets/subscription.png")} />
                                                  </View>

                                                  <View style={{ width: "75%", borderColor: "#FFFFFF" }}>
                                                       <Text style={{ fontSize: 18.5, fontWeight: "300", textAlign: "left", }}>Subscription</Text>
                                                       <Text style={{ fontWeight: '100', color: "#FFFFFF", textAlign: "left", fontSize: 13 }}>Free Plan</Text>
                                                  </View>

                                             </View>

                                             {/* -------------------xxxxxxxxxxxxxxxxx------------------------ */}

                                             <View style={{ marginTop: 12, marginLeft: '5%', marginRight: "auto", flexDirection: "row", alignItems: "center", borderColor: "#FFFFFF", width: "65%", justifyContent: 'space-between' }}>

                                                  <View>
                                                       <Image style={{ width: 24, height: 24, resizeMode: "center" }} source={require("../assets/datacontrols.png")} />
                                                  </View>

                                                  <View style={{ width: "75%", borderColor: "#FFFFFF" }}>
                                                       <Text style={{ fontSize: 18.5, fontWeight: "300", }}>Data Controls</Text>
                                                       <Text style={{ fontWeight: '100', color: "#FFFFFF", fontSize: 13 }}>youremail@example.com</Text>
                                                  </View>

                                             </View>

                                             {/* -------------------xxxxxxxxxxxxxxxxx------------------------ */}

                                        </LinearGradient>
                                   </View>
                              </View>


                              {/* ------------------- SecondmainView xxxxxx------------------------ */}

                              <View>
                                   <View style={{ justifyContent: "center", alignItems: "center", marginTop: 14, }}>
                                        <LinearGradient start={{ x: 0.1, y: 0.5 }} end={{ x: 1.5, y: 1 }} locations={[0.1, 0.6,]} colors={["rgba(255, 255, 255, 0.05)", "rgba(0, 0, 0, 0.00)"]} style={{ width: '90%', borderColor: "#FFFFFF", borderRadius: 10, height: 320 }}>
                                             <View style={{ marginLeft: '5%', marginTop: 12 }}>
                                                  <Text style={{ color: "#9747FF", fontSize: 15, fontWeight: "500" }}>About</Text>
                                             </View>

                                             {/* -------------------xxxxxxxxxxxxxxxxx------------------------ */}

                                             <View style={{ marginTop: 14, marginLeft: '5%', marginRight: "auto", flexDirection: "row", alignItems: "center", borderColor: "#FFFFFF", width: "65%", justifyContent: 'space-between' }}>
                                                  <View>
                                                       <Image style={{ width: 24, height: 24, resizeMode: "center" }} source={require("../assets/audiosetting.png")} />
                                                  </View>

                                                  <View style={{ width: "75%", borderColor: "#FFFFFF" }}>
                                                       <Text style={{ fontSize: 18.5, fontWeight: "300", }}>Main Language</Text>
                                                       <Text style={{ fontWeight: '100', color: "#FFFFFF", fontSize: 13 }}>Auto-Detect</Text>
                                                  </View>

                                             </View>
                                             {/* -------------------xxxxxxxxxxxxxxxxx------------------------ */}


                                             <View style={{ marginTop: 15, marginLeft: '5%', marginRight: "auto", flexDirection: "row", alignItems: "center", borderColor: "#FFFFFF", width: "65%", justifyContent: 'space-between' }}>

                                                  <View>
                                                       <Image style={{ width: 22, height: 22, resizeMode: "center" }} source={require("../assets/musicsetting.png")} />
                                                  </View>

                                                  <View style={{ width: "75%", borderColor: "#FFFFFF", justifyContent: "center" }}>
                                                       <Text style={{ fontSize: 18.5, fontWeight: "300", textAlign: "left", }}>Help Center</Text>
                                                  </View>

                                             </View>

                                             {/* -------------------xxxxxxxxxxxxxxxxx------------------------ */}

                                             <View style={{ marginTop: 15, marginLeft: '5%', marginRight: "auto", flexDirection: "row", alignItems: "center", borderColor: "#FFFFFF", width: "65%", justifyContent: 'space-between' }}>

                                                  <View>
                                                       <Image style={{ width: 22, height: 22, resizeMode: "center" }} source={require("../assets/termsetting.png")} />
                                                  </View>

                                                  <View style={{ width: "75%", borderColor: "#FFFFFF" }}>
                                                       <Text style={{ fontSize: 18.5, fontWeight: "300", }}>Terms of Use</Text>
                                                  </View>

                                             </View>


                                             <View style={{ marginTop: 15, marginLeft: '5%', marginRight: "auto", flexDirection: "row", alignItems: "center", borderColor: "#FFFFFF", width: "65%", justifyContent: 'space-between' }}>

                                                  <View>
                                                       <Image style={{ width: 22, height: 22, resizeMode: "center" }} source={require("../assets/privacysetting.png")} />
                                                  </View>

                                                  <View style={{ width: "75%", borderColor: "#FFFFFF" }}>
                                                       <Text style={{ fontSize: 18.5, fontWeight: "300", textAlign: "left", }}>Privacy Policy</Text>
                                                  </View>

                                             </View>
                                             {/* -------------------xxxxxxxxxxxxxxxxx------------------------ */}

                                             <View style={{ marginTop: 15, marginLeft: '5%', marginRight: "auto", flexDirection: "row", alignItems: "center", borderColor: "#FFFFFF", width: "65%", justifyContent: 'space-between' }}>

                                                  <View>
                                                       <Image style={{ width: 22, height: 22, resizeMode: "center" }} source={require("../assets/licensesetting.png")} />
                                                  </View>

                                                  <View style={{ width: "75%", borderColor: "#FFFFFF" }}>
                                                       <Text style={{ fontSize: 18.5, fontWeight: "300", textAlign: "left", }}>Licenses</Text>
                                                  </View>

                                             </View>

                                             {/* -------------------xxxxxxxxxxxxxxxxx------------------------ */}
                                             <View style={{ marginTop: 15, marginLeft: '5%', marginRight: "auto", flexDirection: "row", alignItems: "center", borderColor: "#FFFFFF", width: "65%", justifyContent: 'space-between' }}>

                                                  <View>
                                                       <Image style={{ width: 23, height: 23, resizeMode: "center" }} source={require("../assets/dunesetting.png")} />
                                                  </View>

                                                  <View style={{ width: "75%", borderColor: "#FFFFFF" }}>
                                                       <Text style={{ fontSize: 18.5, fontWeight: "300", textAlign: "left", }}>DUNE for Android</Text>
                                                       <Text style={{ fontWeight: '100', color: "#FFFFFF" }}>1.2023.243</Text>

                                                  </View>

                                             </View>
                                             {/* -------------------xxxxxxxxxxxxxxxxx------------------------ */}


                                             {/* ----------------xxxxxxxxxx------------------------ */}
                                        </LinearGradient>
                                   </View>
                              </View>

                              <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20, marginBottom: 22 }}>
                                   <View style={{ flexDirection: 'row', width: "45%", justifyContent: 'space-between' }}>


                                        <TouchableOpacity>
                                             <View>
                                                  <Image style={{ width: 22, height: 22, resizeMode: "center" }} source={require("../assets/twitterdrawer.png")} />
                                             </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                             <View>
                                                  <Image style={{ width: 22, height: 22, resizeMode: "center" }} source={require("../assets/discorddrawer.png")} />
                                             </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                             <View>
                                                  <Image style={{ width: 20, height: 20, resizeMode: "center" }} source={require("../assets/instagramdrawer.png")} />
                                             </View>
                                        </TouchableOpacity>


                                   </View>

                                   <View style={{ marginTop: 16 }}>
                                        <Text style={{ color: "#9747FF", fontWeight: "400", textAlign: 'center' }}>Terms & Services  |  Privacy Policy</Text>
                                   </View>
                              </View>


                         </ScrollView>
                    </LinearGradient>
               </View>

               {/* </ScrollView>
      </SafeAreaView> */}
          </>
     );
};

export default Settingsdrawer;
