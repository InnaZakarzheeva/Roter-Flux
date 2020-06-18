/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BackButton} from './components/BackButton';

export const FirstSwipeComponent = () => {
  return (
    <LinearGradient colors={['#e1eec3', '#f05053']} style={{flex: 1}}>
      <BackButton />
    </LinearGradient>
  );
};
