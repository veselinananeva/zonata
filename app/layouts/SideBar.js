import React from 'react';
import { Container, List, ListItem, Badge, Thumbnail,Image, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { StatusBar, StyleSheet, Text, View, ImageBackground,  } from 'react-native';
import HomeScreen from '../views/HomeScreen';
import CountZoneReceipt from '../views/CountZoneReceipt';

export default class SideBar extends React.Component {
  state = {
    loading: true
  }
  constructor(props) {
    super(props);

   
}

  render() {
  
    return (
      <Container >
          <Content>
          <View >
            <ImageBackground source={{uri: 'https://image.freepik.com/free-vector/beautiful-green-texture-background_1035-12479.jpg'}} style={{width: 300, height:150}}>
              <View style={{paddingTop:45, paddingLeft:20}}>
                <Thumbnail source={{uri: 'https://www.freelance.bg/images/avatars/1/4/5/1/0/28167788_1793687700663324_6634003648033155015_n.jpg'}} />
              </View>
              <View>
              <Text style={{fontSize:20, color: '#ffffff', paddingLeft:20}}>Веселина Нанева</Text>
              </View>
            </ImageBackground>
            </View>
          
          <View style={{marginTop: 10}}>    
          <List>
            <ListItem button
                onPress={() => this.props.navigation.navigate('Home')}> 
                <Text> Начало </Text>
            </ListItem>
            <ListItem button
                >
              <Text>Моите рецепти</Text> 
              <Badge success style={{marginLeft:5}}>
                <Text style={{color: '#ffffff', padding:5 }}>2</Text>
              </Badge>
            </ListItem>
            <ListItem button
               onPress={() => this.props.navigation.navigate('CountProduct')} >
              <Text>Пресметни по етикет</Text>
            </ListItem>
            
          </List>
          </View>

          </Content>
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
