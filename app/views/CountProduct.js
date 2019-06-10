import React from 'react';
import { Container, Header, Title,Content, Card, CardItem, Form, Item, Input, Label, TextInput,
    Button, Left, Right, Body, Icon } from 'native-base';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import firebase from 'react-native-firebase';


export default class HomeScreen extends React.Component {
  state = {
    loading: true, 
   
  }
  constructor(props) {
    super(props);
    
    this.state = {
        fatValue : '',
        carbValue : '',
        protValue : '',
        fatBlock: 0, 
        carbBlock: 0,
        protBlock: 0
    };
}

calculateBlock = () => {
    const { fatValue, carbValue, protValue} = this.state;
    this.setState (
        {
            fatBlock: (fatValue) / 3 ,
            carbBlock: (carbValue) / 9,
            protBlock: (protValue) / 7
        }
    );
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
          <Title>По етикет</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
          <View>
            <Text note style={{textAlign:'center'}} padder> 
                Моля въведете точните грамажи на хранителният съставв спрямо именуваните полелета.
             </Text>
          </View>
         
      <Form>
            <Item floatingLabel>
              <Label>Мазнини</Label>
              <Input  value={this.state.fatValue}
                    onChangeText={(fatValue) => this.setState({fatValue})}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Въглехидрати</Label>
              <Input value={this.state.carbValue}
                    onChangeText={(carbValue) => this.setState({carbValue})}              
              />
            </Item>
            <Item floatingLabel last>
              <Label>Белтъци</Label>
              <Input value={this.state.protValue}
                    onChangeText={(protValue) => this.setState({protValue})}
              />
            </Item>

            <View style={{flex: 1, flexDirection: 'row', marginTop:20, alignSelf: 'flex-end'}}> 
                        <Button danger style={{marginRight: 10, padding:10}}
                        onPress={() => {
                        ;
                        }}>
                        <Text style={{color:'#fff'}}> Изчисти  </Text>
                    </Button>
                    <Button success style={{marginRight: 10, padding:10}}
                        onPress={this.calculateBlock}>
                        <Text style={{color:'#fff'}}> Сметни </Text>
                    </Button>
             </View>

          </Form>
              <Card>
                <View style={{padding:20}}>
                            <View style={{ flexDirection: 'row', borderBottomColor:'#e6e6e6' }}>
                                <Text style={{fontSize:25}}> {this.state.fatBlock}</Text>
                                <Text style={{fontSize:25}}> БМ</Text>
                            </View> 
                            <View style={{ flexDirection: 'row', borderBottomColor:'#e6e6e6' }}>
                                <Text style={{fontSize:25}}> {this.state.carbBlock} </Text> 
                                <Text style={{fontSize:25}}> БВ</Text>
                            </View> 
                            <View style={{ flexDirection: 'row', borderBottomColor:'#e6e6e6' }}>
                                <Text style={{fontSize:25}}> {this.state.protBlock} </Text> 
                                <Text style={{fontSize:25}}> БП</Text>
                            </View> 
                </View>
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
