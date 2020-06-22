import React, {useState} from 'react';
import {View, Image, TouchableOpacity, TextInput, Text} from 'react-native';
import styled from 'styled-components';
import Cat from '../assets/images/cat.png';
import {BackButton} from './components/BackButton';
import {connect} from 'react-redux';
import {changeName} from '../actions/index';

const ChangeNameComponent = props => {
  const [name, setName] = useState('');
  const [isChanged, setChanged] = useState(false);
  return (
    <Wrapper>
      <BackButton />
      <Form>
        <Input
          placeholder="Enter new name..."
          value={name}
          onChangeText={text => setName(text)}
        />
        {!isChanged ? (
          <Submit
            onPress={() => {
              props.changeName(name);
              setChanged(true);
            }}>
            <SubmitText>Change</SubmitText>
          </Submit>
        ) : (
          <Text>Successfully updated!</Text>
        )}
      </Form>
      <ImageCat source={Cat} resizeMode="stretch" />
    </Wrapper>
  );
};

const Wrapper = styled(View)({
  flex: 1,
  backgroundColor: '#e8e0d5',
  justifyContent: 'space-between',
  paddingLeft: 20,
});

const Form = styled(View)({
  width: '100%',
  height: 250,
  justifyContent: 'space-evenly',
  alignItems: 'center',
});

const Input = styled(TextInput)({
  width: '80%',
  height: 60,
  borderBottomColor: '#000000',
  borderBottomWidth: 2,
  fontSize: 16,
  paddingLeft: 10,
  paddingRight: 10,
});

const Submit = styled(TouchableOpacity)({
  width: '80%',
  height: 50,
  borderColor: '#000000',
  borderWidth: 2,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
});

const SubmitText = styled(Text)({
  color: '#ff7517',
  fontSize: 16,
  fontWeight: '700',
});

const ImageCat = styled(Image)({
  width: 200,
  height: 300,
  alignSelf: 'flex-end',
});

export default connect(
  null,
  {changeName},
)(ChangeNameComponent);
