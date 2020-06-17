import React from 'react';
import {Router, Scene, ActionConst, Drawer} from 'react-native-router-flux';
import {ChatComponent} from './scenes/ChatComponent';
import {ExerciseComponent} from './scenes/ExerciseComponent';
import {DrawerComponent} from './scenes/DrawerComponent';
import {WelcomeScreen} from './scenes/WelcomeScreen';
import Burger from './burger.png';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Drawer
        key="welcome"
        drawerImage={Burger}
        contentComponent={DrawerComponent}>
        <Scene key="chat" component={ChatComponent} type={ActionConst.RESET} />
      </Drawer>
      <Scene key="exercise" component={ExerciseComponent} />
    </Scene>
  </Router>
);

export default RouterComponent;
