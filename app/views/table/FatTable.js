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


  render() {
  
    return (          
       <View>
           <View searchBar style={{textAlignVertical: "center",textAlign: "center"}} rounded >
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                    
                </Item>
           </View>
           <List>
            <ListItem itemDivider>
              <Text>A</Text>
            </ListItem>                    
            <ListItem>
                <View style={{width: 20, height: 50, marginRight: 10, backgroundColor: 'green'}}>
                </View>
                <Body>
                    <Text>Кашу </Text>
                    <Text note>сурови </Text>
                </Body>
                <View> 
                     <Text>28 гр</Text>
                </View>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>B</Text>
            </ListItem>  
            <ListItem>
              <Text>Bradley Horowitz</Text>
            </ListItem>
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
});
