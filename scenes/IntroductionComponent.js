import React from 'react';
import {View, Text} from 'react-native';

export const IntroductionComponent = () => {
  return (
      <View style={{flex: 1, padding: 30}}>
          <Text style={{fontSize: 16, lineHeight: 22}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dui dapibus, auctor ante vestibulum, porta dui. Suspendisse euismod efficitur sodales. Maecenas volutpat interdum diam eget pharetra. Ut quis purus euismod, ultricies neque at, tristique nulla. Etiam mattis, odio in tristique blandit, risus libero molestie mauris, vitae venenatis turpis augue vitae mi. Curabitur sit amet ultrices orci, vel porttitor est. Nunc ac nisl turpis.
          </Text>
      </View>
  );
};
