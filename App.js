import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ActivityIndicator, 
  ProgressBarAndroid,
  ProgressViewIOS,
  Dimensions,
  Alert,
  Button,
  Platform,
  Image,
} from 'react-native';

import img from './assets/img.jpg';
import bc from './assets/bc.jpg';
import lk from './assets/lk.jpg';
import ctm from './assets/ctm.jpg';

const { height, width } = Dimensions.get("window");

export default function App() {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()}`);
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* <ActivityIndicator size="large" color="#61DBFB" />
      {Platform.OS === "ios" && <ProgressViewIOS progress={0.5} color="#3f3f3f"/> }
      {Platform.OS === "android" && 
        <ProgressBarAndroid 
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5} 
          color="#3f3f3f"
        /> 
      } */}

      {/* <Image style={styles.image} source={img} /> */}

      <Image style={styles.image} source={bc} />

      <Image style={styles.image} source={lk} />

      <Image style={styles.image} source={ctm} />


      {/* <Text style={styles.text}>
        Ra ra Rasputin
      </Text>

      <Text style={[styles.text, styles.selectedText]}>
        Russia's greatest love machine 
      </Text>

      <Text style={styles.text}>
        It was a shame how he carried on
      </Text> */}

      {/* <Button title="Click here!" onPress={onButtonPress}/>
      <Text>Height: {height.toFixed(2)}</Text>
      <Text>Width: {width.toFixed(2)}</Text> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: '#eee',
    // marginTop: 40,
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: 15,
    color: "#ffffff",
    backgroundColor: "#66c2ff",
    margin: 10,
    padding: 5
  },
  selectedText: {
    backgroundColor: "#3f3f3f",
    color: "#ffffff"
  },
  image: {
    // height: Dimensions.get('window').height - 10,
    flex: 1,
    width: Dimensions.get('window').width - 10,
    // resizeMode: 'center',
    borderRadius: 15,
  }
});
