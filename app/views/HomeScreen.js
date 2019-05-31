import React from 'react';
import { Container, Header, Title,Card, CardItem, Thumbnail,Image, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { StatusBar, StyleSheet, Text, View } from 'react-native';


export default class HomeScreen extends React.Component {
  state = {
    loading: true
  }
  constructor(props) {
    super(props);

   
}


  render() {
  
    return (
      <Container >
      <Header style={{ backgroundColor: '#cddc39' }}
                
      >
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Начало</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://lingvotutor.ru/wp-content/uploads/2009/11/Food-640x320.jpg'}} />
                <Body>
                  <Text> Таблица с хранителни блокове</Text>
                  <Text note></Text>
                </Body>
              </Left>
            </CardItem>
            
            <CardItem>
                         
              <Right>
              <Button warning 
              onPress={() => this.props.navigation.navigate('Table')}>
                
                <Text> Отвори  </Text></Button>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://lingvotutor.ru/wp-content/uploads/2009/11/Food-640x320.jpg'}} />
                <Body>
                  <Text> Таблица с хранителни блокове</Text>
                  <Text note></Text>
                </Body>
              </Left>
            </CardItem>
            
            <CardItem>
                         
              <Right>
              <Button warning><Text> Отвори  </Text></Button>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://lingvotutor.ru/wp-content/uploads/2009/11/Food-640x320.jpg'}} />
                <Body>
                  <Text> Таблица с хранителни блокове</Text>
                  <Text note></Text>
                </Body>
              </Left>
            </CardItem>
            
            <CardItem>
                         
              <Right>
              <Button warning><Text> Отвори  </Text></Button>
              </Right>
            </CardItem>
          </Card>
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
