/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {connect} from 'react-redux';
import {View, Animated, Easing, FlatList} from 'react-native';
import styled from 'styled-components';
import CatCircle from '../assets/images/loader.jpg';
import {loadBreeds} from '../services/actions/index';
import {BreedItem} from './components/BreedItem';

class MainComponent extends React.Component {
  state = {
    isAnimated: false,
    spinValue: new Animated.Value(1),
  };

  componentDidMount = () => {
    this.props.loadBreeds();
    Animated.timing(this.state.spinValue, {
      toValue: 0,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      this.setState({
        isAnimated: true,
      });
    }, 5000);
  };

  renderItem = ({item}) => {
    return <BreedItem item={item} />;
  };

  render() {
    const RotateData = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    const {isAnimated} = this.state;
    const {isLoading, breeds} = this.props;
    console.log(isLoading, isAnimated);
    return (
      <Wrapper>
        {!isAnimated && isLoading ? (
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
            data={breeds}
            renderItem={this.renderItem}
            style={{width: '90%'}}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Wrapper>
    );
  }
}

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
