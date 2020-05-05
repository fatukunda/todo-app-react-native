import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";

const AddTodo = ({ addTodoItem }) => {
  const [todoText, setTodoText] = useState("");
  const changeTextHadler = (text) => {
    setTodoText(text);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.todoInput}
        value={todoText}
        onChangeText={changeTextHadler}
      />
      <View style={styles.actionButton}>
        <View style={styles.btn}>
          <Button title="Add Todo" onPress={() => addTodoItem(todoText)} />
        </View>
        <View style={styles.btn}>
          <Button title="CANCEL" color="red" />
        </View>
      </View>
    </View>
  );
};
export default AddTodo;

const styles = StyleSheet.create({
  container: {
    padding: 60,
  },
  todoInput: {
    borderColor: "gray",
    borderWidth: 1,
  },
  actionButton: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  btn: {
    width: "40%",
  },
});
