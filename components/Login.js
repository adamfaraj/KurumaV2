import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Input, Button } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Auth } from 'aws-amplify';

import Register from './Register';
import Welcome from './Welcome';
import HomeScreen from '../screens/HomeScreen';
import tabNavigator from '../navigation/MainTabNavigator';
import AppNavigator from '../navigation/AppNavigator';



class Login extends Component {

  state = {
    username: '',
    password: '',
  }

  onLogin = async event => {
    console.log(this.state);
    try {
      const user = await Auth.signIn(this.state.username, this.state.password);
      console.log(user);
      this.props.navigation.navigate('AppNav');
    } catch (error) {
      let err = null;
      !error.message ? err = { "message": error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      });
    }
  };

  render() {
    return (
        <View style={styles.container}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Kuruma</Text>
          </View>

          <View style={styles.loginContainer}>
            <Input style={styles.input} onChangeText={(username) => this.setState({username: username})} placeholder='Email' />
            <Input style={styles.input} onChangeText={(password) => this.setState({password: password})} placeholder='Password' secureTextEntry={true}/>
          </View>

          <View style={styles.buttonContainer}>
            <Button buttonStyle={styles.button} titleStyle={styles.button} title="Login" onPress={this.onLogin}/>
            <Button buttonStyle={styles.button} titleStyle={styles.button} title="Register" onPress={() => this.props.navigation.navigate('Register')}/>
          </View>
        </View>
    )
  };
}

const appNavigator = createStackNavigator({
  Login: Login,
  Register: Register,
  Welcome: Welcome,
  // HomeScreen: HomeScreen,
  AppNav: tabNavigator
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    // backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'RacingSansOne-Regular',
    fontSize: 36,
  },
  loginContainer: {
    flex: 2,
    // backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'pink',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    borderRadius: 0,
    width: 100,
    backgroundColor: 'black',
  }
})

export default createAppContainer(appNavigator);
