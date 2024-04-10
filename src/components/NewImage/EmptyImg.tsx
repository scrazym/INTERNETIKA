import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFileImage} from '@fortawesome/free-solid-svg-icons/faFileImage';
import {View} from 'react-native';
import {ImgStyles} from './AddNewImage';

export const EmptyImg = () => {
  return (
    <View style={ImgStyles.emptyImg}>
      <FontAwesomeIcon icon={faFileImage} style={ImgStyles.emptyIcon} />
    </View>
  );
};
