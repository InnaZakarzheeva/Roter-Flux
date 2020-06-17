import React from 'react';
import {Router, Scene, ActionConst, Drawer, Tabs} from 'react-native-router-flux';
import {ChatComponent} from './scenes/ChatComponent';
import {ExerciseComponent} from './scenes/ExerciseComponent';
import {DrawerComponent} from './scenes/DrawerComponent';
import {WelcomeScreen} from './scenes/WelcomeScreen';
import Burger from './burger.png';
import {IntroductionComponent} from './scenes/IntroductionComponent';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Tabs
        key="tabs"
        tabBarStyle={{
          height: 70,
          backgroundColor: '#000000',
        }}
        labelStyle={{
          fontSize: 16,
          height: 45,
        }}
        activeTintColor="#ff7517"
        inactiveTintColor="#f6f4f4"
        >
        <Scene key="tabs_welcome" component={WelcomeScreen} title="Home" hideNavBar />
        <Drawer
          key="welcome"
          drawerImage={Burger}
          title="Chat"
          contentComponent={DrawerComponent}>
          <Scene key="chat" component={ChatComponent} />
        </Drawer>
      </Tabs>
      <Scene key="exercise" component={ExerciseComponent} />
      <Scene key="introduction" component={IntroductionComponent} />
    </Scene>
  </Router>
);

export default RouterComponent;
