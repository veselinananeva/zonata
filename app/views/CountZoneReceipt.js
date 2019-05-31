import React from 'react';
import { Container, Header, List, ListItem, Input, Item, Title,
     Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { StatusBar, StyleSheet, Text, View } from 'react-native';


export default class CountZoneReceipt extends React.Component {
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
            <Button transparent onPress={() => this.props.navigation.openDrawer()} >
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Зонова рецепта</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
            <View style={{flexDirection: "row"}}>
                <View style={{width: 200, height: 50, marginRight:10}}>
                    <Item>
                        <Input placeholder="Въведи продукт" />
                    </Item>
                </View>
                <View style={{width: 90, height: 50, marginRight:10}}>
                    <Item>
                        <Input placeholder="к-во" />
                    </Item>
                </View>
                <View style={{width: 120, height: 50, marginRight:10}}> 
                    <Button  danger>
                        <Text>  +   </Text>
                    </Button>
                </View>
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
