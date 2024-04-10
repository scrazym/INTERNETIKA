import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {TEST} from '../../navigation/AppStack';

export const NavBtn: FC<NavBtnProps> = ({btnTitle, navRoute, isGoBack}) => {
  const navigation = useNavigation<any>();
  const handleNavigate = () => {
    !isGoBack ? navigation.navigate(navRoute) : navigation.goBack();
  };
  return (
    <TouchableOpacity
      onPressOut={handleNavigate}
      style={navBtnStyle.btnWrapper}>
      <Text style={navBtnStyle.text}>{btnTitle}</Text>
    </TouchableOpacity>
  );
};

type NavBtnProps = {
  btnTitle: string;
  navRoute?: TEST;
  isGoBack?: boolean;
};
export const navBtnStyle = StyleSheet.create({
  btnWrapper: {
    width: '50%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.TURQUOISE_PRIMARY,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.TURQUOISE_PRIMARY,
  },
});
