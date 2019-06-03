import React from 'react';
import { Container, Header, Title,Card, CardItem, Item, Input,Form,
  Thumbnail, Image, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { StatusBar, StyleSheet, Text, View, ImageBackground } from 'react-native';
import firebase from 'react-native-firebase';
//import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBkkNn6H8lQ6ZfGaxc6bOajvPgRMEA-3eI',
  authDomain: "zonata-app123.firebaseio.com",
  databaseURL: "https://zonata-app123.firebaseio.com/",
  projectId:"zonata-app123",
  storageBucket: "",
}

firebase.initializeApp(firebaseConfig);
export default class Register extends React.Component {


  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: '',
    })
  }
   
  signUpUser = (email, password) => {
      try{
      firebase.auth().createUserWithEmailAndPassword(email,password). then(this.props.navigation.navigate('Login'))
      }
      catch {
        console.warn(error.toString('neee'))
      }
  }

  
  render() {
  
    return (
        <Container>
          <View>
             <ImageBackground source={require('../assets/bgr.jpg')} style={{width: '100%', height:'100%'}}>

              <View style={{marginTop:20, alignSelf:'center'}}>
              <Thumbnail style={{width: 100, height: 100, margin: 20, padding:10}}  source={require('../assets/logo.png')}/>
              </View>
              <Form>
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
                  <Button onPress={()=>this.signUpUser(this.state.email, this.state.password)} success full rounded style={{padding:20, color:'#fff', alignSelf:'center'}}>
                    <Text style={{color:'#fff'}}>
                      Регистрация
                    </Text>
                  </Button>
                </View>
                <View>
                
                </View>
              </View>
              </Form>
              
                    
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
