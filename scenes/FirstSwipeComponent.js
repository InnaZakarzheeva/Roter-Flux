import React from 'react';
import styled from 'styled-components';
import {Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Back from '../assets/images/back.png';
import {Actions} from 'react-native-router-flux';

export const FirstSwipeComponent = () => {
  return (
    <LinearGradient colors={['#e1eec3', '#f05053']} style={{flex: 1}}>
      <ButtonWrapper onPress={() => Actions.pop()}>
        <BackButton source={Back} resizeMode="stretch" />
      </ButtonWrapper>
    </LinearGradient>
  );
};

const ButtonWrapper = styled(TouchableOpacity)({
  width: '100%',
  height: 60,
  justifyContent: 'center',
});

const BackButton = styled(Image)({
  width: 40,
  height: 40,
});
