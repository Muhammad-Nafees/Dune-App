import { View, Text, ImageBackground, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'


const ImageBackgroundMap = ({ item, index, }) => {

  const navigation = useNavigation()
  const [iscolorChange, setIsColorchange] = useState(false)

  const togglecolour = () => {

    setIsColorchange(true)

    setTimeout(() => {
      navigation.navigate("Plusmain", {
        name: "PlusmainScreen",
        params: { iscolorChange, setIsColorchange },
      });
    }, 500);
  }



  return (

    <View style={{ paddingBottom: 12, justifyContent: "center", alignItems: "center", marginLeft: "3%", }}>
      <ImageBackground borderRadius={10} style={{ marginHorizontal: 2, width: item.width, marginTop: 20 }} source={item?.imagelady}>
        <View style={{ justifyContent: item.justifyContent, alignItems: item.alignItems, height: item.height, }}>

          <TouchableOpacity activeOpacity={0.8} onLongPress={togglecolour} onPress={togglecolour}>
            <LinearGradient colors={!iscolorChange ? ["rgba(27,27,27,0.8)", "rgba(0,0,0,0.8)"] : ["rgba(206, 71, 255, 0.65) -0.81%", "rgba(0,0,0,1)",]} start={{ x: 0, y: 0 }} end={{ x: 3, y: 2 }} locations={[0.1, 0.4,]} style={{ justifyContent: 'flex-end', height: item.height2, width: item.width2, marginTop: item.marginTop, borderRadius: 10, }}>
              <View style={{ width: '97%', marginLeft: 'auto', marginBottom: 8, }}>
                <Text style={{ fontSize: 15, fontWeight: '500', lineHeight: 20, color: '#FFFFFF', }}>
                  {item.explore}
                </Text>
              </View>

              <View style={{ width: '97%', marginLeft: 'auto' }}>
                <Text style={{ fontSize: 13, fontWeight: '300', lineHeight: 18, width: 150, color: "#FFFFFF" }}>{item?.discover}</Text>
              </View>

              <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                <View style={{ borderWidth: 0.5, width: 34, height: 34, justifyContent: 'center', alignItems: 'center', borderRadius: 5, backgroundColor: !iscolorChange ? '#131313' : item?.backgroundColortick, borderColor: '#FFFFFF', marginBottom: "4%", marginRight: '4%', }}>
                  <Image style={{ width: 17, height: 17, resizeMode: 'center', }} source={!iscolorChange ? item?.arrowimage : item?.backgroundtick} />
                </View>
              </View>

            </LinearGradient>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </View>


  )
}


export default ImageBackgroundMap
