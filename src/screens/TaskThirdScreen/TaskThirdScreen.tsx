import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavBtn} from '../../components';
import {Form} from '../../components/form/Form';
import {Colors} from '../../constants/Colors';

export const TaskThirdScreen = () => {
  return (
    <View style={thirdStyle.wrapper}>
      <NavBtn btnTitle="Go back" isGoBack={true} />
      <Form />
    </View>
  );
};

export const thirdStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.MAIN_WHITE,
  },
})