import {StyleSheet} from 'react-native';
import { SF, SW, SH } from '../Utils';

export default StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  OtpHeadingStyle: {
    fontSize: SF(20),
    color: '#000',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '900',
    alignSelf: 'center',
    paddingBottom: SH(50),
  },
  OtpBoxStyle: {
    borderWidth: SW(1),
    borderRadius: SW(10),
    fontSize: SF(20),
    color: '#000',
    width: SW(45),
    height: SW(45),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '800',
    alignSelf: 'center',
    marginHorizontal: SW(5),
  },
  InputBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnVerify: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SW(50),
    marginTop: SH(50),
    height: SH(42),
  },
  btnText: {
    fontSize: SF(16),
    color: '#fff',
    fontWeight: '900',
  },
  resendView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SH(20),
  },
  resenText: {
    fontSize: SF(16),
    color: '#000',
    fontWeight: '900',
    marginRight: SW(20),
  },
  timeOutText: {
    fontSize: SF(16),
    color: 'blue',
    fontWeight: '900',
  },
});
