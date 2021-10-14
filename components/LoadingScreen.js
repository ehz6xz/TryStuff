import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import * as Facebook from 'expo-facebook'

export default class LoadingScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>Loading</Text>
            </View>
        
        )
    
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
