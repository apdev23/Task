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
import {useDispatch} from 'react-redux';
import {registerUser} from '../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterForm = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conFirmPassword, setConFirmPassword] = useState('');

  const dispatch = useDispatch();

  // const handleRegister = () => {
  //   const userData = {username, email, password, conFirmPassword};
  //   dispatch(registerUser(userData));
  //   navigation.navigate('OtpVerify');
  // };

  const handleRegister = () => {
    // Perform form validation here
    const userData = {username, email, password, conFirmPassword};
    dispatch(registerUser(userData));
    if (
      username.trim() === '' ||
      email.trim() === '' ||
      password === '' ||
      conFirmPassword === ''
    ) {
      Alert.alert('Validation Error', 'Please fill all the fields');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
      return;
    }

    if (password !== conFirmPassword) {
      Alert.alert('Validation Error', 'Passwords do not match');
      return;
    }

    // Perform registration logic here
    // Redirect to the dashboard or login screen upon successful registration
    // ...
    navigation.navigate('OtpVerify');
  };
  const isValidEmail = email => {
    // A simple email validation using regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
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
                <Text style={LoginStyle.LoginText}>Create Account</Text>
                <TextInput
                  value={username}
                  onChangeText={text => setUsername(text)}
                  placeholder="Username"
                  placeholderTextColor={'gray'}
                  style={[LoginStyle.textInputStyle, LoginStyle.marginBottom]}
                />
                <TextInput
                  value={email}
                  onChangeText={text => setEmail(text)}
                  placeholder="Email Address"
                  placeholderTextColor={'gray'}
                  style={[LoginStyle.textInputStyle, LoginStyle.marginBottom]}
                  keyboardType="email-address"
                />
                <TextInput
                  value={password}
                  onChangeText={text => setPassword(text)}
                  placeholder="Password"
                  secureTextEntry
                  keyboardType="default"
                  placeholderTextColor={'gray'}
                  style={[LoginStyle.textInputStyle, LoginStyle.marginBottom]}
                  maxLength={20}
                />
                <TextInput
                  value={conFirmPassword}
                  onChangeText={text => setConFirmPassword(text)}
                  placeholder="conFirmPassword"
                  secureTextEntry
                  keyboardType="default"
                  placeholderTextColor={'gray'}
                  style={[LoginStyle.textInputStyle, LoginStyle.marginBottom]}
                  maxLength={20}
                />
              </View>
            </KeyboardAvoidingView>
            <View style={LoginStyle.btnWrap}>
              <View style={LoginStyle.SignupBox}>
                <Text style={LoginStyle.SignupBoxLeftText}>
                  Alredy have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={LoginStyle.SignupBoxRightText}>Sign in</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={LoginStyle.LoginBtn}
                onPress={handleRegister}>
                <Text style={LoginStyle.btnLoginText}>Register</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </LinearGradientFun>
    </KeyboardAvoidingView>
  );
};

export default RegisterForm;
