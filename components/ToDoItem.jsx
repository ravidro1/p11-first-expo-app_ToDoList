import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function ToDoItem({ item, list, setList }) {
  const deleteItem = (item) => {
    setList(() => {
      return list.filter((element) => element.key != item.key);
    });
  };

  return (
    <View style={styles.continer}>
      <TouchableOpacity
        onPress={() => {
          deleteItem(item);
        }}
      >
        <MaterialIcons style={styles.icon} name="delete" size={30} />
      </TouchableOpacity>
      <Text style={styles.text}> {item.text} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    marginTop: 15,
    paddingVertical: 20,
    borderColor: "#FFC93C",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "95%",
  },

  text: {
    color: "white",
    width: "90%",
    maxWidth: "90%",
    // paddingHorizontal: "40%",
    paddingHorizontal: 10,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 10,
    // paddingLeft: 200,
  },
});
