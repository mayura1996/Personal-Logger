import React, {Component,useState} from 'react';
import {StyleSheet, Text,TextInput,Button,View,SafeAreaView, ToolbarAndroidBase} from 'react-native';
import Todo from './Todo';


const App = () =>{
  const [input,setInput] =useState('');

  const [todos,setTodos] =useState([]);
  
  
  const addTodo = () =>{
  setTodos([input, ...todos]);
  setInput(''); 
  }



  return (
    <SafeAreaView>
      <View>
        <Text style={styles.firstLabel}>To do react native</Text>
      </View>
      {todos.map(todo=>(
        <Todo  title={todo}/>
      ))}


      <TextInput
        style={styles.todoInput}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Button title='Add TODO' onPress={addTodo}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
todoInput:{
margin:20,
height:40,
borderColor:'red',
borderWidth:1
},
  firstLabel:{
backgroundColor: 'red',
fontSize : 30
  },
  red: {
    color: 'red',
  },
});

export default App;