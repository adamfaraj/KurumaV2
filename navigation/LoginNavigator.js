import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../components/Login';
import Register from '../components/Register';
import Welcome from '../components/Welcome';

const LoginNavigator = createStackNavigator({
  Login: Login,
  Register: Register,
  Welcome: Welcome,
  // HomeScreen: HomeScreen,
  // AppNav: tabNavigator
})

export default createAppContainer(LoginNavigator);
