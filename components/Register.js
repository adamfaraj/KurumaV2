import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Input, Button } from 'react-native-elements';
import { Auth } from 'aws-amplify';


export default class Register extends Component {

  constructor(props) {
    super(props);
    console.log('poop');
    console.log('props', props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: ""
    }
  }


  onRegister = async event => {
    const { username, password } = this.state;
    try {
      const signUpResponse = await Auth.signUp({
        username,
        password,
      });
      console.log(signUpResponse);
      this.props.navigation.navigate('Welcome');
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
    console.log(this.state);
  };

  onInputChange = event => {
    console.log(this.props);
    console.log(event);
    // this.setState({
    //   [event.target.id]: event.target.value
    // });
    console.log(this.state);
  }

  render() {
    return (
        <View style={styles.container}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Kuruma</Text>
          </View>

          <View style={styles.loginContainer}>
            <Input style={styles.input} onChangeText={(username) => this.setState({username: username})} placeholder='Email' />
            <Input style={styles.input} onChangeText={(password) => this.setState({password: password})} placeholder='Password' secureTextEntry={true}/>
            <Input style={styles.input} value={this.state.confirmPassword} onChangeText={(confirmPassword) => this.setState({confirmPassword: confirmPassword})} placeholder='Confirm Password' secureTextEntry={true}/>
          </View>

          <View style={styles.buttonContainer}>
            <Button buttonStyle={styles.button} titleStyle={styles.button} title="Register" onPress={this.onRegister}/>
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
