import React from 'react';
import HomeScreen from '../views/HomeScreen';
import TableScreen from '../views/TableScreen';
import CountZoneReceipt from '../views/CountZoneReceipt';
import CountNormalReceipt from '../views/CountNormalReceipt';
import SideBar from '../layouts/SideBar';
import {createDrawerNavigator, createAppContainer} from 'react-navigation'; 
import LoginScreen from '../views/LoginScreen';
import RegisterScreen from '../views/RegisterScreen';

const AppNavigator = createDrawerNavigator({
    
  Register: {
    screen: props=> <RegisterScreen {...props}/>
  }, 
  Login: {
    screen: props=> <LoginScreen {...props}/>
  },  
    Home: {
      screen: props=> <HomeScreen {...props}/> // predavame propsovete
    },
    Table : {
        screen: props=> <TableScreen {...props}/>
    },
    CountZoneReceipt: {
      screen: props=> <CountZoneReceipt {...props}/>
    },
    CountNormalReceipt: {
      screen: props=> <CountNormalReceipt {...props}/>
    }
  },

     { contentComponent: props=> <SideBar {...props}/>},
  );

  export default createAppContainer(AppNavigator);