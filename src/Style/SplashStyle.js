import {StyleSheet} from 'react-native';
import {SF, SW, SH} from '../Utils';

export default StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    paddingTop: SH(20),
  },
  firstTextStyle: {
    fontSize: SF(30),
    fontWeight: '700',
    color: '#800080',
  },
  secondTextStyle: {
    fontSize: SF(20),
    fontWeight: '700',
    color: '#800080',
  },
  applogo: {
    width: SW(90),
    height: SW(90),
  },
});
