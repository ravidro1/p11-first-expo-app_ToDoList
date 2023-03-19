import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SandBox() {
  return (
    <View style={styles.continer}>
      <Text style={styles.one}>1</Text>
      <Text style={styles.two}>2</Text>
      <Text style={styles.three}>3</Text>
      <Text style={styles.four}>4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#aaa",
  },
  one: {
    flex: 1,
    backgroundColor: "blue",
    padding: 10,
  },
  two: {
    flex: 3,

    backgroundColor: "green",
    padding: 10,
  },
  three: {
    flex: 1,

    backgroundColor: "red",
    padding: 10,
  },
  four: {
    flex: 8,

    backgroundColor: "coral",
    padding: 10,
  },
});
