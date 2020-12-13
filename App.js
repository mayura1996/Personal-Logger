import React, {Component} from 'react';
import {StyleSheet, Text,View,SafeAreaView} from 'react-native';

const App = () =>{
  return(
    <SafeAreaView>
      <View >
        <Text style={styles.firstLabel}>Hello Worlds</Text>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  firstLabel:{
backgroundColor: 'red',
fontSize : 30
  },
  red: {
    color: 'red',
  },
});

export default App;