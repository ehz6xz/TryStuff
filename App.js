import React, {useState, useEffect} from 'react'
import {Text, View, Button, StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default function App(){
  let [joke, setJoke] = useState("loading...")

  useEffect(()=>{
    let getJoke = async ()=> {
      let response = await fetch("http://api.icndb.com/jokes/random")
      let jokeObject = await response.json()
      setJoke(jokeObject.value.joke)
    };
    getJoke();
  }, [])

  return (
    <View style={styles.container}>
    <Text>{joke}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
  }
})