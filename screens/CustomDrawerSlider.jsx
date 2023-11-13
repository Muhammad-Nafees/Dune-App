import React, { useState } from 'react'
import { Modal, Text, View, Image, TouchableOpacity } from 'react-native'
import { BlurView } from '@react-native-community/blur'
import { useNavigation } from '@react-navigation/native'



const CustomDrawerSlider = ({ navigation }) => {

    const [openmodalDrawer, setopenModal] = useState(false)


    return (
        <>



            <View style={{ height: "100%", width: '100%', backgroundColor: "rgba(0,0,0,0.90)" }}>
                <View style={{ marginTop: 45 }}>

                    <View style={{ width: "95%", marginLeft: "auto", }}>
                        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
                            <Image style={{ width: 20, height: 20, resizeMode: "center" }} source={require("../assets/crossdrawer.png")} />
                        </TouchableOpacity>
                    </View>

                    {/* ---------FirstView-------------- */}

                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                        <View style={{ width: "90%", borderWidth: 0.5, height: 80, borderColor: "rgba(255, 255, 255, 0.40)", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>

                            <View style={{ width: "90%" }}>

                                <View style={{ flexDirection: "row", width: "82%", justifyContent: "space-between", }}>

                                    <View style={{}}>
                                        <Image style={{ width: 60, height: 60, resizeMode: "center" }} source={require("../assets/productman.png")} />
                                    </View>

                                    <View style={{ justifyContent: "center", }}>
                                        <Text style={{ fontWeight: "300", fontSize: 20, color: "#FFFFFF" }}>Muhammad Nafees</Text>
                                        <Text style={{ fontSize: 15, color: "#FFFFFF", fontWeight: "300" }}>youremail@example.com</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>

                    {/* ---------FirstViewClose-------------- */}


                    {/* ---------SecondViewStart-------------- */}
                    <TouchableOpacity style={{}}>

                        <View style={{ width: "90%", marginLeft: 'auto', marginTop: 20, height: 40, }}>
                            <View style={{}}>
                                <View style={{ flexDirection: "row", width: "52%", justifyContent: "space-between" }}>
                                    <Image style={{ width: 22, height: 22, resizeMode: "center" }} source={require("../assets/peopledrawer.png")} />
                                    <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "300", textAlign: 'left', width: "70%" }}>Invite Friends</Text>
                                </View>
                                {/* <View>
                                    <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "300" }}>Invite Friends</Text>
                                </View> */}

                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Settingsdrawer")} style={{}}>

                        <View style={{ width: "90%", marginLeft: 'auto', marginTop: 12, height: 40, }}>
                            <View style={{}}>
                                <View style={{ flexDirection: "row", width: "52%", justifyContent: "space-between" }}>
                                    <Image style={{ width: 22, height: 22, resizeMode: "center" }} source={require("../assets/settingdrawer.png")} />
                                    <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "300", textAlign: 'left', width: "70%" }}>Settings</Text>
                                </View>
                                {/* <View>
                                    <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "300" }}>Invite Friends</Text>
                                </View> */}

                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}}>

                        <View style={{ width: "90%", marginLeft: 'auto', marginTop: 12, height: 40 }}>
                            <View style={{}}>
                                <View style={{ flexDirection: "row", width: "52%", justifyContent: "space-between" }}>
                                    <Image style={{ width: 22, height: 22, resizeMode: "center" }} source={require("../assets/musicdrawer.png")} />
                                    <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "300", textAlign: 'left', width: "70%" }}>Help Center</Text>

                                </View>
                                {/* <View>
                                    <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "300" }}>Invite Friends</Text>
                                </View> */}

                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}}>

                        <View style={{ width: "90%", marginLeft: 'auto', marginTop: 12, height: 40 }}>
                            <View style={{}}>
                                <View style={{ flexDirection: "row", width: "52%", justifyContent: "space-between" }}>
                                    <Image style={{ width: 22, height: 22, resizeMode: "center" }} source={require("../assets/signout.png")} />
                                    <Text style={{ color: "#FF5353", fontSize: 18, fontWeight: "300", textAlign: 'left', width: "70%", }}>Sign Out</Text>
                                </View>
                                {/* <View>
                                    <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "300" }}>Invite Friends</Text>
                                </View> */}

                            </View>

                        </View>
                    </TouchableOpacity>

                    {/* -------------------------XXXXXXXXXXXXXXXXXXX----------------------------- */}

                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 230 }}>
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

                        <View style={{ marginTop: 22 }}>
                            <Text style={{ color: "#9747FF", fontWeight: "400", textAlign: 'center' }}>Terms & Services  |  Privacy Policy</Text>
                        </View>
                    </View>

                    {/* -------------------------XXXXXXXXXXXXXXXXXXX----------------------------- */}

                </View>
            </View>

        </>
    )
}

export default CustomDrawerSlider;
