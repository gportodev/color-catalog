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
} from 'react-native';

const { height, width } = Dimensions.get("window");

export default function App() {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()}`);
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <ActivityIndicator size="large" color="#61DBFB" />
      {Platform.OS === "ios" && <ProgressViewIOS progress={0.5} color="#3f3f3f"/> }
      {Platform.OS === "android" && 
        <ProgressBarAndroid 
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5} 
          color="#3f3f3f"
        /> 
      }
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Text style={[styles.text, styles.selectedText]}>Open up App.js to start working on your app!</Text>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Button title="Click here!" onPress={onButtonPress}/>
      <Text>Height: {height.toFixed(2)}</Text>
      <Text>Width: {width.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: "#3f3f3f",
    backgroundColor: "#DDD",
    margin: 10,
    padding: 5
  },
  selectedText: {
    backgroundColor: "#3f3f3f",
    color: "#DDD"
  }
});
