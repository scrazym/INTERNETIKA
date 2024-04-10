import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import 'react-native-gesture-handler';
import {
  MainPage,
  TaskFirstScreen,
  TaskSecondScreen,
  TaskThirdScreen,
} from '../screens';

const Stack = createNativeStackNavigator<TestParams>();
export enum TEST {
  TEST_MAIN = 'HOME_PAGE',
  TEST_FIRST = 'FIRST_TASK',
  TEST_SWIPER = 'SWIPER',
  TEST_FORM = 'FORM',
}

export type TestParams = {
  [TEST.TEST_MAIN]: undefined;
  [TEST.TEST_FIRST]: undefined;
  [TEST.TEST_SWIPER]: undefined;
  [TEST.TEST_FORM]: undefined;
};
export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={TEST.TEST_MAIN}
        component={MainPage}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={TEST.TEST_FIRST}
        component={TaskFirstScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={TEST.TEST_SWIPER}
        component={TaskSecondScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={TEST.TEST_FORM}
        component={TaskThirdScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
