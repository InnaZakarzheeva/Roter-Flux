/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components';
import {View, Text, Image} from 'react-native';
import Avatar from '../../assets/images/avatar.jpg';

export const BreedItem = ({item}) => {
  return (
    <Wrapper>
      <Image
        source={Avatar}
        style={{width: 80, height: 80, borderRadius: 15}}
      />
      <TextWrapper>
        <Name>{item.name}</Name>
        <Description>{item.temperament}</Description>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(View)({
  width: '100%',
  height: 100,
  marginTop: 10,
  borderRadius: 15,
  backgroundColor: 'rgba(255, 117, 23, 0.3)',
  alignItems: 'center',
  padding: 10,
  flexDirection: 'row',
});

const TextWrapper = styled(View)({
  width: '80%',
  flexDirection: 'column',
  padding: 10,
});

const Name = styled(Text)({
  fontSize: 16,
  color: '#ffffff',
  fontWeight: '700',
});

const Description = styled(Text)({
  fontSize: 14,
  color: '#000000',
});
