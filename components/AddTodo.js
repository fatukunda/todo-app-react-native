import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, Modal } from "react-native";

const AddTodo = ({ addTodoItem, isVisible, setModalVisible }) => {
  const [todoText, setTodoText] = useState("");
  const changeTextHadler = (text) => {
    setTodoText(text);
  };
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          style={styles.todoInput}
          value={todoText}
          onChangeText={changeTextHadler}
        />
        <View style={styles.actionButton}>
          <View style={styles.btn}>
            <Button
              title="Add Todo"
              onPress={() => addTodoItem(todoText, setTodoText)}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default AddTodo;

const styles = StyleSheet.create({
  container: {
    padding: 60,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  todoInput: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8
  },
  actionButton: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  btn: {
    width: "40%",
    margin: 5,
  },
});
