import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {SF, SW, SH} from '../Utils';

export default StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  itemView: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SH(-30),
  },
  imageStle: {
    width: SW(200),
    height: SW(200),
  },
  listView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    borderRadius: SW(20),
    width: '70%',
    alignSelf: 'center',
    paddingVertical: SH(10),
    position: 'absolute',
    bottom: SH(30),
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
  BtnText: {
    fontSize: SF(16),
    fontWeight: 700,
    color: 'white',
  },
});
