import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import ProductModal from './productModal'



const InputField = () => {

  const [imageChange, setImageChange] = useState(require("../assets/recordinginput.png"))
  const [openmodal, setopenModal] = useState(false)


  const handleadd = () => {
    setopenModal(true)
  }



  const navigation = useNavigation()

  const inputchange = (e) => {

    if (e.length > 0) {
      setImageChange(require("../assets/sendchat.png"),

      );

    } else {
      setImageChange(require("../assets/recordinginput.png")
      );
    }
  }

  return (

    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 40, marginBottom: 12 }}>

      <View style={{ flexDirection: 'row', width: "90%", justifyContent: "space-between" }}>
        <View style={{ flexDirection: 'row', borderWidth: 0.5, width: "80%", justifyContent: 'space-between', alignItems: "center", borderColor: "#FFFFFF", borderRadius: 10 }}>

          <View style={{}}>
            <TextInput onChangeText={(e) => inputchange(e)} placeholder="I’m in a fancy mood, surprise me!" style={{ paddingLeft: 12 }} />
          </View>

          <TouchableOpacity onPress={handleadd}>
            <View style={{}}>
              <Image style={{ width: 20, height: 20, resizeMode: "center", marginRight: 10 }} source={require("../assets/plusinput.png")} />
            </View>
          </TouchableOpacity>
        </View>

        <ProductModal openmodal={openmodal} setopenModal={setopenModal} />

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity>
            <LinearGradient colors={["#063083", "#9747FF"]} style={{ width: 52, height: 52, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
              <Image style={{ width: 25, height: 25, resizeMode: 'center' }} source={imageChange} />
            </LinearGradient>
          </TouchableOpacity>
        </View>

      </View>
    </View>

  )
}

export default InputField



// <View  style={{ justifyContent: "center", alignItems: "center",  }}>
//   <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, width: "92%", }}>

{/* <View style={{borderTopRightRadius:10,borderRightWidth:1, borderTopLeftRadius:10,borderLeftWidth:1,borderLeftColor:"#FFFFFF", borderRadius:10, width:"80%", flexDirection:"row",justifyContent:"space-around",alignItems:"center",height:55,}}> */ }
{/* 
        <View style={{ borderWidth: 0.5, borderColor: "#FFFFFF", borderRadius: 10, width: "80%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 55, }}>
        
        <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:"center",width:"100%"}}>

          <View style={{ }}>
            <TextInput onChangeText={(e) => inputchange(e)} placeholder="I’m in a fancy mood, surprise me!" style={{ paddingLeft: 12 }} />
          </View>

          <TouchableOpacity onPress={handleadd}>
            <View style={{}}>
              <Image style={{ width: 20, height: 20, resizeMode: "center", marginRight: 10 }} source={require("../assets/plusinput.png")} />
            </View>
          </TouchableOpacity>

        </View>
        
        </View>



        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity>
            <LinearGradient colors={["#063083", "#9747FF"]} style={{ width: 52, height: 52, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
              <Image style={{ width: 25, height: 25, resizeMode: 'center' }} source={imageChange} />
            </LinearGradient>
          </TouchableOpacity>
        </View> */}



//   </View>

{/* <ProductModal openmodal={openmodal} setopenModal={setopenModal}/> */ }

// </View>