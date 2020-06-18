import React from 'react';
import Back from '../../assets/images/back.png';
import {Actions} from 'react-native-router-flux';
import styled from 'styled-components';
import {Image, TouchableOpacity} from 'react-native';

export const BackButton = () => {
  return (
    <ButtonWrapper onPress={() => Actions.pop()}>
      <BackButtonImage source={Back} resizeMode="stretch" />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled(TouchableOpacity)({
  width: '100%',
  height: 60,
  justifyContent: 'center',
});

const BackButtonImage = styled(Image)({
  width: 40,
  height: 40,
});
