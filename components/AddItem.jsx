import { Alert, Button, Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "./Button";

export default function AddItem({ setList }) {
  const [textInput, setTextInput] = useState("");

  const addTask = () => {
    if (textInput.length) {
      setList((prev) => [
        { text: textInput, key: Math.random().toString() },
        ...prev,
      ]);
      setTextInput("");
      Keyboard.dismiss();
    } else {
      Alert.alert(
        "OOPS!!!",
        "For Add Task The Input Need To Contain At Least One Char",
        [
          {
            text: "OK",
            onPress: () => {
              console.log("Pressed OK");
            },
          },
        ]
      );
    }
  };

  console.log(textInput);

  return (
    <View>
      <TextInput
        placeholderTextColor={"rgba(255, 255, 255, 0.75)"}
        style={styles.input}
        placeholder="Enter Task..."
        value={textInput}
        onChangeText={(val) => setTextInput(val)}
      />
      <CustomButton
        text={"Add Task"}
        textStyle={styles.textButton}
        buttonStyle={styles.button}
        onPress={addTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFC93C",
    borderRadius: 10,
    paddingHorizontal: 120,
    paddingVertical: 15,
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 30,
  },
  textButton: { color: "white", fontSize: 20, fontWeight: "600" },

  input: {
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 30,
    marginTop: 20,
  },
});
