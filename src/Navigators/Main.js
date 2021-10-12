import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IndexExampleContainer } from '@/Containers'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={IndexExampleContainer}
        options={{
          tabBarIcon: tabInfo => (
            <Icon name="ios-home" size={25} color={tabInfo.color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
