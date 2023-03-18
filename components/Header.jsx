import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.continer}>
      <Text style={styles.text}>First Expo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC93C",
    width: "100%",
    height: "12%",
    paddingTop: 30,
  },

  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
  },
});
