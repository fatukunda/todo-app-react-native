import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import AddTodo from "./AddTodo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Math.random().toString(), text: todo },
    ]);
  };
  return (
    <View>
      <AddTodo addTodoItem={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.todo}>
            <Text style={styles.todoText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  todos: {},
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
});
