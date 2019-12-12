import React, { useState, Component } from 'react';
import { 
  Platform, 
  StatusBar, 
  StyleSheet, 
  View, 
  ImageBackground, 
  YellowBox 
} from 'react-native';

import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './navigation/AppNavigator';
import Login from './components/Login';
import LoginNavigator from './navigation/LoginNavigator';
import Register from './components/Register';
import Welcome from './components/Welcome';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: awsConfig.REGION,
    userPoolId: awsConfig.USER_POOL_ID,
    userPoolWebClientId: awsConfig.APP_CLIENT_ID
  }
});

export default class App extends Component {
  // var isLoggedIn = false;
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      isAuthenticated: false,
      user: null
    }
  }

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  setUser = user => {
    this.setState({ user: user });
    console.log('app state', this.state);
  }

  render() {
    const authProps = {
      isAuthenticated: this.state.authenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }
    if (!this.state.isAuthenticated) {
      return (
        // <Login authProps={authProps}/>
        <LoginNavigator screenProps={authProps}/>
      );
    // const [isLoadingComplete, setLoadingComplete] = useState(false);
    // if (!isLoadingComplete && !props.skipLoadingScreen) { 
      } else if (this.state.isAuthenticated) {
      return (
        <AppNavigator screenProps={this.state}/>
      );
    }

  }
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

YellowBox.ignoreWarnings([
  'Remote debugger'
]);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',

    // background: linear-gradient('to left', '#30183a', '#19191f'),
  },
});

// const loginNavigator = createStackNavigator({
//   Login: Login,
//   Register: Register,
//   Welcome: Welcome,
//   // HomeScreen: HomeScreen,
//   // AppNav: tabNavigator
// })

// createAppContainer(loginNavigator);
