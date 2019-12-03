// import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

// import { MonoText } from '../components/StyledText';
import { Button } from 'react-native-elements';
import Header from '../components/Header/Header';
import mechanics from '../fakeData/mechanics.json';
import { primaryColor } from '../styles/common';

export default class MechanicsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: {},
    }
  };

  componentDidMount() {
    // return fetch('../fakeData/mechanics.json')
    //   .then((response) => response.json())
    //   .then((res) => console.log('res', res))
    //   .catch((err) => console.log(err));
    this.setState({
      dataSource: mechanics
    })
  }

  render() {
    let today = new Date();
    let dayOfTheWeek = today.getDay().toString();
    JSON.stringify(this.state.dataSource);
    return (
      <ImageBackground source={require('../assets/images/mechanics.png')} style={{flex: 1, width: '100%', height: '100%'}}>
        <View style={styles.container}>
    
          <Header />
            <View>
              <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => (
                  <View style={styles.listItem}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.address}>{item.address.street}</Text>
                    <Text style={styles.address}>{item.address.city}, {item.address.state} {item.address.zipcode}</Text>
                    <Button titleStyle={styles.callButtonTitle} buttonStyle={styles.callButton} title={item.phone} />
                    <Text style={styles.item}>Hours {item.hours[dayOfTheWeek].open} - {item.hours[dayOfTheWeek].close}</Text>
                  </View>
                )}
                keyExtractor={({id}, index) => id}
              />
            </View>
        </View>
      </ImageBackground>
    );
  };

};

MechanicsScreen.navigationOptions = {
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
    // flex: 1,
    color: '#fff',
  },
  text: {
    color: primaryColor,
    fontSize: 16,
  },
  item: {
    color: primaryColor,
    flexDirection: 'column',
    marginTop: 5,
  },
  name: {
    color: primaryColor,
    fontSize: 26,
    marginBottom: 5,
  },
  address: {
    color: primaryColor,
    fontSize: 16,
  },
  listItem: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: primaryColor,
  },
  callButton: {
    backgroundColor: primaryColor,
    width: '50%',
    paddingHorizontal: 15,
    marginTop: 5,
  },
  callButtonTitle: {
    color: 'black',
  }
});
