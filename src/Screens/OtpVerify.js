import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {OtpStyle} from '../Style';
import {LinearGradientFun} from '../components';

const OtpVerify = () => {
  const navigation = useNavigation();

  const otp1 = useRef();
  const otp2 = useRef();
  const otp3 = useRef();
  const otp4 = useRef();
  const otp5 = useRef();
  const otp6 = useRef();

  const [active1, setActive1] = useState('');
  const [active2, setActive2] = useState('');
  const [active3, setActive3] = useState('');
  const [active4, setActive4] = useState('');
  const [active5, setActive5] = useState('');
  const [active6, setActive6] = useState('');

  const [count, setCount] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const OtpVerifyHandle = () => {
    // if(active1 && active2 && active3 && active4 && active5 && active6 !== '') {
    navigation.navigate('Dashboard');
    // }
  };

  return (
    <LinearGradientFun
      colors={['#E9E4F0', '#D3CCE3']}
      style={OtpStyle.linearGradient}>
      <View style={OtpStyle.Container}>
        <Text style={OtpStyle.OtpHeadingStyle}>OTP Verification</Text>
        <View style={OtpStyle.InputBox}>
          <TextInput
            style={[
              OtpStyle.OtpBoxStyle,
              {borderColor: active1.length >= 1 ? 'purple' : '#000'},
            ]}
            keyboardType="number-pad"
            maxLength={1}
            ref={otp1}
            value={active1}
            onChangeText={text => {
              setActive1(text);
              if (text.length >= 1) {
                otp2.current.focus();
              } else if (text.length < 1) {
                otp1.current.focus();
              }
            }}
          />
          <TextInput
            style={[
              OtpStyle.OtpBoxStyle,
              {borderColor: active2.length >= 1 ? 'purple' : '#000'},
            ]}
            keyboardType="number-pad"
            maxLength={1}
            ref={otp2}
            value={active2}
            onChangeText={text => {
              setActive2(text);

              if (text.length >= 1) {
                otp3.current.focus();
              } else if (text.length < 1) {
                otp1.current.focus();
              }
            }}
          />
          <TextInput
            style={[
              OtpStyle.OtpBoxStyle,
              {borderColor: active3.length >= 1 ? 'purple' : '#000'},
            ]}
            keyboardType="number-pad"
            maxLength={1}
            ref={otp3}
            value={active3}
            onChangeText={text => {
              setActive3(text);

              if (text.length >= 1) {
                otp4.current.focus();
              } else if (text.length < 1) {
                otp2.current.focus();
              }
            }}
          />
          <TextInput
            style={[
              OtpStyle.OtpBoxStyle,
              {borderColor: active4.length >= 1 ? 'purple' : '#000'},
            ]}
            keyboardType="number-pad"
            maxLength={1}
            ref={otp4}
            value={active4}
            onChangeText={text => {
              setActive4(text);

              if (text.length >= 1) {
                otp5.current.focus();
              } else if (text.length < 1) {
                otp3.current.focus();
              }
            }}
          />
          <TextInput
            style={[
              OtpStyle.OtpBoxStyle,
              {borderColor: active5.length >= 1 ? 'purple' : '#000'},
            ]}
            keyboardType="number-pad"
            maxLength={1}
            ref={otp5}
            value={active5}
            onChangeText={text => {
              setActive5(text);

              if (text.length >= 1) {
                otp6.current.focus();
              } else if (text.length < 1) {
                otp4.current.focus();
              }
            }}
          />
          <TextInput
            style={[
              OtpStyle.OtpBoxStyle,
              {borderColor: active6.length >= 1 ? 'purple' : '#000'},
            ]}
            keyboardType="number-pad"
            maxLength={1}
            ref={otp6}
            value={active6}
            onChangeText={text => {
              setActive6(text);

              if (text.length >= 1) {
                otp6.current.focus();
              } else if (text.length < 1) {
                otp5.current.focus();
              }
            }}
          />
        </View>
        <View style={OtpStyle.resendView}>
          <TouchableOpacity
            disabled={count !== 0 ? true : false}
            onPress={() => setCount(60)}>
            <Text style={OtpStyle.resenText}>Resend</Text>
          </TouchableOpacity>
          {count !== 0 && (
            <Text style={OtpStyle.timeOutText}>{count + ' ' + 'second'}</Text>
          )}
        </View>
        <TouchableOpacity
          disabled={
            active1 !== '' &&
            active2 !== '' &&
            active3 !== '' &&
            active4 !== '' &&
            active5 !== '' &&
            active6 !== ''
              ? false
              : true
          }
          onPress={() => OtpVerifyHandle()}
          style={[
            OtpStyle.btnVerify,
            {
              backgroundColor:
                active1 !== '' &&
                active2 !== '' &&
                active3 !== '' &&
                active4 !== '' &&
                active5 !== '' &&
                active6 !== ''
                  ? 'purple'
                  : 'gray',
            },
          ]}>
          <Text style={OtpStyle.btnText}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </LinearGradientFun>
  );
};

export default OtpVerify;
