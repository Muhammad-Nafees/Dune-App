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
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';


const History = ({ }) => {

  const navigation = useNavigation();

  const { width, height } = Dimensions.get('screen');
  const [iscolorChange, setIsColorchange] = useState(false)

  return (
    <>


      <View>

        <LinearGradient
          colors={['#063083', '#000000']} start={{ x: 1, y: 0 }} end={{ x: 0.5, y: 0.1 }} locations={[0, 1]}
          style={{ height: "100%", width: '100%', }}>

          <View style={{ justifyContent: "center", alignItems: "center", marginTop: 18 }}>
            <View style={{ flexDirection: "row", width: "60%", justifyContent: "space-between", alignItems: "center", marginRight: 'auto', marginLeft: "5%" }}>

              <TouchableOpacity onPress={() => navigation.openDrawer()}>

                <Image
                  style={{ width: 25, height: 25, resizeMode: 'center' }}
                  source={require('../../assets/sidebarmenu.png')}
                />

              </TouchableOpacity>

              <View>
                <Text style={{ fontSize: 20, color: '#FFFFFF', width: 125, }}>Chat History</Text>
              </View>

            </View>
          </View>

          {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

          <View style={{ marginTop: 8 }}>
            <TouchableOpacity>
              <View style={{ width: "95%", justifyContent: "flex-end", alignItems: "flex-end" }}>
                <Text style={{ fontSize: 11, fontWeight: "400", textDecorationLine: "underline" }}>Clear History</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

          <SafeAreaView>
            <ScrollView>
              <View style={{ justifyContent: "center", alignItems: "center", marginTop: 12, }}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation?.navigate("Plusmain")}>
                  <View style={{ borderWidth: 1, width: "90%", borderRadius: 10, borderColor: "rgba(255, 255, 255, 0.50)", backgroundColor: "rgba(23, 23, 24, 0.50)", height: 125 }}>

                    <View style={{ flexDirection: "row", width: "35%", justifyContent: "space-between", marginTop: 10, marginLeft: "5%", }}>
                      <Text style={{ fontSize: 12 }}>09.20.23</Text>
                      <Text>-</Text>
                      <Text style={{ fontSize: 12 }}>8:59 PM</Text>
                    </View>

                    <View style={{ width: "90%", marginLeft: "5%", marginTop: 8 }}>
                      <Text style={{ color: "#FFF", fontWeight: "400", width: 300, lineHeight: 22 }}>“Can you find me the latest collection from Gucci available on Farfetch?”</Text>
                    </View>


                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                      <View style={{ borderWidth: 0.5, width: 32, height: 32, marginBottom: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, backgroundColor: '#FFFFFF', borderColor: '#FFFFFF', marginRight: '3%', }}>
                        <Image style={{ width: 16, height: 16, resizeMode: 'center', }} source={require('../../assets/arrowtoprightblack.png')} />
                      </View>
                    </View>

                  </View>
                </TouchableOpacity>
              </View>

              {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

              <View style={{ justifyContent: "center", alignItems: "center", marginTop: 12 }}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation?.navigate("Plusmain")}>
                  <View style={{ borderWidth: 1, width: "90%", borderRadius: 10, borderColor: "rgba(255, 255, 255, 0.50)", backgroundColor: "rgba(23, 23, 24, 0.50)", height: 125 }}>

                    <View style={{ flexDirection: "row", width: "35%", justifyContent: "space-between", marginTop: 10, marginLeft: "5%", }}>
                      <Text style={{ fontSize: 12 }}>09.20.23</Text>
                      <Text>-</Text>
                      <Text style={{ fontSize: 12 }}>8:55 PM</Text>
                    </View>

                    <View style={{ width: "90%", marginLeft: "5%", marginTop: 8 }}>
                      <Text style={{ color: "#FFF", fontWeight: "400", width: 300, lineHeight: 22 }}>“Can you find me the trending collection of sneakers for men from Gucci?”</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                      <View style={{ borderWidth: 0.5, width: 32, height: 32, marginBottom: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, backgroundColor: '#FFFFFF', borderColor: '#FFFFFF', marginRight: '3%', }}>
                        <Image style={{ width: 16, height: 16, resizeMode: 'center', }} source={require('../../assets/arrowtoprightblack.png')} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>


              {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
            </ScrollView>
          </SafeAreaView>
        </LinearGradient>
      </View>

    </>
  );
};

export default History;
