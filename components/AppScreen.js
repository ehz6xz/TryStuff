import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

const RootStack = createBottomTabNavigator()

export default class AppScreen extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <RootStack.Navigator 
          screenOptions={({route})=>({
            tabBarIcon: ({focused, color, size})=>{
              let iconName
              if(route.name === 'Home'){iconName = 'home'}
              else if(route.name==='Details'){iconName = 'contrast-outline'}
              return <Ionicons name ={iconName} size={size} color = {color}/>
            }
          })}


        
        initialRouteName="Home">
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Details" component={DetailsScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
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
