import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function CustomButton({
  text,
  textStyle,
  onPress,
  buttonStyle,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyle}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
