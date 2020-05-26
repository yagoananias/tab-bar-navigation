import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

import { JournalScreen, MeasuresScreen, TreatmentScreen, ProfileScreen } from './screens/'
import AddButton from './components/AddButton'

const TabNavigator = createBottomTabNavigator({
    Journal: {
      screen: JournalScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome5 name="book-medical" size={24} color='#926bbb' />
      }
    },
    Measures: {
      screen: MeasuresScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome5 name="heartbeat" size={24} color='#926bbb' />
      }
    },
    Add: {
      screen: () => null,
      navigationOptions: {
        tabBarIcon: <AddButton />
      }
    },
    Treatment: {
      screen: TreatmentScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome5 name="band-aid" size={24} color='#926bbb' />
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome5 name="user" size={24} color='#926bbb' />
      }
    }
},

 {  
   tabBarOptions: {
     showLabel: false
   }
 }
)
export default createAppContainer(TabNavigator)
