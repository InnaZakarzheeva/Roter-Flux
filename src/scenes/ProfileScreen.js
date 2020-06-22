import React, {useState} from 'react';
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
import {connect} from 'react-redux';
import {changeName} from '../actions/index';
import {getUser} from '../services/realm/controllers/user';

const {width, height} = Dimensions.get('screen');

const ProfileScreen = props => {
  const [name, setName] = useState('');
  const userName = getUser().userName;
  return (
    <View>
      <Background source={BackgroundImage} resizeMode="cover">
        <Form>
          {userName.length ? (
            <Name>Hello, {userName}</Name>
          ) : (
            <>
              <Title>Whats your name?</Title>
              <Input
                textContentType="name"
                placeholder="Name"
                value={name}
                onChangeText={text => setName(text)}
              />
              <Button onPress={() => props.changeName(name)}>
                <ButtonText>Save</ButtonText>
              </Button>
            </>
          )}
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
  justifyContent: 'space-evenly',
});

const Title = styled(Text)({
  fontSize: 22,
  fontWeight: 'bold',
  height: 50,
  lineHeight: 50,
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
  justifyContent: 'center',
  alignItems: 'center',
});

const ButtonText = styled(Text)({
  color: '#ff7517',
  fontSize: 16,
  fontWeight: '700',
});

const Name = styled(Text)({
  width: '80%',
  fontSize: 32,
  fontWeight: '700',
  fontStyle: 'italic',
  textShadowColor: '#ff7517',
  textShadowRadius: 5,
});

const mapStateToProps = state => {
  return {
    name: state.name,
  };
};

export default connect(
  mapStateToProps,
  {changeName},
)(ProfileScreen);
