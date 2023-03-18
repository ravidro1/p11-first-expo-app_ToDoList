import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import AddItem from "./AddItem";

export default function Body() {
  const [list, setList] = useState([
    { text: "1", key: 1 },
    { text: "2", key: 2 },
    { text: "3", key: 3 },
    { text: "4", key: 4 },
  ]);

  return (
    <View style={styles.continer}>
      <AddItem setList={setList} />
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <ToDoItem item={item} list={list} setList={setList} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "88%",
    backgroundColor: "#0081C9",
  },

  text: {},
});
