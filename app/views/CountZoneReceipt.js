import React from 'react';
import { Container, Header, List, ListItem, Input, Item, Title,
     Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { StatusBar, StyleSheet, Text, View } from 'react-native';


export default class CountZoneReceipt extends React.Component {
  state = {
    loading: true, 
    data: [1]
  }
  constructor(props) {
    super(props);

  }
  addData(){
      var ss = this.state.data;
        ss.push("penis");
    this.setState({data: ss})
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

            {
                this.state.data.map((data, index)=> {
                    return (
                    <View key={index}>
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
                                <Button  success onPress={(e)=>this.addData(e)}>
                                    <Text>  +   </Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                        
                    )
                    
                })
            }
            
            
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
