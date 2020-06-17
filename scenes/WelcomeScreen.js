import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export const WelcomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={() => Actions.chat()}>
        <Text>Move to chat</Text>
      </TouchableOpacity>
    </View>
  );
};
