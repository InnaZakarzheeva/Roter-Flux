/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Animated, Easing, FlatList} from 'react-native';
import styled from 'styled-components';
import CatCircle from '../assets/images/loader.jpg';
import {loadBreeds} from '../actions/index';
import {BreedItem} from './components/BreedItem';

const MainComponent = props => {
  const [spinValue] = useState(new Animated.Value(1));
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    props.loadBreeds();
    Animated.timing(spinValue, {
      toValue: 0,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      setIsAnimated(true);
    }, 5000);
  }, []);

  const RotateData = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Wrapper>
      {!isAnimated && props.isLoading ? (
        <Animated.Image
          source={CatCircle}
          style={{
            width: 200,
            height: 200,
            transform: [{rotate: RotateData}],
          }}
        />
      ) : (
        <FlatList
          data={props.breeds}
          renderItem={({item}) => <BreedItem item={item} />}
          style={{width: '90%'}}
          showsVerticalScrollIndicator={false}
          onEndReached={() => props.loadBreeds()}
          onEndReachedThreshold={100}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled(View)({
  flex: 1,
  backgroundColor: '#f8f8f8',
  justifyContent: 'center',
  alignItems: 'center',
});

const mapStateToProps = state => {
  return {
    breeds: state.breeds,
    isLoading: state.isLoading,
  };
};

export default connect(
  mapStateToProps,
  {loadBreeds},
)(MainComponent);
