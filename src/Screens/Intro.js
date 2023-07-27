import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import images from '../index';
import {IntroStyle} from '../Style';

const data = [
  {
    id: 1,
    img: images.slide1,
  },
  {
    id: 2,
    img: images.slide2,
  },
  {
    id: 3,
    img: images.slide3,
  },
];

const {width, height} = Dimensions.get('screen');
const Intro = () => {
  const IntroFun = (item, index) => {
    return (
      <View style={IntroStyle.itemView}>
        <Image source={item.img} style={IntroStyle.imageStle} />
      </View>
    );
  };
  const navigation = useNavigation();
  return (
    <View style={IntroStyle.Container}>
      <StatusBar
        backgroundColor={'white'}
        translucent={false}
        barStyle={'dark-content'}
      />

      <View style={IntroStyle.listView}>
        <FlatList
          data={data}
          horizontal={true}
          pagingEnabled
          progressViewOffset={1}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => IntroFun(item, index)}
          keyExtractor={item => item.id}
        />
      </View>
      <TouchableOpacity
        style={IntroStyle.ButtonStyle}
        onPress={() => navigation.navigate('Login')}>
        <Text style={IntroStyle.BtnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Intro;
