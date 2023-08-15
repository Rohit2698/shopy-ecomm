import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../container/splashScreen/SplashScreen';
import {
  BAG_SCREEN_ROUTE,
  BOTTOM_TAB_NAVIGATION,
  FAVOURITE_SCREEN_ROUTE,
  HOME_SCREEN_ROUTE,
  PROFILE_SCREEN_ROUTE,
  SHOP_SCREEN_ROUTE,
  SPLASH_SCREEN_ROUTE,
} from './type';
import Homepage from '../container/homepage/Homepage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Shop from '../container/shop/Shop';
import BagCart from '../container/bag/BagCart';
import Favourite from '../container/favourite/Favourite';
import Profile from '../container/profile/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: 'Home',
        }}
        name={HOME_SCREEN_ROUTE}
        component={Homepage}
      />
      <Tab.Screen name={SHOP_SCREEN_ROUTE} component={Shop} />
      <Tab.Screen name={BAG_SCREEN_ROUTE} component={BagCart} />
      <Tab.Screen name={FAVOURITE_SCREEN_ROUTE} component={Favourite} />
      <Tab.Screen name={PROFILE_SCREEN_ROUTE} component={Profile} />
    </Tab.Navigator>
  );
};

const Approute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SPLASH_SCREEN_ROUTE}>
        <Stack.Screen
          name={SPLASH_SCREEN_ROUTE}
          options={{
            headerShown: false,
          }}
          component={SplashScreen}
        />
        <Stack.Screen
          name={BOTTOM_TAB_NAVIGATION}
          options={{
            headerShown: false,
          }}
          component={BottomTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Approute;
