import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import MechanicsScreen from '../screens/MechanicsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Register from '../components/Register';
import Login from '../components/Login';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Your Kuruma',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused} name={Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home'} />
  ),
};

HomeStack.path = '';

const ServicesStack = createStackNavigator(
  {
    Services: ServicesScreen,
  },
  config
);

ServicesStack.navigationOptions = {
  tabBarLabel: 'Services',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-build${focused ? '' : '-outline'}`: 'md-build'} />
  ),
};

ServicesStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />
  ),
};

SettingsStack.path = '';

const MechanicsStack = createStackNavigator(
  {
    Mechanics: MechanicsScreen,
  },
  config
);

MechanicsStack.navigationOptions = {
  tabBarLabel: 'Mechanics',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-car' : 'md-car'} />
  ),
};

MechanicsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ServicesStack,
  MechanicsStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
