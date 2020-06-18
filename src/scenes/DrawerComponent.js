import React from 'react';
import {connect} from 'react-redux';
import {Text, TouchableOpacity, ImageBackground, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styled from 'styled-components';
import Background from '../assets/images/background.jpg';

class DrawerComponent extends React.Component {
  render() {
    const {name} = this.props;
    return (
      <Drawer source={Background}>
        <NameWrapper>
          <Name>
            Hi,{'\n'}
            {name}
          </Name>
        </NameWrapper>
        <DrawerItem
          onPress={() => {
            Actions.swipe_tabs();
            Actions.drawerClose();
          }}>
          <ItemText>Move to exercise</ItemText>
        </DrawerItem>
      </Drawer>
    );
  }
}

const Drawer = styled(ImageBackground)({
  flex: 1,
  alignItems: 'center',
});

const NameWrapper = styled(View)({
  width: '80%',
  height: 100,
  backgroundColor: '#ffffff',
  opacity: 0.9,
  marginTop: 50,
  borderRadius: 15,
  justifyContent: 'center',
  alignItems: 'center',
});

const Name = styled(Text)({
  fontSize: 20,
  fontWeight: '700',
});

const DrawerItem = styled(TouchableOpacity)({
  width: '80%',
  height: 50,
  backgroundColor: '#ffffff',
  opacity: 0.9,
  borderRadius: 15,
  position: 'absolute',
  top: 200,
  alignItems: 'center',
  justifyContent: 'center',
});

const ItemText = styled(Text)({
  fontSize: 18,
  fontWeight: '700',
  width: 'auto',
});

const mapStateToProps = state => {
  return {
    name: state.name,
  };
};

export default connect(mapStateToProps)(DrawerComponent);
