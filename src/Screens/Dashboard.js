import React, {useState} from 'react';
import {View, Text, StatusBar, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {DashboardStyle} from '../Style';
import {UpdateForm} from '../Screens';
import {LinearGradientFun} from '../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {updateDashboardData} from '../redux/action';
const Dashboard = ({navigation}) => {
  // const navigation = useNavigation();

  const user = useSelector(state => state.user);
  const dashboardData = useSelector(state => state.dashboardData);
  const dispatch = useDispatch();
  const [tab, setTab] = useState(1);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => {
            dispatch(updateDashboardData(null));

            navigation.replace('Login');
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <LinearGradientFun
      colors={['#E9E4F0', '#D3CCE3']}
      style={DashboardStyle.linearGradient}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <View style={DashboardStyle.Container}>
        <View style={DashboardStyle.TabWrap}>
          <TouchableOpacity
            style={[
              DashboardStyle.tabBox,
              tab == 1 && DashboardStyle.tabSelectBox,
            ]}
            onPress={() => setTab(1)}>
            <Text
              style={[
                DashboardStyle.tabText,
                tab == 1 && DashboardStyle.tabSelectText,
              ]}>
              User Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              DashboardStyle.tabBox,
              tab == 2 && DashboardStyle.tabSelectBox,
            ]}
            onPress={() => setTab(2)}>
            <Text
              style={[
                DashboardStyle.tabText,
                tab == 2 && DashboardStyle.tabSelectText,
              ]}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>
        <View style={DashboardStyle.pasH20}>
          {tab == 1 ? (
            <View>
              <Text style={DashboardStyle.label}>User Name</Text>
              <View style={DashboardStyle.inputBoxStyle}>
                <Text style={DashboardStyle.userDataText}>{user.username}</Text>
              </View>

              <Text style={DashboardStyle.label}>Email</Text>
              <View style={DashboardStyle.inputBoxStyle}>
                <Text style={DashboardStyle.userDataText}>{user.email}</Text>
              </View>
              <Text>
                Dashboard Data:{' '}
                {dashboardData ? JSON.stringify(dashboardData) : 'No data'}
              </Text>
              <UpdateForm />
            </View>
          ) : (
            <View style={DashboardStyle.pasH20}>
              <TouchableOpacity onPress={handleLogout}>
                <Text style={DashboardStyle.logoutBtn}>LogOut</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </LinearGradientFun>
  );
};

export default Dashboard;
