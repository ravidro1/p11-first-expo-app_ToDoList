import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function ToDoItem({ item, list, setList }) {
  const deleteItem = (item) => {
    setList(() => {
      return list.filter((element) => element.key != item.key);
    });
  };

  return (
    <TouchableOpacity
      style={styles.continer}
      onPress={() => {
        deleteItem(item);
      }}
    >
      <Text style={styles.text}> {item.text} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  continer: {
    marginTop: 15,
    paddingHorizontal: 120,
    paddingVertical: 20,
    borderColor: "#FFC93C",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 15,
  },

  text: { color: "white" },
});
