import React, {Component,useState,useEffect} from 'react';
import {StyleSheet, Text,ScrollView,TextInput,Button,View,SafeAreaView, ToolbarAndroidBase} from 'react-native';
import Todo from './Todo';
import {
  BarChart
} from "react-native-chart-kit";

const App = () =>{
  const [description,setDescription] =useState('');
  const [amount,setAmount]=useState('');
  const [total,setTotal] =useState(0)
  const [gigs,setGigs] =useState([
    {
      description : 'Freelance job with Mayura',
      amount : 499.99
    }
  ]);
  
  useEffect(() => {
  setTotal(gigs.reduce((total, gig) => total+Number(gig.amount),0));
  }, [gigs])



  const addGig = () =>{
setGigs([...gigs,{
  description: description,
  amount: amount
}])

setDescription('');
setAmount('');
  }



  return (
    <SafeAreaView>
      <View>
        <Text style={styles.firstLabel}>To do react native</Text>
      <Text>{total}</Text>
      </View>
 
      <TextInput
        style={styles.todoInput}
        value={description}
        placeholder='Enter a description'
        onChangeText={(text) => setDescription(text)}
      />
     <TextInput
        style={styles.todoInput}
        value={amount}
        keyboardType='numeric'
        placeholder='Enter the amount you made in USD ($)'
        onChangeText={(text) => setAmount(text)}
      />

      <Button disabled={!amount || !description } title='Add Gig' onPress={addGig}/>
    {
      gigs.map(gig =>(
        <View>
        <Text>{gig.description}</Text>
        <Text>{gig.amount}</Text>
        </View>
      ))
    }
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
todoInput:{
  marginBottom:10,
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