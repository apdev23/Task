import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Share,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import images from '../index';
import Clipboard from '@react-native-clipboard/clipboard';
import {HomeStyle} from '../Style';
import {Loader} from '../components';
import { LinearGradientFun } from '../components';


const Home = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  const onShare = async text => {
    try {
      const result = await Share.share({
        message: text,
        // title: author,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onCoppyPress = () => {
    ToastAndroid.show('Coppied !', ToastAndroid.SHORT);
  };

  return (
    <LinearGradientFun
      colors={['#E9E4F0', '#D3CCE3']}
      style={HomeStyle.linearGradient}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />

      <View style={HomeStyle.Container}>
        {data.length > 0 ? (
          <View style={HomeStyle.ViewBoxStyle} id="index">
            <Image source={images.up} style={HomeStyle.imagestyle} />
            <Text style={HomeStyle.QoutetSyle}>{data[currentIndex].text}</Text>
            <Image
              source={images.down}
              style={[HomeStyle.imagestyle, HomeStyle.imagestyleright]}
            />
            <Text style={HomeStyle.AuthorStyle}>
              {'~' + data[currentIndex].author}
            </Text>
            <View style={HomeStyle.flexRowJuSpEq}>
              <TouchableOpacity
                style={HomeStyle.btnStyle}
                onPress={() => {
                  Clipboard.setString(
                    data[currentIndex].text + '~' + data[currentIndex].author,
                  );
                  onCoppyPress();
                }}>
                <Image source={images.copy} style={HomeStyle.BtnIcon} />
              </TouchableOpacity>
              <TouchableOpacity
                style={HomeStyle.btnStyle}
                onPress={() =>
                  onShare(data[currentIndex].text, data[currentIndex].author)
                }>
                <Image source={images.share} style={HomeStyle.BtnIcon} />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <>
            <Loader />
          </>
        )}
      </View>
      <View style={HomeStyle.BtnView}>
        <TouchableOpacity
          onPress={goToPrevious}
          disabled={currentIndex === 0}
          style={[
            HomeStyle.perousBtnStyle,
            {backgroundColor: currentIndex === 0 ? 'gray' : '#800080'},
          ]}>
          <Text style={HomeStyle.genBtnTextStyle}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goToNext}
          disabled={currentIndex === data.length - 1}
          style={HomeStyle.perousBtnStyle}>
          <Text style={HomeStyle.genBtnTextStyle}>Next</Text>
        </TouchableOpacity>
      </View>
    </LinearGradientFun>
  );
};

export default Home;
