import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {UserCreateScreen,UserListScreen,UserProfileScreen} from './screens'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RegisterUser" component={UserCreateScreen} />
        <Stack.Screen name="UsersList" component={UserListScreen}/>
        <Stack.Screen name="Profile" component={UserProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
