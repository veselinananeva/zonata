import React from 'react';
import { Container, Header, List, ListItem, Input, Item,
     Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default class FatTable extends React.Component {
  state = {
    loading: true
  }

  constructor(props) {
    super(props);
}

  showFoods(){
    return (
      this.props.foods.map(food => 
        {
          if(food.type.length > 0)
          {
            return <ListItem>
                 <View style={styles[food.type]}>
                </View>
                  <Body>
                    <Text>{food.name} </Text>
                    <Text note>{food.description} </Text>
                </Body>
                <View> 
                     <Text>{food.grams}</Text>
                     <Text>{food.gramKind}</Text>
                </View>
            </ListItem>
          }
          
          return <ListItem><Text>Empty</Text></ListItem>
        }
      )
    )
  }

  render() {
  
    return (          
       <View>
           <View searchBar style={{textAlignVertical: "center",textAlign: "center"}} rounded >
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Търси" />
                </Item>
           </View>
           <List>     
            {this.showFoods()}
          </List>          
       </View>
          
         
   
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
  green: {width: 20, height: 50, marginRight: 10, backgroundColor: 'green'},
  red: {width: 20, height: 50, marginRight: 10, backgroundColor: 'red'},
  yellow: {width: 20, height: 50, marginRight: 10, backgroundColor: 'yellow'}
});
