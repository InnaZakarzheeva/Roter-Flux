import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export const WelcomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 16, fontWeight: '700', lineHeight: 50}}>Welcome</Text>
      <TouchableOpacity onPress={() => Actions.introduction()}>
        <Text style={{fontSize: 14, textDecorationLine: 'underline', color: '#ff7517'}}>Introduction</Text>
      </TouchableOpacity>
    </View>
  );
};
