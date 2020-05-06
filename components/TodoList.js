import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import AddTodo from "./AddTodo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isVisible, setIsModalVisible] = useState(true);
  const addTodo = (todo, setTodoText) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Math.random().toString(), text: todo },
    ]);
    setTodoText("");
    setIsModalVisible(false);
  };
  const addNewTodo = () => {
    setIsModalVisible(true)
  }
  return (
    <View style={styles.addBtn}> 
      <AddTodo addTodoItem={addTodo} isVisible={isVisible} setModalVisible={setIsModalVisible} />
      <View>
        <Button title="Add" onPress={addNewTodo} />
      </View>
      <FlatList
        style={styles.todos}
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.todo}>
              <Text style={styles.todoText}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  todos: {
    marginTop: 10,
  },
  todo: {
    backgroundColor: "gray",
    margin: 10,
    height: 40,
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
  },
  todoText: {
    color: "white",
  },
  addBtn: {
    margin: 60,
  },
});
