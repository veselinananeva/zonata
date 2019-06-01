import React from 'react';
import { Container, Header, Title,Card, CardItem, Thumbnail,Image, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import AppNavigator from './app/navigator/AppNavigator';


export default class App extends React.Component {
  state = {
    loading: true
  }
 

  render() {
  
    return (
      <AppNavigator/>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
