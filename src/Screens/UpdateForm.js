import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {LoginStyle} from '../Style';
import images from '../images';
import {LinearGradientFun} from '../components';
import {useDispatch} from 'react-redux';
import {updateDashboardData} from '../redux/action';

const UpdateForm = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conFirmPassword, setConFirmPassword] = useState('');

  const [data, setData] = useState('');

  const dispatch = useDispatch();

  const handleUpdate = () => {
    // Perform update logic here
    dispatch(updateDashboardData(data));
    // Store updated data in AsyncStorage or update API
    // Display a success message or redirect back to the dashboard screen
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
                <TextInput
                  value={data}
                  onChangeText={text => setData(text)}
                  placeholder="Enter updated data"
                />
                {/* Adjust the position of the button here */}
                
              </View>
            </KeyboardAvoidingView>
            <View style={LoginStyle.btnWrap}>
              <TouchableOpacity
                style={LoginStyle.LoginBtn}
                onPress={handleUpdate}>
                <Text style={LoginStyle.btnLoginText}>Update</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </LinearGradientFun>
    </KeyboardAvoidingView>
  );
};

export default UpdateForm;
