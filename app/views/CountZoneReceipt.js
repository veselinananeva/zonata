import React from 'react';
import { Container, Header, List, ListItem, Input, Item, Title,
     Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { StatusBar, StyleSheet, Text, View, Modal, Alert, TouchableHighlight  } from 'react-native';


export default class CountZoneReceipt extends React.Component {
  state = {
    loading: true, 
    data: [1],
    modalVisible: false,
    
  }
  constructor(props) {
    super(props);

  }
  addData(){
    var ss = this.state.data;
      ss.push('ff');
  this.setState({data: ss})
}

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
            <Title>Готова рецепта</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>

        <Modal
            style={{margin: 22}}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View padder style={{margin: 22}}>
            <View>
              <Text>Изчислената рецепта е:  </Text>
              <View >    
                <List>
                    <ListItem>
                        <Text>Картофи</Text>
                        
                    </ListItem>
                    <ListItem>
                    <Text>Nathaniel Clyne</Text>
                    </ListItem>
                    <ListItem>
                    <Text>Dejan Lovren</Text>
                    </ListItem>
                </List>
              </View>

                <View style={{flex: 1, flexDirection: 'row', marginTop:20}}> 
                        <Button danger style={{marginRight: 10, padding:10}}
                        onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text style={{color:'#fff'}}> Затвори </Text>
                    </Button>
                    <Button success style={{marginRight: 10, padding:10}}
                        onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text style={{color:'#fff'}}> Запази </Text>
                    </Button>
                </View>
            </View>
          </View>
        </Modal>


              <Text note style={{textAlign:'center'}} padder> За пресмятането на необходимите грамове за
              блокова рецепта, моля въвете в секция к-во точното количество в блокове за конкретен продукт. 
              
               </Text>
            {
                this.state.data.map((data, index)=> {
                    return (
                    <View key={index} style={{marginTop:10}}>
                        <View value={data} style={{flexDirection: "row"}}>
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
                                <Button  warning onPress={(e)=>this.addData(e)}>
                                    <Text style={{color:'#fff'}}>  +   </Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                        
                    )
                    
                })
            }
            <View padder style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop:10}}>
                <Button success  onPress={() => {
                        this.setModalVisible(true);
                         }}> 
                  <Text style={{color:'#fff'}}> Изчисли </Text>
                </Button>
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
