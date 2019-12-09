import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';


export default class Welcome extends Component {
  render() {
    return(
      <View style={styles.textContainer}>
        <Text style={styles.thanksText}>Thanks for signing up to Kuruma!</Text>
        <Text style={styles.verifyText}>Please verify your email address.</Text>
        <Text style={styles.emailText}>We just sent you a verification link to your email. Click it and you can log into Kuruma!</Text>
        <View style={styles.buttonContainer}>
          <Button buttonStyle={styles.button} titleStyle={styles.button} title="Back to Login" onPress={() => this.props.navigation.navigate('Login')}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40
  },
  thanksText: {
    fontSize: 20,
    textAlign: 'center',
  },
  verifyText: {
    paddingVertical: 15,
    fontSize: 20,
  },
  emailText: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 50,
  },
  button: {
    borderRadius: 0,
    width: 150,
    backgroundColor: 'black',
  }
})
