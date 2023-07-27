import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {LoginStyle} from '../Style';
import images from '../images';
import {LinearGradientFun} from '../components';
import {useSelector, useDispatch} from 'react-redux';
// import {loginUser} from '../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const registeredUser = useSelector(state => state.user);

  const handleLogin = async () => {
    if (!registeredUser || registeredUser.username !== username) {
      Alert.alert('Login Failed', 'User is not registered.');
      return;
    }

    navigation.navigate('OtpVerify');
  }; 

  return (
    <LinearGradientFun
      colors={['#E9E4F0', '#D3CCE3']}
      style={LoginStyle.linearGradient}>
      <View style={LoginStyle.Container}>
        <StatusBar
          backgroundColor={'transparent'}
          translucent={true}
          barStyle={'dark-content'}
        />
        <ScrollView>
          <KeyboardAvoidingView behavior="position">
            <View>
              <Image source={images.appLogo} style={LoginStyle.applogo} />
              <Text style={LoginStyle.LoginText}>Login</Text>
              <TextInput
                value={username}
                onChangeText={text => setUsername(text)}
                placeholder="Username"
                placeholderTextColor={'gray'}
                style={[LoginStyle.textInputStyle, LoginStyle.marginBottom]}
              />
              <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                secureTextEntry
                keyboardType="default"
                placeholderTextColor={'gray'}
                style={LoginStyle.textInputStyle}
                maxLength={20}
              />
            </View>
          </KeyboardAvoidingView>
          <View style={LoginStyle.SignupBox}>
            <Text style={LoginStyle.SignupBoxLeftText}>
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterForm')}>
              <Text style={LoginStyle.SignupBoxRightText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={LoginStyle.LoginBtn} onPress={handleLogin}>
            <Text style={LoginStyle.btnLoginText}>Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </LinearGradientFun>
  );
};

export default Login;
