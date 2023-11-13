import React, { useEffect } from 'react';
import { View, Text, Dimensions, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import { BlurView } from "@react-native-community/blur"
// import {usenav} from 
import LinearGradient from "react-native-linear-gradient"
import { useNavigation } from '@react-navigation/native';




const Register = () => {

    const navigation = useNavigation()

    const { width, height } = Dimensions.get("screen")

    return (
        <>

            <View>
                <LinearGradient colors={["#063083", "#000000",]} style={{ height: "100%", width: "100%" }}>
                    <ScrollView>

                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                            {/* <Image style={{width:155,height:85,resizeMode:"center"}} source={require("../assets/dunescreenlogo.png")}/> */}
                            <Image style={{ width: 155, height: 85, resizeMode: "center" }} source={require("../../assets/dunescreenlogo.png")} />

                        </View>

                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                            <Text style={{ color: "#FFFFFF", fontSize: 40, fontWeight: "400" }}>Create account</Text>
                            <Text style={{ color: "#FFFFFF", fontWeight: "400", fontSize: 16 }}>Please enter required details</Text>
                        </View>

                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 18, }}>

                            <ImageBackground borderRadius={15} style={{ marginLeft: "4%", width: "95%", alignItems: "center", justifyContent: "center", height: 370, }} source={require("../../assets/blurbackground.png")}>

                                <View style={{ width: "90%", height: 330, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ width: "95%", marginRight: "5%" }}>

                                        <View style={{ borderWidth: 1, borderColor: "#FFFFFF", borderRadius: 10 }}>
                                            <TextInput placeholder='USERNAME' style={{ paddingLeft: 25 }} />
                                        </View>

                                        <View style={{ borderWidth: 1, borderColor: "#FFFFFF", marginTop: 12, borderRadius: 10 }}>
                                            <TextInput placeholder="youramail@example.com" style={{ paddingLeft: 25 }} />
                                        </View>

                                        <View style={{ borderWidth: 1, borderColor: "#FFFFFF", marginTop: 12, borderRadius: 10 }}>
                                            <TextInput placeholder="PASSWORD" style={{ paddingLeft: 25 }} />
                                        </View>



                                        <TouchableOpacity style={{ marginTop: 12 }}>
                                            <LinearGradient colors={["#063083", "#9747FF"]} style={{ justifyContent: "center", alignItems: "center", height: 50, backgroundColor: "#063083", borderRadius: 10 }}>
                                                <Text style={{ color: "#FFFFFF" }}>SIGN UP</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>

                                        {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

                                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>

                                            <View style={{ width: "40%", height: 0.5, backgroundColor: '#FFFFFF' }} />
                                            <View>
                                                <Text style={{ color: "#FFFFFF" }}>OR</Text>
                                            </View>

                                            <View style={{ width: "40%", height: 0.5, backgroundColor: '#FFFFFF' }} />
                                        </View>

                                        {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

                                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>

                                            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", height: 50, backgroundColor: "#FFFFFF", borderRadius: 10, flexDirection: "row", width: "100%" }} >

                                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", }}>

                                                    <View style={{ marginRight: "10%" }}>
                                                        <Image style={{ width: 30, height: 30, resizeMode: "center" }} source={require("../../assets/google_icon.png")} />
                                                    </View>

                                                    <View style={{ marginRight: "5%" }}>
                                                        <Text style={{ color: "#0D0D0D", }}>CONTINUE WITH GOOGLE</Text>
                                                    </View>

                                                </View>

                                            </TouchableOpacity>

                                        </View>

                                        {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}



                                    </View>
                                </View>
                            </ImageBackground>

                            {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

                        </View>

                        {/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  */}

                        <View>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 50, marginBottom: 26 }}>
                                <Text style={{ color: "#FFFFFF", fontWeight: "400" }}> ALREADY HAVE AN ACCOUNT?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                    <Text style={{ color: "#9747FF", fontWeight: "400" }}> SIGN IN</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>

                    {/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  */}

                </LinearGradient>
            </View>



        </>
    );
};

export default Register;


// import { View, Text } from 'react-native'
// import React from 'react'

// const Register = () => {
//   return (
//     <View>
//       <Text style={{color:"#000"}}>Register</Text>
//     </View>
//   )
// }

// export default Register
