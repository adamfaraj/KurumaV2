import React, { useState } from 'react';
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
import AppNavigator from './navigation/AppNavigator';
import Login from './components/Login';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: awsConfig.REGION,
    userPoolId: awsConfig.USER_POOL_ID,
    userPoolWebClientId: awsConfig.APP_CLIENT_ID
  }
});

export default function App(props) {
  // var isLoggedIn = false;
  state = {
    isLoggedIn: false,
  }
  // console.log(this.state);
  console.log('props', props);
  if (!this.state.isLoggedIn) {
    return (
      <Login state={state}/>
    );
  // const [isLoadingComplete, setLoadingComplete] = useState(false);
  // if (!isLoadingComplete && !props.skipLoadingScreen) { 
  //   console.log('isLoadingComplete', isLoadingComplete);
  //   console.log('props', props);
  //   return (
  //     <ImageBackground source={require('./assets/')}></ImageBackground>
  //     // <AppLoading
  //     //   startAsync={loadResourcesAsync}
  //     //   onError={handleLoadingError}
  //     //   onFinish={() => handleFinishLoading(setLoadingComplete)}
  //     // />
  //     );
    } else {
  //   console.log('isLoadingComplete', isLoadingComplete);
  //   console.log('props', props);
    return (
      <ImageBackground source={require('./assets/images/15025106456_15fb5b0c12_z.jpg')} style={{flex: 1, width: '100%', height: '100%'}}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar backgroundColor="white" barStyle="dark-content" translucent="false" />}
          <AppNavigator />
        </View>
      </ImageBackground>
    );
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
