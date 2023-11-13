import {
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
   Image,
   Modal,
   Dimensions,
   Pressable,
   TextInput,
   Alert,
   BackHandler
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { BlurView } from '@react-native-community/blur';
import Slider from 'rn-range-slider';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
   useSharedValue,
   useAnimatedStyle,
   useAnimatedGestureHandler,
} from 'react-native-reanimated';
import DropDownPicker from 'react-native-dropdown-picker';
import Rail from './Rail';
import RailSelected from './RailSelected';
import Thumb from './Thumb';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const FilterModal = ({ isFilterModalVisible, setFilterModalVisible }) => {
   const SCEEENHEIGHT = Dimensions.get('screen').height;
   const SCEEENWIDTH = Dimensions.get('screen').width;

   const { width, height } = Dimensions.get('screen');
   const [low, setLow] = useState(4);
   const [high, setHigh] = useState(100);
   const renderThumb = useCallback(() => <Thumb />, []);
   const renderRail = useCallback(() => <Rail />, []);
   const renderRailSelected = useCallback(() => <RailSelected />, []);



   const [open1, setOpen1] = useState(false);
   const [value1, setValue1] = useState(null);
   const [items1, setItems1] = useState([
      { label: 'Example0', value: 'Example0' },
      { label: 'Example1', value: 'Example1' }
   ]);

   const [open2, setOpen2] = useState(false);
   const [value2, setValue2] = useState(null);
   const [items2, setItems2] = useState([
      { label: 'Option0', value: 'Option0' },
      { label: 'Option1', value: 'Option1' }
   ]);

   const [open3, setOpen3] = useState(false);
   const [value3, setValue3] = useState(null);
   const [items3, setItems3] = useState([
      { label: 'Location0', value: 'Location0' },
      { label: 'Location1', value: 'Location1' }
   ]);


   const dropdowndata = [
      { label: 'Example0', value: 'Example0' },
      { label: 'Example1', value: 'Example1' }
   ]

   const handleValueChange = useCallback(
      (newLow, newHigh) => {

         setLow(newLow);
         setHigh(newHigh);
      },
      [setLow, setHigh],
   );

   console.log("Low", low)
   console.log("High", high)

   const navigation = useNavigation()

   return (

      <Modal onRequestClose={() => setFilterModalVisible(false)} transparent animationType="fade" visible={isFilterModalVisible}>
         <BlurView style={{ flex: 1 }} blurType="chromeMaterial">
            {/* ----------------------xxxxxxxxxxxxxxxx---------------------- */}

            <Pressable
               onPress={() => setFilterModalVisible(false)}
               style={{
                  width: "100%",
                  height: height / 1.3,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
               }}>

               <Pressable
                  style={{
                     width: '90%',
                     backgroundColor: '#FFFFFF',
                     borderRadius: 20,
                     paddingBottom: 16,
                  }}>

                  <View
                     style={{ justifyContent: 'center', alignItems: 'center' }}>
                     <View
                        style={{ width: '90%', backgroundColor: '#FFFFFF', borderRadius: 10, }}>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                           <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-between', marginTop: 10, alignItems: 'center', }}>

                              <TouchableOpacity onPress={() => setFilterModalVisible(false)} style={{ width: 20, height: 20, justifyContent: "center", alignItems: "center", }}>
                                 <View>
                                    <Image
                                       style={{ width: 14, height: 14, resizeMode: 'center' }}
                                       source={require('../assets/backarrowmodal.png')}
                                    />
                                 </View>
                              </TouchableOpacity>

                              <View>
                                 <Text style={{ color: '#000000', fontSize: 20, fontWeight: '500', }}> Filter </Text>
                              </View>

                              <View>
                                 <Text style={{ color: '#9747FF', fontSize: 15, fontWeight: '400', textDecorationLine: 'underline', }}>Reset</Text>
                              </View>
                           </View>
                        </View>
                     </View>
                  </View>

                  <View style={{ marginTop: 12 }}>
                     <View
                        style={{ width: '100%', height: 1, backgroundColor: 'rgba(234,234,234,1)', }}
                     />
                  </View>

                  {/* ----------------------xxxxxxxxxxxxxxxx---------------------- */}

                  <View style={{ marginLeft: 'auto', width: '95%', marginTop: 8 }}>
                     <Text style={{ color: '#000', fontSize: 15, fontWeight: '700' }}> Category </Text>
                  </View>

                  {/* ----------------------xxxxxxxxxxxxxxxx---------------------- */}

                  <View style={{ justifyContent: 'center', alignItems: 'center', zIndex: 999999 }}>
                     <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignItems: 'center', marginTop: 12 }}>
                           <DropDownPicker
                              placeholderStyle={{ color: "#000" }}
                              placeholder="Accessories"
                              open={open1}
                              value={value1}
                              items={items1}
                              setOpen={setOpen1}
                              setValue={setValue1}
                              setItems={setItems1}
                              childrenContainerStyle={{
                                 height: 1030,
                              }} style={{
                                 backgroundColor: '#fafafa',
                              }}
                              dropDownStyle={{ backgroundColor: '#fafafa', height: 100 }}
                           //   dropDownContainerStyle={{ zIndex: 999999 }}
                           />

                        </View>

                     </View>
                  </View>

                  {/* ----------------------xxxxxxxxxxxxxxxx---------------------- */}

                  <View style={{ marginLeft: 'auto', width: '95%', marginTop: 8 }}>
                     <Text style={{ color: '#000', fontSize: 15, fontWeight: '700' }}>
                        Brand
                     </Text>
                  </View>

                  <View style={{ justifyContent: 'center', alignItems: 'center', zIndex: 99999 }}>
                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignItems: 'center', marginTop: 12 }}>
                        <DropDownPicker
                           dropDownContainerStyle={{ backgroundColor: "#FFFFFF", zIndex: 999999, height: 90 }}
                           placeholderStyle={{ color: "#000" }}
                           placeholder="GUCCI"
                           open={open2}
                           value={value2}
                           items={items2}
                           setOpen={setOpen2}
                           setValue={setValue2}
                           setItems={setItems2}
                        />
                     </View>
                  </View>
                  {/* ----------------------xxxxxxxxxxxxxxxx---------------------- */}
                  <View style={{ marginLeft: 'auto', width: '95%', marginTop: 8 }}>
                     <Text style={{ color: '#000', fontSize: 15, fontWeight: '700' }}>
                        Location
                     </Text>
                  </View>

                  <View style={{ justifyContent: 'center', alignItems: 'center', zIndex: 99999 }}>
                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignItems: 'center', marginTop: 12 }}>
                        <DropDownPicker
                           dropDownContainerStyle={{
                              backgroundColor: "#FFFFFF",
                              height: 90
                           }}

                           placeholderStyle={{ color: "#000" }}
                           placeholder="Current Location"
                           open={open3}
                           value={value3}
                           items={items3}
                           setOpen={setOpen3}
                           setValue={setValue3}
                           setItems={setItems3}
                           autoScroll
                        // style={{backgroundColor:'orange'}}
                        />


                     </View>

                  </View>

                  {/* ----------------------RangeSldierMade---------------------- */}

                  <View style={{ marginLeft: 'auto', width: '95%', marginTop: 12 }}>
                     <Text style={{ color: '#000', fontWeight: '700' }}>Price Range</Text>
                  </View>

                  <View style={{}}>
                     <View
                        style={{ justifyContent: 'center', alignItems: 'center', marginTop: 12, }}>
                        <View
                           style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignItems: 'center', }}>
                           <View style={{ flexDirection: 'row' }}>
                              <Text style={{ color: '#898989', fontWeight: '500' }}> Min: </Text>
                              <Text
                                 style={{
                                    color: '#063083',
                                    fontWeight: '500',
                                    fontSize: 15,
                                 }}>
                                 {`$${low}`}
                              </Text>
                           </View>

                           <View style={{ flexDirection: 'row' }}>
                              <Text style={{ color: '#898989', fontWeight: '500' }}>
                                 Max:
                              </Text>
                              <Text
                                 style={{
                                    color: '#063083',
                                    fontWeight: '500',
                                    fontSize: 15,
                                 }}>
                                 {' '}
                                 {`$${high}`}
                              </Text>
                           </View>
                        </View>
                     </View>
                  </View>



                  <View style={{ justifyContent: "center", alignItems: "center" }}>
                     <Slider
                        style={{ ...styles.slider, width: '90%' }}
                        min={500}
                        max={5000}
                        step={1}
                        floatingLabel
                        renderThumb={renderThumb}
                        renderRail={renderRail}
                        renderRailSelected={renderRailSelected}
                        onValueChanged={handleValueChange}
                     />
                  </View>


                  <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", marginTop: 16 }}>
                     <LinearGradient colors={['#063083', '#9747FF']} start={{ x: 0, y: 0 }} end={{ x: 2, y: 2 }} locations={[0.1, 0.3,]}
                        style={{ width: "90%", backgroundColor: "orange", justifyContent: "center", alignItems: "center", height: 52, borderRadius: 10 }}>
                        <Text style={{ color: "#FFF", fontWeight: "500" }}>SHOW RESULTS</Text>
                     </LinearGradient>
                  </TouchableOpacity>

                  {/* ----------------------xxxxxxxxxxxxxxxx---------------------- */}
                  {/* <Slider/> */}

               </Pressable>

            </Pressable>



            {/* <View>
         <View style={styles.header}>
           <Text style={styles.title}>title </Text>
         </View>
 
         <View style={styles.rangContainer}>
           <View style={styles.labelsContainer}>
             <Text style={styles.label}>Min</Text>
             <Text style={styles.label}>Max</Text>
           </View>
           <View style={styles.track} />
           <Animated.View style={Styleline} />
 
           <PanGestureHandler onGestureEvent={gestureHandler}>
             <Animated.View style={[styles.knob, animatedStyle]} />
           </PanGestureHandler>
         </View>
       </View> */}


            {/* ----------------------xxxxxxxxxxxxxxxx---------------------- */}
         </BlurView>
      </Modal>
   );
};

export default FilterModal;

const styles = StyleSheet.create({
   animatedview: {
      width: 20,
      height: 20,
      backgroundColor: '#9747FF',
      position: 'absolute',
      left: -10,
      borderRadius: 10,
   },
   header: {
      backgroundColor: '#eee',
      borderTopWidth: 1,
      borderColor: '#cccdb2',
      borderBottomWidth: 1,
      paddingHorizontal: 20,
      paddingVertical: 20,
   },
   title: {
      color: '#777',
      fontSize: 12,
   },
   rangContainer: {
      padding: 20,
      backgroundColor: '#fff',
      borderColor: '#cccdb2',
      borderBottomWidth: 1,
   },
   labelsContainer: {
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 18,
   },

   label: {
      color: '#333',
      fontSize: 12,
   },
   track: {
      height: 3,
      backgroundColor: '#cccdb2',
      borderRadius: 3,
   },
   knob: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderColor: '#9c44dc',
      borderWidth: 2,
      backgroundColor: '#FFFFFF',
      marginTop: -12,
      marginLeft: -3,
   },
});
