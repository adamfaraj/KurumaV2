// import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Picker,
} from 'react-native';

// import { MonoText } from '../components/StyledText';
// import { Divider } from 'react-native-elements';
import Header from '../components/Header/Header';
import { primaryColor } from '../styles/common';

// import Geolocation from 'react-native-geolocation-service';
import RNPickerSelect from 'react-native-picker-select';


import * as user from '../fakeData/profile.json';
import years from '../fakeData/years.json';
// import Years from '../fakeData/years';

// let carYears;
let Years = [];
let Makes = [];
let Models = [];
const carURL = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lon: 0,
      yearSelected: 0,
      makeSelected: '',
      modelSelected: '',
      carYears: [],
      carMakes: [],
      carModels: [],
    } 

  }

  componentDidMount() {
    // console.log('Years', Years());
    console.clear();
    console.log(user);

    fetch(`${carURL}getYears`)
      .then(res => res.text())
      .then(res => res.slice(2, res.length - 2))
      .then(res => JSON.parse(res))
      .then(res => {
        for (var i = res.Years.min_year; i < parseInt(res.Years.max_year) + 1; i++) {
          Years.push(
            {
              'label': `${i}`,
              'value': `${i}`
            }
          );
          this.setState({
            carYears: [...Years].reverse()
          })
        }
      });

    // if (hasLocationPermission) {
    //   Geolocation.getCurrentPosition(
    //       (position) => {
    //           console.log(position);
    //       },
    //       (error) => {
    //           // See error code charts below.
    //           console.log(error.code, error.message);
    //       },
    //       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    //   );
    // }

    // this.setState({user: user})
  }

  onYearSelected(year) {
    this.setState({
      carMakes: [],
      yearSelected: year,
    })
    Makes = [];
  
    fetch(`${carURL}getMakes&year=${year}&sold_in_us=1`)
      .then(res => res.text())
      .then(res => res.slice(2, res.length - 2))
      .then(res => JSON.parse(res))
      .then(res => {
        res.Makes.forEach(make => {
          Makes.push(
            {
              'label': `${make.make_display}`,
              'value': `${make.make_id}`
            }
          );
          this.setState({
            carMakes: Makes
          })
        })
      })
  }

  onMakeSelected(make) {
    this.setState({
      carModels: [],
      makeSelected: make,
    })
    Models = [];
    // https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=ford&year=2005&sold_in_us=1&body=SUV
    fetch(`${carURL}getModels&make=${make}&year=${this.state.yearSelected}&sold_in_us=1`)
      .then(res => res.text()) 
      .then(res => res.slice(2, res.length - 2))
      .then(res => JSON.parse(res))
      .then(res => {
        res.Models.forEach(model => {
          Models.push(
            {
              'label': `${model.model_name}`,
              'value': `${model.model_name}`
            }
          );
          this.setState({
            carModels: Models
          })
        })
      });
    console.log(this.state);
  }

  onModelSelected(model) {
    this.setState({
      modelSelected: model,
    }, () => {
      user[0].vehicle.year = this.state.yearSelected;
      user[0].vehicle.make = this.state.makeSelected;
      user[0].vehicle.model = this.state.modelSelected;
      console.log('user.vehicle', user[0].vehicle);
    })
  }

  render() {
    let myUser = user[0];

    const placeholderYear = {
      label: 'Select a year...',
      value: null,
      color: '#fff',
    }

    const placeholderMake = {
      label: 'Select Make',
      value: null,
      color: '#fff',
    }

    const placeholderModel = {
      label: 'Select Model',
      value: null,
      color: '#fff',
    }
    return (
      <ImageBackground source={require('../assets/images/home.jpg')} style={{flex: 1, width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Header style={styles.header}/>
  
          <ScrollView style={styles.scrollContainer}
            contentContainerStyle={styles.contentContainer}>
  
            <View style={styles.getStartedContainer}>
              <Text style={styles.text}>Hi {myUser.name.first}!</Text>
              
              <RNPickerSelect
                onValueChange={(year) => this.onYearSelected(year)}
                placeholder={placeholderYear}
                items={this.state.carYears} />
              <RNPickerSelect
                onValueChange={(make) => this.onMakeSelected(make)}
                placeholder={placeholderMake}
                items={this.state.carMakes} />
              <RNPickerSelect
                onValueChange={(model) => this.onModelSelected(model)}
                placeholder={placeholderModel}
                items={this.state.carModels} />
              
              {/* <Text style={styles.text}>Your Car: {myUser.vehicle.year} {myUser.vehicle.make} {myUser.vehicle.model}</Text> */}
            </View>

            <View style={styles.upcomingServicesContainer}>
              <Text style={styles.text}>Upcoming Services:</Text>
              {myUser.services.future.map((service) => {
                return(
                    <Text key={service.id} style={styles.service}>{service.service} at {service.mechanic}{'\n'}{service.date.month}, {service.date.day} at {service.date.time}</Text>
                )
              })}
            </View>
            <View style={styles.pastServicesContainer}>
              <Text style={styles.text}>Past Services:</Text>
              {myUser.services.past.map((service) => {
                return(
                  <Text key={service.id} style={styles.service}>{service.service} at {service.mechanic}{'\n'}{service.date.month}, {service.date.day} at {service.date.time}</Text>
                );
              })}
            </View>
          </ScrollView>
  
          <View style={styles.tabBarInfoContainer}>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
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
  },
  scrollContainer: {
    flexGrow: 6
  },
  text: {
    color: primaryColor,
    fontSize: 18,
    textAlign: "center"
  },
  upcomingServicesContainer: {
    marginTop: 25,
  },
  service: {
    backgroundColor: primaryColor,
    color: 'black',
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginVertical: 10,
  }
});
