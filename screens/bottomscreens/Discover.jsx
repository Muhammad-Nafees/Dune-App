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
import ImageBackgroundMap from '../../component/ImageBackgroundMap';
import CustomDrawerSlider from '../CustomDrawerSlider';


const Discover = () => {


  const { width, height } = Dimensions.get('screen');
  const [isopenModalDrawerTrue, setIsopenModalDrawerTrue] = useState(false)

  const drawermodalhandle = () => {
    // setIsopenModalDrawerTrue(true)
    navigation.openDrawer()

  }



  const data = [
    {
      id: 1,
      width: width / 2.2,
      height: 235,
      height2: 135,
      width2: 155,
      justifyContent: 'center',
      alignItems: 'center',
      image: require('../../assets/explorerick.png'),
      explore: "Explore Rick Owens",
      discover: "“Discover the avant-garde world of Rick Owens at Patron of the New.”",
      arrowimage: require('../../assets/toprightarrow.png'),
      marginTop: 90,
      imagelady: require('../../assets/maxlady.png'),
      backgroundColortick: "#FFFFFF",
      backgroundtick: require("../../assets/arrowtoprightblack.png")
    },
    {
      id: 2,
      width: width / 2.2,
      height: 235,
      justifyContent: 'center',
      alignItems: 'center',
      image: require('../../assets/maxpent.png'),
      explore: "Show me Gucci at Flannels",
      discover: "“Indulge in the elegance of Gucci at Flannels. Start your luxury shopping spree.”",
      arrowimage: require('../../assets/toprightarrow.png'),
      height2: 165,
      width2: 155,
      marginTop: 55,
      imagelady: require('../../assets/guccipent.png'),
      backgroundColortick: "#FFFFFF",
      backgroundtick: require("../../assets/arrowtoprightblack.png")
    },
    {
      id: 3,
      width: width / 2.2,
      height: 235,
      height2: 145,
      width2: 155,
      justifyContent: 'center',
      alignItems: 'center',
      image: require('../../assets/balenciaga.jpg'),
      explore: "Show me Balenciaga",
      discover: "“Step into luxury with the latest Balenciaga collection at The Webster.”",
      arrowimage: require('../../assets/toprightarrow.png'),
      marginTop: 80,
      imagelady: require('../../assets/maxman.jpg'),
      backgroundColortick: "#FFFFFF",
      backgroundtick: require("../../assets/arrowtoprightblack.png")
    },
    {
      id: 4,
      width: width / 2.2,
      height: 235,
      height2: 165,
      width2: 155,
      justifyContent: 'center',
      alignItems: 'center',
      image: require('../../assets/maxfieldshoes.png'),
      explore: "Find Off-White at Maxfield",
      discover: "“Experience the exclusive Off-White™ releases at Maxfield to start your journey.”",
      arrowimage: require('../../assets/toprightarrow.png'),
      marginTop: 55,
      imagelady: require('../../assets/maxshoes.png'),
      backgroundColortick: "#FFFFFF",
      backgroundtick: require("../../assets/arrowtoprightblack.png")
    },
    {
      id: 5,
      width: width / 2.2,
      height: 235,
      height2: 165,
      width2: 155,
      justifyContent: 'center',
      alignItems: 'center',
      image: require('../../assets/webstersandels.jpg'),
      explore: "Louboutin collection at The Webster",
      discover: "Step up your footwear game with Christian Louboutin at The Webster.”",
      arrowimage: require('../../assets/toprightarrow.png'),
      marginTop: 55,
      imagelady: require("../../assets/maxsandle.jpg"),
      backgroundColortick: "#FFFFFF",
      backgroundtick: require("../../assets/arrowtoprightblack.png")
    },
    {
      id: 6,
      width: width / 2.2,
      height: 235,
      height2: 170,
      width2: 155,
      justifyContent: 'center',
      alignItems: 'center',
      image: require('../../assets/maxfieldbags.jpg'),
      explore: "LV accessories at Maxfield",
      discover: "Looking for a statement piece? Find the finest Louis Vuitton accessories at Maxfield.”",
      arrowimage: require('../../assets/toprightarrow.png'),
      marginTop: 50,
      imagelady: require("../../assets/maxbag.jpg"),
      backgroundColortick: "#FFFFFF",
      backgroundtick: require("../../assets/arrowtoprightblack.png")
    }
  ]


  const navigation = useNavigation();

  return (
    <>
      <View>

        <LinearGradient
          colors={['#063083', '#000000']} start={{ x: 1, y: 0 }} end={{ x: 0.5, y: 0.3 }} locations={[0, 1]}
          style={{ height: "100%", width: '100%' }}>

          <View style={{ flexDirection: 'row', width: '65%', justifyContent: 'space-between', marginTop: 18, marginLeft: "5%", paddingBottom: 14, }}>
            <TouchableOpacity onPress={drawermodalhandle}>
              <View>
                <Image
                  style={{ width: 25, height: 25, resizeMode: 'center' }}
                  source={require('../../assets/sidebarmenu.png')}
                />
              </View>
            </TouchableOpacity>

            <View>
              <Text style={{ fontSize: 20, color: '#FFFFFF' }}>
                Dune Prompts
              </Text>
            </View>
          </View>

          {/* <SafeAreaView> */}

          {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

          <ScrollView>
            <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', }}>
              <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                {
                  data?.map((item, index) => {
                    return (
                      <ImageBackgroundMap item={item} index={index} />
                    )
                  })
                }

              </View>
            </View>
          </ScrollView>

          {/* </SafeAreaView> */}
          {/* {isopenModalDrawerTrue&&<CustomDrawerSlider/>} */}
        </LinearGradient>
      </View>

    </>
  );
};

export default Discover;

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




{/* <View style={{ justifyContent: "center", alignItems: "center",marginTop:300}}>
<View style={{  justifyContent: "flex-end",alignItems:"center",}}>

  <View style={{ borderRadius: 10, backgroundColor: "rgba(0,0,0,0.2)",width:300, }}>
     <View style={{ justifyContent: "center", alignItems: "center", marginTop:12,marginBottom:18 }}>

      <View style={{ width: "90%", borderWidth: 0.3, borderColor: "#FFF",  borderRadius: 5, justifyContent: "center", alignItems: "center", }}>
        <Text style={{ color: "#FFFFFF",marginBottom:12,marginTop:12, width:250}}>Hi, I’m DUNE, your personal shopping assistant  </Text>
      </View>

     <View style={{ width: "90%", borderWidth: 0.3, borderColor: "#FFF",  borderRadius: 5,  marginTop:10, justifyContent: "center", alignItems: "center",  }}>
          <Text style={{ color: "#FFFFFF",marginBottom:12,marginTop:12, width:250}}>Ask me anything and I'll strive to delight you with exquisite luxury pieces! 👗👔🌟</Text>
      </View>

      <View style={{ width: "90%", borderWidth: 0.3, borderColor: "#FFF",  borderRadius: 5,  marginTop:10, justifyContent: "center", alignItems: "center",  }}>
          <Text style={{ color: "#9747FF",marginBottom:12,marginTop:12, width:250}}>Like: Can you find me the latest collection from Gucci available on Farfetch?</Text>
      </View>

    </View>



    {/* ------------------------XXXXXXXXXXXXXXXXXXX------------------------------- */}

{/* ------------------------XXXXXXXXXXXXXXXXXXX------------------------------- */ }

//   </View>
// </View>
// </View> */}
