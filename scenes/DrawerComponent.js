import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export const DrawerComponent = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        Hi,{'\n'}name{'\n'}
      </Text>
      <TouchableOpacity
        onPress={() => {
          Actions.exercise();
          Actions.drawerClose();
        }}>
        <Text>Move to exercise</Text>
      </TouchableOpacity>
    </View>
  );
};
