import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, ImageBackground, YellowBox } from 'react-native';

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
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
  //   } else {
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
  // }
}

// async function loadResourcesAsync() {
//   await Promise.all([
//     Asset.loadAsync([
//       require('./assets/images/robot-dev.png'),
//       require('./assets/images/robot-prod.png'),
//     ]),
//     Font.loadAsync({
//       // This is the font that we are using for our tab bar
//       ...Ionicons.font,
//       // We include SpaceMono because we use it in HomeScreen.js. Feel free to
//       // remove this if you are not using it in your app
//       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//       'architects': require('./assets/fonts/fonts/Architects_Daughter/ArchitectsDaughter-Regular.ttf'),
//       'bhaina': require('./assets/fonts/fonts/Baloo_Bhaina/BalooBhaina-Regular.ttf'),
//       'da': require('./assets/fonts/fonts/Baloo_Da/BalooDa-Regular.ttf'),
//       'paaji': require('./assets/fonts/fonts/Baloo_Paaji/BalooPaaji-Regular.ttf'),
//       'thambi': require('./assets/fonts/fonts/Baloo_Thambi/BalooThambi-Regular.ttf'),
//       'bowlby': require('./assets/fonts/fonts/Bowlby_One/BowlbyOne-Regular.ttf'),
//       'carter': require('./assets/fonts/fonts/Carter_One/CarterOne-Regular.ttf'),
//       'chewy': require('./assets/fonts/fonts/Chewy/Chewy-Regular.ttf'),
//       'fredoka': require('./assets/fonts/fonts/Fredoka_One/FredokaOne-Regular.ttf'),
//       'fugaz': require('./assets/fonts/fonts/Fugaz_One/FugazOne-Regular.ttf'),
//       'lalezar': require('./assets/fonts/fonts/Lalezar/Lalezar-Regular.ttf'),
//       'lilita': require('./assets/fonts/fonts/Lilita_One/LilitaOne-Regular.ttf'),
//       'racing': require('./assets/fonts/fonts/Racing_Sans_One/RacingSansOne-Regular.ttf'),
//       'rancho': require('./assets/fonts/fonts/Rancho/Rancho-Regular.ttf'),
//     }),
//   ]);
// }

// loadResourcesAsync();

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
