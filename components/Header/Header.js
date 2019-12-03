import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends Component {
  render() {
    return(
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Kuruma</Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: 'white',
    height: 60,
    marginTop: 40,
  },
  headerText: {
    fontSize: 34,
    paddingLeft: 10,
    fontFamily: 'RacingSansOne-Regular'
  }
})
