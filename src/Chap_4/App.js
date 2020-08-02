import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  const [background, setBackground] = useState("blue")

  return (
    <View style={[styles.container, { backgroundColor: background}]}>
      <Text style={styles.button}
        onPress={() => setBackground("green")}>green</Text>
      <Text style={styles.button}
        onPress={() => setBackground("red")}>red</Text>
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
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    textAlign: "center"
  }
});
