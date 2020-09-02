import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GamesScreen from './Games';
import CategoryScreen from './Category';
import ContactFormScreen from './Form';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Games List"
            component={GamesScreen}
          />
          <Stack.Screen
            name="Category List"
            component={CategoryScreen}
          />
           <Stack.Screen
            name="Contact Us Form"
            component={ContactFormScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;