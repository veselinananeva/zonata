import React from 'react';
import { Container, Header, Title,Segment, List, ListItem, Image, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import FatTable from '../views/table/FatTable';
import CarbTable from '../views/table/CarbTable';
import ProtTable from '../views/table/ProtTable';



export default class TableScreen extends React.Component {
  state = {
    loading: true,
    activePage: 1
  }

  selectComponent = (activePage) => () => this.setState({activePage})

  _renderComponent = () => {
    if(this.state.activePage === 1) {
    return <FatTable/>; }
    else if (this.state.activePage === 2) 
    { return <ProtTable/>; }
    else  
    {return <CarbTable/>; }
  }

 

  render() {
  

    return (
      <Container >
      <Header hasSegment style={{ backgroundColor: '#cddc39' }}    
      >
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Таблица</Title>
        </Body>
        <Right />
      </Header>
      <Segment style={{ backgroundColor: '#afb32b', color: 'white'}}>
          <Button first  style={{padding:10}} active={this.state.activePage === 1}
                                              onPress={this.selectComponent(1)}
          >
            <Text>Мазнини</Text>
          </Button>
          <Button style={{padding:10}} active={this.state.activePage === 2}
                                              onPress={this.selectComponent(2)}
          
          >
            <Text>Белтъчини</Text>
          </Button>
          <Button last style={{padding:10}} active={this.state.activePage === 3}
                                              onPress={this.selectComponent(3)} >
            <Text>Въглехидрати</Text>
          </Button>
        </Segment>

        <Content padder>
          {this._renderComponent()}
        </Content>
        </Container>
    );
  }
}


const Component1 = () => (<Text>Hello world! This is Component B</Text>);
//const Component2 = () => (<Text>Hello world! This is bbbb </Text>);
const Component3 = () => (<Text>Hello world! This is Component c</Text>);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
