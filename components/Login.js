import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Input, Button } from 'react-native-elements'
import Register from './Register';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';



class Login extends Component {

  state = {
    email: '',
    password: '',
  }
  onLogin() {
    console.log(state);
  };

  render() {
    return (
        <View style={styles.container}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Kuruma</Text>
          </View>

          <View style={styles.loginContainer}>
            <Input style={styles.input} placeholder='Email' />
            <Input style={styles.input} placeholder='Password' />
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
