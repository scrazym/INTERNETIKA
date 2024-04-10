/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {AppStack} from './src/navigation/AppStack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from './src/constants/Colors';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.MAIN_DARK : Colors.BLUE_EXTRA_LIGHT,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={Colors.BLUE_EXTRA_LIGHT}
        />
      </SafeAreaView>
      <AppStack />
    </NavigationContainer>
  );
}

export default App;
