import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/Colors';
import React from 'react';
import {NavBtn} from '../../components';
import {TEST} from '../../navigation/AppStack';
export const MainPage: FC = () => {
  return (
    <View style={mainPageStyle.mainWrapper}>
      <Text>MainPage</Text>
      <NavBtn btnTitle="Go to first" navRoute={TEST.TEST_FIRST} />
      <NavBtn btnTitle="Go to swiper" navRoute={TEST.TEST_SWIPER} />
      <NavBtn btnTitle="Go to form" navRoute={TEST.TEST_FORM} />
    </View>
  );
};

export const mainPageStyle = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    backgroundColor: Colors.BLUE_EXTRA_LIGHT,
    flex: 1,
    gap: 30,
    alignItems: 'center',
  },
});
