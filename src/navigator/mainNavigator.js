import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps203570Navigator from '../features/Maps203570/navigator';
import Additem203569Navigator from '../features/Additem203569/navigator';
import Maps203565Navigator from '../features/Maps203565/navigator';
import UserProfile203561Navigator from '../features/UserProfile203561/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps203570: { screen: Maps203570Navigator },
Additem203569: { screen: Additem203569Navigator },
Maps203565: { screen: Maps203565Navigator },
UserProfile203561: { screen: UserProfile203561Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
