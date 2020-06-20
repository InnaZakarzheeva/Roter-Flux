/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Router, Scene, Drawer, Tabs, Actions} from 'react-native-router-flux';
import MainComponent from './scenes/MainComponent';
import SearchComponent from './scenes/SearchComponent';
import {SecondSwipeComponent} from './scenes/SecondSwipeComponent';
import DrawerComponent from './scenes/DrawerComponent';
import {ProfileScreen} from './scenes/ProfileScreen';
import Burger from './assets/images/burger1.jpg';
import {IntroductionComponent} from './scenes/IntroductionComponent';
import {Image, TouchableOpacity} from 'react-native';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Tabs
        key="tabs"
        tabBarStyle={{height: 70, backgroundColor: '#000000'}}
        labelStyle={{fontSize: 16, height: 45}}
        activeTintColor="#ff7517"
        inactiveTintColor="#f6f4f4">
        <Drawer key="drawer" title="Home" contentComponent={DrawerComponent}>
          <Scene
            key="home"
            component={MainComponent}
            renderLeftButton={() => (
              <TouchableOpacity onPress={() => Actions.drawerOpen()}>
                <Image
                  source={Burger}
                  style={{width: 30, height: 30, marginLeft: 20}}
                />
              </TouchableOpacity>
            )}
          />
        </Drawer>
        <Scene
          key="tabs_welcome"
          component={ProfileScreen}
          title="Profile"
          hideNavBar
        />
      </Tabs>
      <Tabs key="swipe_tabs" swipeEnabled tabBarPosition="top" hideTabBar>
        <Scene key="first_swipe" component={SearchComponent} hideNavBar />
        <Scene key="second_swipe" component={SecondSwipeComponent} hideNavBar />
      </Tabs>
      <Scene key="introduction" component={IntroductionComponent} />
    </Scene>
  </Router>
);

export default RouterComponent;
