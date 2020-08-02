import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

export default function App() {
  const [background, setBackground] = useState("blue")

  return (
    <View style={[styles.container, { backgroundColor: background}]}>
      <TouchableHighlight 
        style={styles.button}
        onPress={() => setBackground("yellow")}
        underlayColor="orange"
      >
        <View style={styles.row}>
          <View style={styles.sample} />
          <Text style={styles.buttonText}>Yellow</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    backgroundColor: "rgba(255,255,255, .8)"
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "white"
  }
});
