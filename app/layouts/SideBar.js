import React from 'react';
import { Container, List, ListItem, Header, Title,Card, CardItem, Thumbnail,Image, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../views/HomeScreen';


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
              <Text> ГОШО </Text>

              
          <List>
            <ListItem button
                onPress={() => this.props.navigation.navigate('Home')}> 
                <Text> Начало </Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        
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
