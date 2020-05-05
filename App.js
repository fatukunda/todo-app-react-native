import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((currentTodos) => [...currentTodos, todo]);
  };
  return (
    <View>
      <AddTodo addTodoItem={addTodo} />
      <ScrollView>
        {todos.map((todo) => (
          <Vie>
            <Text>{todo}</Text>
          </Vie>
        ))}
      </ScrollView>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({});
