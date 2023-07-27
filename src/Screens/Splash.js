import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SplashStyle} from '../Style';
import images from '../images';
import {LinearGradientFun} from '../components';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <LinearGradientFun
      colors={['#E9E4F0', '#D3CCE3']}
      style={SplashStyle.linearGradient}>
      <View style={SplashStyle.Container}>
        <StatusBar
          backgroundColor={'transparent'}
          translucent={true}
          barStyle={'dark-content'}
        />
        <Image source={images.appLogo} style={SplashStyle.applogo} />
        <View style={SplashStyle.TextView}>
          <Text style={SplashStyle.firstTextStyle}>Wel</Text>
          <Text style={SplashStyle.secondTextStyle}>Come</Text>
        </View>
      </View>
    </LinearGradientFun>
  );
};

export default Splash;
