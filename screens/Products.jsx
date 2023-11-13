// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   Dimensions,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
//   ImageBackground,
//   BackHandler,
//   FlatList
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native';
// import { BlurView } from '@react-native-community/blur';
// import { useIsFocused } from '@react-navigation/native';
// import InputField from '../component/InputField';
// import FilterModal from '../component/FilterModal';
// import ProductModal from '../component/productModal';




// const data = [
//   {
//     id: '1',
//     name: 'Gucci Brown Bag',
//     price: '$1,690',
//     product:"VIEW PRODUCT",
//     image: require("../assets/guccibag.png"),
//     yes:"YES",
//     no:"NO",
//   },
//   {
//     id: '2',
//     name: 'Gucci Brown Ring',
//     price: '$1,100',
//     yes:"YES",
//     no:"NO",
//     product:"VIEW PRODUCT",
//     image: require("../assets/gucciring.png"),
//   },
// ];



// const Products = () => {

//   const [imageChange, setImageChange] = useState(require("../assets/recordinginput.png"))
//   const [inputfieldvalue, setInputFieldValue] = useState(false)
//   const [inputvalue, setInputValue] = useState("")
//   const [isFilterModalVisible, setFilterModalVisible] = useState(false);
//   const [openmodal,setopenModal] =useState(false)



//   const navigation = useNavigation()


//   const inputchange = (e) => {

//     if (e.length > 0) {
//       setImageChange(require("../assets/sendchat.png"),
//         setInputValue(e)
//       );
//     } else {
//       setImageChange(require("../assets/recordinginput.png"),
//         setInputValue("")
//       );
//     }
//   }



//   const { width, height } = Dimensions.get('screen');
//   const [iscolorChange, setIsColorchange] = useState(false)

//   const handleFilter = () => {
//     setFilterModalVisible(true);
//   };



//   return (
//     <>

//           <LinearGradient
//             colors={["#000000", '#063083', '#9747FF',]} start={{ x: 0, y: 0 }} end={{ x: 2, y: 2 }} locations={[0.1, 0.5, 0.2]}
//             style={{ height: "100%", width: "100%", }}>
 
//             {/*----------------First View---------------------- */}

//             <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
//               <View style={{ flexDirection: "row", width: "90%", justifyContent: "space-between", alignItems: "center" }}>

//                 <TouchableOpacity onPress={() => navigation.goBack()}>
//                   <View style={{ borderWidth: 0.2, width: 32, height: 32, justifyContent: "center", alignItems: "center", borderColor: "#FFFFFF", borderRadius: 4 }}>
//                     <Image style={{ width: 15, height: 15, resizeMode: "center" }} source={require("../assets/backarrow.png")} />
//                   </View>
//                 </TouchableOpacity>

//                 <View>
//                   <Text style={{ color: "#FFFFFF", fontWeight: "400", fontSize: 20 }}>New Chat</Text>
//                 </View>

//                 <TouchableOpacity onPress={handleFilter}>
//                   <View style={{ borderWidth: 0.2, width: 32, height: 32, justifyContent: "center", alignItems: "center", borderColor: "#FFFFFF", borderRadius: 4 }}>
//                     <Image style={{ width: 20, height: 20, resizeMode: "center" }} source={require("../assets/timeline.png")} />
//                   </View>
//                 </TouchableOpacity>

//                 {isFilterModalVisible && <FilterModal isFilterModalVisible={isFilterModalVisible} setFilterModalVisible={setFilterModalVisible} />}



//               </View>
//             </View>



//             {/*----------------second View---------------------- */}
// <ScrollView>

//             <View style={{ marginTop: 15, justifyContent: "center", alignItems: "center", }}>

//               <View style={{ backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", width: "90%", borderRadius: 10, height: 106 }}>

//                 <View style={{ flexDirection: 'row', width: '90%', justifyContent: "space-between", marginTop: 10 }}>

//                   <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "27%", }}>
//                     <Image style={{ width: 40, height: 40, resizeMode: 'center' }} source={require("../assets/productman.png")} />
//                     <Text style={{ color: "#000000", fontSize: 18, fontWeight: '700' }}>You</Text>
//                   </View>

//                   <TouchableOpacity>
//                     <View>
//                       <Image style={{ width: 40, height: 40, resizeMode: 'center' }} source={require("../assets/PencilSimpleLine.png")} />
//                     </View>
//                   </TouchableOpacity>

//                 </View>

//                 {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

//                 <View style={{ width: "80%", marginTop: 12 }}>
//                   <Text style={{ color: "#000000" }}>{`“${inputvalue}”`}</Text>
//                 </View>

//               </View>
//             </View>

//             {/*----------------Third View---------------------- */}

//             <View style={{ marginTop: 10, justifyContent: "center", alignItems: "center" }}>

//               <LinearGradient colors={["rgba(255,255,255,0.1)", "rgba(6,48, 131,0.3)",]} start={{ x: 0, y: 0 }} end={{ x: 0.6, y: 0.6 }} locations={[0.2, 1]} style={{ justifyContent: "center", alignItems: "center", width: "90%", borderRadius: 10, paddingBottom: 10 }}>

//                 <View style={{ flexDirection: "row", width: "90%", justifyContent: "space-between", marginTop: 12, alignItems: "center" }}>
//                   <View style={{ flexDirection: "row", width: '32%', justifyContent: 'space-between', alignItems: "center", marginRight: "auto" }}>
//                     <View style={{ backgroundColor: "#FFF", width: 35, height: 35, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
//                       <Image style={{ width: 25, height: 25, resizeMode: "center" }} source={require("../assets/dunelogo2.png")} />
//                     </View>
//                     <Text style={{ fontWeight: "700", fontSize: 18, color: "#FFFFFF" }}>DUNE</Text>
//                   </View>

// <TouchableOpacity>
//                   <View>
//                     <Image style={{ width: 25, height: 25, resizeMode: "center" }} source={require("../assets/reload.png")} />
//                   </View>
// </TouchableOpacity>

//                 </View>

//                 <View style={{ width: "90%", marginTop: 10 }}>
//                   <Text style={{ fontWeight: "400", lineHeight: 20, fontSize: 15, color: "#FFF",width:300, }}>Here are some of the latest collections from Gucci available on Farfetch for woman:</Text>
//                 </View>

//                 {/*----------------Third View---------------------- */}

//                 <View>
//                   <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>

                

//                     <View>

//       <FlatList
//         data={data}
//         horizontal
//         showsHorizontalScrollIndicator={false}  
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={{ backgroundColor: "rgba(255,255,255,0.1)", width: 220, justifyContent: "center", alignItems: "center", borderRadius: 10, margin:5,}}>
//             <Image style={{ width: 220, height: 160, resizeMode: "center" ,marginTop:10}} source={item.image} />
//             <View style={{ flexDirection: "row", width: "90%", justifyContent: "space-between", marginTop: 10 }}>


//           <TouchableOpacity style={{ backgroundColor: "#9747FF", width: 90, height: 37, justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
//             <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: '500' }}>{item.yes}</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={{ backgroundColor: "#FFFFFF", width: 90, height: 37, justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
//             <Text style={{ color: "#000000", fontSize: 16, fontWeight: '400' }}>{item.no}</Text>
//           </TouchableOpacity>
//         </View>


//             <Text style={{ color: "#FFFFFF", textAlign: "center" ,marginTop:4,fontSize:16,lineHeight:26}}>{item.name}</Text>
//             <Text style={{ color: "#9747FF", textAlign: "center", fontWeight: "500", fontSize: 16, }}>{item.price}</Text>
//             <Text style={{ color: "#FFFFFF", textAlign: "center", fontSize: 12, lineHeight: 16, }}>Gucci messenger bag with Interlock...</Text>
 
            
//         <TouchableOpacity style={{ width: "90%", backgroundColor: "rgba(151,71,255,1)", justifyContent: "center", alignItems: "center", borderRadius: 5, height: 35, marginTop: 8,marginBottom:8 }}>
//           <View>
//             <Text style={{ color: "#FFF",fontSize:16 }}>{item.product}</Text>
//           </View>
//         </TouchableOpacity>
       

       
       
       


// {/* 
//             <View style={{flexDirection:"row",width:"90%",justifyContent:"space-between",marginTop:10}}>

//                 <TouchableOpacity style={{backgroundColor:"orange",width:90,height:37,justifyContent:"center",alignItems:"center",borderRadius:5}}>
//                     <Text style={{color:"#FFFFFF",fontSize:15,fontWeight:'500'}}>YES</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={{backgroundColor:"#9747FF",width:90,height:37,justifyContent:"center",alignItems:"center",borderRadius:5}}>
//                     <Text style={{color:"#FFFFFF",fontSize:15,fontWeight:'500'}}>NO</Text>
//                 </TouchableOpacity>


//             </View>               */}
            
//           </View>
//         )}
//       />
//     </View>



//                   </View>
//                 </View>

//                 {/*----------------Third View---------------------- */}

//                 <View style={{ width: '95%',  }}>
//                   <Text style={{ color: "#FFF", fontSize: 15, fontWeight: "400" }}>I hope this helps! Let me know if you need more.</Text>
//                 </View>

//               </LinearGradient>

//             </View>

// </ScrollView>

//             {/*----------------Fourth View---------------------- */}

//             <View style={{ justifyContent: "center", alignItems: "center",marginBottom:14 }}>
//               <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, width: "90%", }}>

//                 {/* <View style={{borderTopRightRadius:10,borderRightWidth:1, borderTopLeftRadius:10,borderLeftWidth:1,borderLeftColor:"#FFFFFF", borderRadius:10, width:"80%", flexDirection:"row",justifyContent:"space-around",alignItems:"center",height:55,}}> */}

//                 <View style={{ borderWidth: 0.5, borderColor: "#FFFFFF", borderRadius: 10, width: "78%", flexDirection: "row", justifyContent: "space-around", alignItems: "center", height: 50, }}>

//                   <View style={{}}>
//                     <TextInput onChangeText={(e) => inputchange(e)} placeholder="I’m in a fancy mood, surprise me!" style={{ width: 240, paddingLeft: 12 }} />
//                   </View>

//                   <TouchableOpacity onPress={()=>setopenModal(true)}>
//                     <View style={{}}>
//                       <Image style={{ width: 20, height: 20, resizeMode: "center", marginRight: 10 }} source={require("../assets/plusinput.png")} />
//                     </View>
//                   </TouchableOpacity>

//                 </View>



//                 <View style={{ justifyContent: "center", alignItems: "center" }}>
//                   <TouchableOpacity>
//                     <LinearGradient colors={["#063083", "#9747FF"]} style={{ width: 52, height: 52, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
//                       <Image style={{ width: 25, height: 25, resizeMode: 'center' }} source={imageChange} />
//                     </LinearGradient>
//                   </TouchableOpacity>
//                 </View>

//               </View>

//               <ProductModal openmodal={openmodal} setopenModal={setopenModal}/>

//             </View>
//             {/*----------------Fourth View---------------------- */}
 

//           </LinearGradient>
 

//     </>
//   );
// };

// export default Products;

// // import { View, Text } from 'react-native'
// // import React from 'react'

// // const Register = () => {
// //   return (
// //     <View>
// //       <Text style={{color:"#000"}}>Register</Text>
// //     </View>
// //   )
// // }

// // export default Register
