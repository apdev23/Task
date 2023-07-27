import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientFun = props => {
  const {colors, style, children} = props;
  return (
    <LinearGradient colors={colors} style={style}>
      {children}
    </LinearGradient>
  );
};

export default LinearGradientFun;
