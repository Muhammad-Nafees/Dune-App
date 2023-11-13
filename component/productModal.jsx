import {
  View,
  Text,
  Modal,
  Pressable,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { BlurView } from '@react-native-community/blur';


const ProductModal = ({ openmodal, setopenModal }) => {
  const { width, height } = Dimensions.get('screen');

  return (
    <Modal visible={openmodal} animationType="fade" transparent={true}>

      <Pressable onPress={() => setopenModal(false)} style={{ width: width / 1, height: height / 1, justifyContent: "center", alignItems: "center" }}>
        <Pressable style={{ position: 'absolute', top: '67%', left: "5%", width: "75%", height: height / 7, backgroundColor: 'rgba(255, 255, 255, 0.40)', borderRadius: 10, }}>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', width: '85%', justifyContent: 'space-between', alignItems: 'center', height: 110 }}>

              <View style={{ justifyContent: "center", alignItems: "center", }}>
                <TouchableOpacity>
                  <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: '#9747FF', justifyContent: 'center', alignItems: 'center', }}>
                    <Image
                      style={{ width: 25, height: 25, resizeMode: 'center' }}
                      source={require('../assets/locationmodal.png')}
                    />
                  </View>
                </TouchableOpacity>

                <View
                  style={{ marginTop: 4, justifyContent: 'center', alignItems: 'center', }}>
                  <Text>Location</Text>
                </View>
              </View>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity>
                  <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: '#9747FF', justifyContent: 'center', alignItems: 'center', }}>
                    <Image
                      style={{ width: 25, height: 25, resizeMode: 'center' }}
                      source={require('../assets/wavemodal.png')}
                    />
                  </View>
                </TouchableOpacity>



                <View
                  style={{ marginTop: 4, justifyContent: 'center', alignItems: 'center', }}>
                  <Text>Audio</Text>
                </View>
              </View>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity>
                  <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: '#9747FF', justifyContent: 'center', alignItems: 'center', }}>
                    <Image
                      style={{ width: 25, height: 25, resizeMode: 'center' }}
                      source={require('../assets/gallerymodal.png')}
                    />
                  </View>
                </TouchableOpacity>

                <View style={{ marginTop: 4, justifyContent: 'center', alignItems: 'center', }}>
                  <Text>Gallery</Text>
                </View>
              </View>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity>
                  <View
                    style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: '#9747FF', justifyContent: 'center', alignItems: 'center', }}>
                    <Image
                      style={{ width: 25, height: 25, resizeMode: 'center' }}
                      source={require('../assets/capturemodal.png')}
                    />
                  </View>
                </TouchableOpacity>

                <View style={{ marginTop: 4, justifyContent: 'center', alignItems: 'center', }}>
                  <Text>Camera</Text>
                </View>

              </View>
            </View>
          </View>


        </Pressable>
      </Pressable>


    </Modal>
  );
};

export default ProductModal;
