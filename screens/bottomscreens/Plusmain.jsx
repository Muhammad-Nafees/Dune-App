import React, { useEffect, useRef, useState, useCallback } from 'react';
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
  BackHandler,
  FlatList,
  Easing,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { useIsFocused } from '@react-navigation/native';
import InputField from '../../component/InputField';
import FilterModal from '../../component/FilterModal';
import ProductModal from '../../component/productModal';
import { TypingAnimation } from 'react-native-typing-animation';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import Rail from '../../component/Rail';
import RailSelected from '../../component/RailSelected';
import Thumb from '../../component/Thumb';
import Slider from 'rn-range-slider';


// useEffect(() => {

// }, [route.params]);

// Rest of your screen code

const Plusmain = ({ route }) => {
  // console.log(route?.params?.name);

  // if (route.params && route.params.isColorChange) {

  //   navigation.setParams({ setIsColorchange: false });
  // }



  const { width, height } = Dimensions.get('screen');
  const [iscolorChange, setIsColorchange] = useState(false);
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [inputvalue, setInputValue] = useState('');
  const [imageChange, setImageChange] = useState(
    require('../../assets/recordinginput.png'),
  );
  const [inputfieldvalue, setInputFieldValue] = useState(false);
  const [showContentView, setShowContentView] = useState(false);
  const [secondshowContentView, setsecondShowContentView] = useState(false);
  const [inputText, setInputText] = useState('');
  const [showDots, setShowDots] = useState(true);
  const [openmodal, setopenModal] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [animationView, setAnimationView] = useState(false);

  const scrollViewRef = useRef(null);


  const data = [
    {
      id: '1',
      name: 'Gucci Brown Bag',
      price: '$1,690',
      product: 'VIEW PRODUCT',
      image: require('../../assets/guccibag.png'),
      yes: 'YES',
      no: 'NO',
    },
    {
      id: '2',
      name: 'Gucci Brown Ring',
      price: '$1,100',
      yes: 'YES',
      no: 'NO',
      product: 'VIEW PRODUCT',
      image: require('../../assets/gucciring.png'),
    },
  ];

  const navigation = useNavigation();

  const inputchange = text => {

    if (text.length > 0) {
      setImageChange(require('../../assets/sendchat.png'), setInputValue(text));
    } else {
      setImageChange(
        require('../../assets/recordinginput.png'),
        setInputValue(''),
      );
    }
  };


  const handleSubmit = () => {


    if (inputvalue.trim() !== '') {
      setDisplayText(inputvalue);
      setShowContentView(true);
      setAnimationView(true);

      scrollViewRef.current?.scrollToEnd();
      if (!secondshowContentView || !animationView) {
        setTimeout(() => {
          setAnimationView(false);

          if (!secondshowContentView) {
            setsecondShowContentView(true);
          }
        }, 3000);
      }
    }
  };



  scrollViewRef.current?.scrollToEnd();


  const handleSend = () => {
    setopenModal(true);
  };

  const handleFilter = () => {
    setFilterModalVisible(true);
  };


  const position = useSharedValue(0);

  // Define gestureHandler after position
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => { },

    onActive: (event, ctx) => {
      position.value = event.translationX;
    },
    onEnd: () => { },
  });

  const Styleline = useAnimatedStyle(() => {
    return {
      backgroundColor: 'orange',
      height: 3,
      marginTop: -3,
      borderRadius: 3,
      width: 100,
      transform: [{ translateX: 0 }],
    };
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: position.value }],
    };
  });

  return (
    <>
      <View style={{}}>
        <LinearGradient
          colors={['#000000', '#063083', '#9747FF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 2, y: 2 }}
          locations={[0.1, 0.5, 0.2]}
          style={{ height: '100%', width: '100%' }}>
          <View
            style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 12, }}>

            <View
              style={{
                flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems: 'center',
                // borderColor:"#FFFFFF",
                // borderWidth:1,
              }}>

              <TouchableOpacity onPress={() => navigation?.goBack()}>
                <View style={{ borderWidth: 0.2, width: 32, height: 32, justifyContent: 'center', alignItems: 'center', borderColor: '#FFFFFF', borderRadius: 4, }}>
                  <Image style={{ width: 15, height: 15, resizeMode: 'center' }} source={require('../../assets/backarrow.png')} />
                </View>
              </TouchableOpacity>

              <View>
                <Text style={{ color: '#FFFFFF', fontWeight: '400', fontSize: 20 }}>
                  New Chat
                </Text>
              </View>

              {/* <TouchableOpacity onPress={()=>setIsModalVisiblemain(true)}> */}
              <TouchableOpacity onPress={() => setFilterModalVisible(true)}>
                <View style={{ borderWidth: 0.2, width: 32, height: 32, justifyContent: 'center', alignItems: 'center', borderColor: '#FFFFFF', borderRadius: 4, }}>
                  <Image style={{ width: 20, height: 20, resizeMode: 'center' }} source={require('../../assets/timeline.png')} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

          <ScrollView
            ref={scrollViewRef}
            style={{ flex: 1, }}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}>
            {showContentView && (
              <View
                style={{
                  marginTop: 65, justifyContent: 'center', alignItems: 'center',
                }}>
                <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', width: '90%', borderRadius: 10, height: 106, }}>
                  <View
                    style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', marginTop: 10, }}>
                    <View
                      style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '27%', }}>
                      <Image style={{ width: 40, height: 40, resizeMode: 'center' }} source={require('../../assets/productman.png')} />
                      <Text style={{ color: '#000000', fontSize: 18, fontWeight: '700', }}> You </Text>
                    </View>

                    <TouchableOpacity>
                      <View>
                        <Image
                          style={{ width: 40, height: 40, resizeMode: 'center' }}
                          source={require('../../assets/PencilSimpleLine.png')}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>

                  {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

                  <View style={{ width: '80%', marginTop: 12 }}>
                    <Text style={{ color: '#000000' }}>{`“${displayText}”`}</Text>
                  </View>
                </View>
              </View>
            )}


            {!showContentView && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 300,
                }}>
                <View
                  style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                  <View
                    style={{
                      borderRadius: 10,
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      width: 325,
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 12,
                        marginBottom: 18,
                      }}>
                      <View
                        style={{
                          width: '90%',
                          borderWidth: 0.3,
                          borderColor: '#FFF',
                          borderRadius: 5,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#FFFFFF',
                            marginBottom: 12,
                            marginTop: 12,
                            width: 250,
                          }}>
                          Hi, I’m DUNE, your personal shopping assistant{' '}
                        </Text>
                      </View>

                      <View
                        style={{
                          width: '90%',
                          borderWidth: 0.3,
                          borderColor: '#FFF',
                          borderRadius: 5,
                          marginTop: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#FFFFFF',
                            marginBottom: 12,
                            marginTop: 12,
                            width: 250,
                          }}>
                          Ask me anything and I'll strive to delight you with
                          exquisite luxury pieces! 👗👔🌟
                        </Text>
                      </View>

                      <View
                        style={{
                          width: '90%',
                          borderWidth: 0.3,
                          borderColor: '#FFF',
                          borderRadius: 5,
                          marginTop: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#9747FF',
                            marginBottom: 12,
                            marginTop: 12,
                            width: 250,
                          }}>
                          Like: Can you find me the latest collection from Gucci
                          available on Farfetch?
                        </Text>
                      </View>
                    </View>

                    {/* ------------------------XXXXXXXXXXXXXXXXXXX------------------------------- */}

                    {/* ------------------------XXXXXXXXXXXXXXXXXXX------------------------------- */}
                  </View>
                </View>
              </View>
            )}

            {/*----------------AnimationsView---------------------- */}

            {/*----------------AnimationsViewClose---------------------- */}

            {secondshowContentView && (
              <View
                style={{
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <LinearGradient
                  colors={['rgba(255,255,255,0.1)', 'rgba(6,48, 131,0.3)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.6, y: 0.6 }}
                  locations={[0.2, 1]}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '90%',
                    borderRadius: 10,
                    paddingBottom: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '90%',
                      justifyContent: 'space-between',
                      marginTop: 12,
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '32%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginRight: 'auto',
                      }}>
                      <View
                        style={{
                          backgroundColor: '#FFF',
                          width: 35,
                          height: 35,
                          borderRadius: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{ width: 25, height: 25, resizeMode: 'center' }}
                          source={require('../../assets/dunelogo2.png')}
                        />
                      </View>
                      <Text
                        style={{
                          fontWeight: '700',
                          fontSize: 18,
                          color: '#FFFFFF',
                        }}>
                        DUNE
                      </Text>
                    </View>

                    <TouchableOpacity>
                      <View>
                        <Image
                          style={{ width: 25, height: 25, resizeMode: 'center' }}
                          source={require('../../assets/reload.png')}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={{ width: '90%', marginTop: 10 }}>
                    <Text
                      style={{
                        fontWeight: '400',
                        lineHeight: 20,
                        fontSize: 15,
                        color: '#FFF',
                        width: 300,
                      }}>
                      Here are some of the latest collections from Gucci
                      available on Farfetch for woman:
                    </Text>
                  </View>

                  {/*----------------Third View---------------------- */}

                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10,
                      }}>
                      <View>
                        <FlatList
                          data={data}
                          horizontal
                          showsHorizontalScrollIndicator={false}
                          keyExtractor={item => item.id}
                          renderItem={({ item }) => (
                            <View
                              style={{
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                width: 220,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10,
                                margin: 5,
                              }}>
                              <Image
                                style={{
                                  width: 220,
                                  height: 160,
                                  resizeMode: 'center',
                                  marginTop: 10,
                                }}
                                source={item.image}
                              />
                              <View
                                style={{
                                  flexDirection: 'row',
                                  width: '90%',
                                  justifyContent: 'space-between',
                                  marginTop: 10,
                                }}>
                                <TouchableOpacity
                                  style={{
                                    backgroundColor: '#9747FF',
                                    width: 90,
                                    height: 37,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                  }}>
                                  <Text
                                    style={{
                                      color: '#FFFFFF',
                                      fontSize: 16,
                                      fontWeight: '500',
                                    }}>
                                    {item.yes}
                                  </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  style={{
                                    backgroundColor: '#FFFFFF',
                                    width: 90,
                                    height: 37,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                  }}>
                                  <Text
                                    style={{
                                      color: '#000000',
                                      fontSize: 16,
                                      fontWeight: '400',
                                    }}>
                                    {item.no}
                                  </Text>
                                </TouchableOpacity>
                              </View>

                              <Text
                                style={{
                                  color: '#FFFFFF',
                                  textAlign: 'center',
                                  marginTop: 4,
                                  fontSize: 16,
                                  lineHeight: 26,
                                }}>
                                {item.name}
                              </Text>
                              <Text
                                style={{
                                  color: '#9747FF',
                                  textAlign: 'center',
                                  fontWeight: '500',
                                  fontSize: 16,
                                }}>
                                {item.price}
                              </Text>
                              <Text
                                style={{
                                  color: '#FFFFFF',
                                  textAlign: 'center',
                                  fontSize: 12,
                                  lineHeight: 16,
                                }}>
                                Gucci messenger bag with Interlock...
                              </Text>

                              <TouchableOpacity
                                style={{
                                  width: '90%',
                                  backgroundColor: 'rgba(151,71,255,1)',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  borderRadius: 5,
                                  height: 35,
                                  marginTop: 8,
                                  marginBottom: 8,
                                }}>
                                <View>
                                  <Text style={{ color: '#FFF', fontSize: 16 }}>
                                    {item.product}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            </View>
                          )}
                        />
                      </View>
                    </View>
                  </View>

                  {/*----------------Third View---------------------- */}

                  <View style={{ width: '95%' }}>
                    <Text
                      style={{ color: '#FFF', fontSize: 15, fontWeight: '400' }}>
                      I hope this helps! Let me know if you need more.
                    </Text>
                  </View>
                </LinearGradient>
              </View>
            )}

            {animationView && (
              <View
                style={{
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <LinearGradient
                  colors={['rgba(255,255,255,0.1)', 'rgba(6,48, 131,0.3)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.6, y: 0.6 }}
                  locations={[0.2, 1]}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '90%',
                    borderRadius: 10,
                    paddingBottom: 24,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '90%',
                      justifyContent: 'space-between',
                      marginTop: 12,
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '32%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginRight: 'auto',
                      }}>
                      <View
                        style={{
                          backgroundColor: '#FFF',
                          width: 35,
                          height: 35,
                          borderRadius: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{ width: 25, height: 25, resizeMode: 'center' }}
                          source={require('../../assets/dunelogo2.png')}
                        />
                      </View>
                      <Text
                        style={{
                          fontWeight: '700',
                          fontSize: 18,
                          color: '#FFFFFF',
                        }}>
                        DUNE
                      </Text>
                    </View>

                    <TouchableOpacity>
                      <View>
                        <Image
                          style={{ width: 25, height: 25, resizeMode: 'center' }}
                          source={require('../../assets/reload.png')}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>

                  {/*----------------Third View---------------------- */}

                  <View style={{ width: '90%', marginTop: 10 }}>
                    <TypingAnimation
                      dotColor="#FFFFFF"
                      dotMargin={10}
                      dotAmplitude={3}
                      dotRadius={4}
                      dotX={12}
                      dotY={6}
                    />
                  </View>
                  {/*----------------Third View---------------------- */}
                </LinearGradient>
              </View>
            )}
          </ScrollView>

          {/* -----------------xxxxxxxxxxxxxxxxx----------------------- */}

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              marginBottom: 12,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 0.5,
                  width: '80%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderColor: '#FFFFFF',
                  borderRadius: 10,
                }}>
                <View style={{}}>
                  <TextInput
                    autoCorrect={false}
                    returnKeyType="send"
                    onChangeText={inputchange}
                    placeholder="I’m in a fancy mood, surprise me!"
                    onSubmitEditing={() => handleSubmit()}
                    style={{ paddingLeft: 12 }}
                  />
                </View>

                <TouchableOpacity onPress={handleSend}>
                  <View style={{}}>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        resizeMode: 'center',
                        marginRight: 10,
                      }}
                      source={require('../../assets/plusinput.png')}
                    />
                  </View>
                </TouchableOpacity>
              </View>

              <ProductModal openmodal={openmodal} setopenModal={setopenModal} />

              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={handleSubmit}>
                  <LinearGradient
                    colors={['#063083', '#9747FF']}
                    style={{
                      width: 52,
                      height: 52,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}>
                    <Image
                      style={{ width: 25, height: 25, resizeMode: 'center' }}
                      source={imageChange}
                    />
                  </LinearGradient>

                </TouchableOpacity>
              </View>
            </View>
          </View>



          {/* -----------------xxxxxxxxxxxxxxxxx----------------------- */}

          {/* {isModalVisiblefiltermain && <FilterModal isModalVisiblefilter={isModalVisiblefiltermain} setIsModalVisible={setIsModalVisiblemain} />} */}

          {isFilterModalVisible && (
            <FilterModal
              isFilterModalVisible={isFilterModalVisible}
              setFilterModalVisible={setFilterModalVisible}
            />
          )}

          {/* -----------------xxxxxxxxxxxxxxxxx----------------------- */}
        </LinearGradient>
      </View>
    </>
  );
};



export default Plusmain;

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
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#9c44dc',
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    marginTop: -12,
    marginLeft: -10,
    // zIndex:-99999
  },
});
