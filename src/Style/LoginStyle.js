import {StyleSheet} from 'react-native';
import {SF, SW, SH} from '../Utils';

export default StyleSheet.create({
  mwrapContainer: {
    width: '100%',
    height: '100%',
  },
  Container: {
    // backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    paddingTop: SH(120),
  },
  textInputStyle: {
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: SW(10),
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: SW(20),
    color: '#000',
  },
  marginBottom: {
    marginBottom: SH(20),
  },
  LoginBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    borderRadius: SW(20),
    width: '70%',
    alignSelf: 'center',
    paddingVertical: SH(10),
    // position: 'absolute',
    // bottom: SH(30),
    shadowOpacity: 0.5,
    shadowColor: '#d20845',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
  },
  btnLoginText: {
    fontSize: SF(16),
    fontWeight: 700,
    color: 'white',
  },
  LoginText: {
    fontSize: SF(25),
    fontWeight: '900',
    color: 'black',
    paddingVertical: SH(30),
    textAlign: 'center',
    paddingTop: SH(20),
  },
  applogo: {
    width: SW(90),
    height: SW(90),
    alignSelf: 'center',
  },
  linearGradient: {
    // flex: 1,
    zIndex: 0,
  },
  SignupBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignupBoxLeftText: {
    fontSize: SF(17),
    fontWeight: '900',
    color: '#333333',
    textAlign: 'center',
  },
  SignupBoxRightText: {
    fontSize: SF(17),
    fontWeight: '900',
    color: 'purple',
    paddingLeft: SW(10),
    paddingVertical: SH(20),
  },
  btnWrap: {
    paddingVertical: SH(20),
  },
});
