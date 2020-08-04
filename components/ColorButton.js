import React from "react";
import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableHighlight 
} from "react-native";

import { EvilIcons } from '@expo/vector-icons'

export default function ColorButton({ backgroundColor, onPress = f => f , toRemoveColor = f => f}) {
  return (
    <>
      <View style={styles.line}>
        <TouchableHighlight 
          style={styles.button}
          onPress={() => onPress(backgroundColor)}
          underlayColor="orange"
        >
            <View style={styles.row}>
              <View style={[styles.sample, { backgroundColor }]} />
                <Text style={styles.buttonText}>{backgroundColor}</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => toRemoveColor(backgroundColor)} style={styles.buttonDel}>
          <EvilIcons name="trash" size={50} color="white" />
        </TouchableHighlight>
      </View>
    
    </>

  )
}

const styles = StyleSheet.create({
  button: {
    flexGrow: 1,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255, .8)"
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
    flexGrow: 0
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
  buttonDel: {
    borderRadius: 4,
    backgroundColor: 'red',
    alignItems: "center",
    marginRight: 5
  },
  buttonDelText: {
    fontSize: 20,
    textAlign: "center",
  }
});