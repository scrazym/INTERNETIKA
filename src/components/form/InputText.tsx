import React, {ChangeEvent} from 'react';
import {KeyboardTypeOptions, TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const MyTextInput = ({
  onChangeText,
  value,
  placeholder,
  onBlur,
  multiline = false,
  keyboard = 'numeric',
}: inputProps) => {
  return (
    <View>
      <TextInput
        placeholderTextColor={Colors.GRAY_PRIMARY}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={TextInputStyle.input}
        value={value}
        keyboardType={keyboard}
        onBlur={onBlur}
        multiline={multiline}
        autoCapitalize="none"
      />
    </View>
  );
};

export const TextInputStyle = StyleSheet.create({
  input: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
    letterSpacing: 0.2,
    color: Colors.MAIN_DARK,
    borderWidth: 1,
    borderColor: Colors.GRAY_PRIMARY,
    paddingBottom: 11,
    paddingTop: 11,
    paddingLeft: 12,
    marginTop: 30,
  },
  pswInputIcon: {
    position: 'absolute',
    right: 15,
    top: '35%',
  },
});


type inputProps = {
  onChangeText?: (e: string | ChangeEvent<any>) => void;
  value?: string | number;
  name?: string;
  placeholder?: string;
  onBlur?: () => void;
  multiline?: boolean;
  keyboard?: KeyboardTypeOptions;
};
