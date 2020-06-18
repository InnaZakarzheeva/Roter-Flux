import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import BackgroundImage from '../assets/images/background.jpg';
import styled from 'styled-components';

const {width, height} = Dimensions.get('screen');

export const ProfileScreen = () => {
  return (
    <View>
      <Background source={BackgroundImage} resizeMode="cover">
        <Form>
          <Title>Whats your name?</Title>
          <Input textContentType="name" placeholder="Name" />
          <Button onPress={() => Actions.introduction()}>
            <ButtonText>Change name</ButtonText>
          </Button>
        </Form>
      </Background>
    </View>
  );
};

const Background = styled(ImageBackground)({
  width: width,
  height: height,
  alignItems: 'center',
  justifyContent: 'center',
});

const Form = styled(View)({
  width: '70%',
  height: 300,
  backgroundColor: '#ffffff',
  opacity: 0.9,
  borderRadius: 20,
  alignItems: 'center',
});

const Title = styled(Text)({
  fontSize: 22,
  fontWeight: 'bold',
  height: 100,
  lineHeight: 100,
});

const Input = styled(TextInput)({
  borderBottomColor: '#000000',
  borderBottomWidth: 2,
  width: '80%',
  fontSize: 18,
  paddingLeft: 10,
  paddingRight: 10,
});

const Button = styled(TouchableOpacity)({
  width: '80%',
  height: 50,
  borderColor: '#000000',
  borderWidth: 2,
  borderRadius: 5,
  position: 'absolute',
  bottom: 50,
  justifyContent: 'center',
  alignItems: 'center',
});

const ButtonText = styled(Text)({
  color: '#ff7517',
  fontSize: 16,
  fontWeight: '700',
});
