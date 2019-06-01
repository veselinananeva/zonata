import React from 'react';
import { Container, Header, Title,Card, CardItem, Item, Input,
  Thumbnail, Image, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { StatusBar, StyleSheet, Text, View, ImageBackground } from 'react-native';
import firebase from 'react-native-firebase';

export default class LoginScreen extends React.Component {
  state = {
    loading: true, 
   
  }



  render() {
  
    return (
        <Container>
          <View>
             <ImageBackground source={require('../assets/bgr.jpg')} style={{width: '100%', height:'100%'}}>

              <View style={{marginTop:100, alignSelf:'center'}}>
              <Thumbnail source={require('../assets/logo.png')}/>
              </View>

              <View style={{marginTop:80}}>
                
                <View style={{padding:10}}>
                <Item rounded>
                  <Input placeholder='Потребителско име' placeholderTextColor="#fff" />
                </Item>
                </View>

                <View style={{padding:10}}>
                <Item rounded>
                  <Input placeholder='Парола' placeholderTextColor="#fff" secureTextEntry={true} />
                </Item>
                </View>
                <View style={{padding:10}}> 
                  <Button success full rounded style={{padding:20, color:'#fff', alignSelf:'center'}}>
                    <Text style={{color:'#fff'}}>
                      Влез
                    </Text>
                  </Button>
                </View>
                <View>
                <Button transparent warning style={{padding:20, color:'#fff', alignSelf:'center'}}>
                    <Text style={{color:'#fff'}}>Нямаш профил?</Text>
                  </Button>
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
