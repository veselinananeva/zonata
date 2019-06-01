import React from 'react';
import { Container, Header, Title,Card, CardItem, Item, Input,
  Thumbnail, Image, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { StatusBar, StyleSheet, Text, View, ImageBackground } from 'react-native';
import firebase from 'react-native-firebase';

export default class Register extends React.Component {
  state = {
    loading: true, 
    email: '',
    password: ''
   
  }

  onRegister = () => {
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
          console.warn(user);
        // If you need to do anything with the user, do it here
        // The user will be logged in automatically by the
        // `onAuthStateChanged` listener we set up in App.js earlier
      })
      .catch((error) => {
        const { code, message } = error;
        console.warn(error);
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  }

  render() {
  
    return (
        <Container>
          <View>
             <ImageBackground source={require('../assets/bgr.jpg')} style={{width: '100%', height:'100%'}}>

              <View style={{marginTop:20, alignSelf:'center'}}>
              <Thumbnail style={{width: 100, height: 100, margin: 20, padding:10}}  source={require('../assets/logo.png')}/>
              </View>

              <View style={{marginTop:80}}>
                
                <View style={{padding:10}}>
                <Item rounded>
                  <Input
                  onChangeText={(text)=>{this.setState({email: text})}}
                  placeholder='Имейл' placeholderTextColor="#fff" />
                </Item>
                </View>

                <View style={{padding:10}}>
                <Item rounded>
                  <Input
                    onChangeText={(text)=>{this.setState({password: text})}}
                  placeholder='Парола' placeholderTextColor="#fff" secureTextEntry={true} />
                </Item>
                </View>
                <View style={{padding:10}}>
                <Item rounded>
                  <Input placeholder='Повтори Парола' placeholderTextColor="#fff" secureTextEntry={true} />
                </Item>
                </View>
                <View style={{padding:10}}> 
                  <Button onPress={this.onRegister.bind(this)} success full rounded style={{padding:20, color:'#fff', alignSelf:'center'}}>
                    <Text style={{color:'#fff'}}>
                      Регистрация
                    </Text>
                  </Button>
                </View>
                <View>
                
                </View>
              </View>
                    
             </ImageBackground>
        </View>
        </Container>
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
