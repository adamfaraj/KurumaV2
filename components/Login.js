import React, { Component } from 'react';
import { Input, Button } from 'react-native-elements'
import { View, Text, StyleSheet } from 'react-native';


export default class Login extends Component {
  someFunction() {
    console.log('poop');
  }

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
            <Button style={styles.button} title="Login" />
            <Button style={styles.button} title="Register" />
          </View>
        </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'RacingSansOne-Regular',
    fontSize: 36,
  },
  loginContainer: {
    flex: 2,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'pink',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    borderRadius: 0,
    width: 100,
    backgroundColor: 'white',
    color: 'black',
  }
})
