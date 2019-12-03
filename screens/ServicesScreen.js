// import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  SectionList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

// import { MonoText } from '../components/StyledText';
// import { Divider } from 'react-native-elements';
import Header from '../components/Header/Header';

import { primaryColor } from '../styles/common';

export default function ServicesScreen() {
  return (
    <ImageBackground source={require('../assets/images/services2.jpg')} style={{flex: 1, width: '100%', height: '100%'}}>

      <View style={styles.container}>

        <Header />

        {/* <ScrollView style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}> */}

          <View style={styles.getStartedContainer}>
            {/* <Text style={styles.text}>Services</Text> */}
            <SectionList
              sections={[
                {
                  title: 'Brakes',
                  data: [
                    'Brake Fluid Flushing',
                    'Caliper Replacement',
                    'Pad Replacement',
                    'Resurface Rotors',
                  ]
                },
                {
                  title: 'Inspections',
                  data: [
                    'Safety',
                    'Safety & Emissions'
                  ]
                },
                {
                  title: 'Engine',
                  data: [
                    'Spark Plug Replacement - 4 Cylinder',
                    'Spark Plug Replacement - 6 Cylinder',
                    'Spark Plug Replacement - 8 Cylinder',
                  ]
              },
                {
                  title: 'Exhaust',
                  data: [
                    'Oxygen Sensor Replacement - 1',
                    'Oxygen Sensor Replacement - 2',
                  ]
                },
                {
                  title: 'Fluid Flushes',
                  data: [
                    'Brake Fluid Flushing',
                    'Manual Transmission Flush',
                    'Power Steering Flush',
                    'Radiator/Coolant Flush',
                    'Windshield Wiper Flush',
                  ]
                },
                {
                  title: 'Electrical Services',
                  data: [
                    'Battery Replacement',
                  ]
                },
                {
                  title: 'Heating and Cooling',
                  data: [
                    'Recharge A/C', 
                  ]
                },
                {
                  title: 'Oil Changes',
                  data: [
                    'Full Synthetic Oil Change',
                    'Synthetic Blend Oil Change',
                  ]
                },
                {
                  title: 'Suspension',
                  data: [
                  'Alignment',
                  ]
                },
                {
                  title: 'Tires',
                  data: [
                    'Tire Balancing',
                    'Tire Rotation',
                  ]
                },
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
              renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
              keyExtractor={(item, index) => index}
            />
          </View>
        {/* </ScrollView> */}

        <View style={styles.tabBarInfoContainer}>
        </View>
    </View>
      
    </ImageBackground>
  );
}

ServicesScreen.navigationOptions = {
  header: null,
};

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    color: '#fff',
    // marginTop: 30
  },
  header: {
    flex: 1,
    fontSize: 26,
    textAlign: 'left',
    top: 35,
    left: 10,
    color: '#fff'
  },
  scrollContainer: {
    flexGrow: 6
  },
  text: {
    color: primaryColor,
    fontSize: 16,
  },
  sectionHeader: {
    color: primaryColor,
    // backgroundColor: '#353333',
    backgroundColor: 'black',
    fontSize: 25,
    padding: 5,
  },
  item: {
    color: primaryColor,
    // padding: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,
    fontSize: 20,
    // height: 44,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  }
});
