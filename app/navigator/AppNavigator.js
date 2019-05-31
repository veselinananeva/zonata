import React from 'react';
import HomeScreen from '../views/HomeScreen';
import TableScreen from '../views/TableScreen';
import CountZoneReceipt from '../views/CountZoneReceipt';

import SideBar from '../layouts/SideBar';
import {createDrawerNavigator, createAppContainer} from 'react-navigation'; 


const AppNavigator = createDrawerNavigator({
    
    Home: {
      screen: props=> <HomeScreen {...props}/> // predavame propsovete
    },
    Table : {
        screen: props=> <TableScreen {...props}/>
    },
    CountZoneReceipt: {
      screen: props=> <CountZoneReceipt {...props}/>
    }
    
  },

     { contentComponent: props=> <SideBar {...props}/>},
  );

  export default createAppContainer(AppNavigator);