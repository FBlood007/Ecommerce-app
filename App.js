import React from 'react';

import {SafeAreaView,Text} from 'react-native';
import Eapp from './Eapp';
import Details from './Details';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from './Cart';
import PhonePay from './PhonePay'

const Stack = createNativeStackNavigator();

const App = () =>  {


  return (
    
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown: false}} 
      initialRouteName="Eapp"
      >
        <Stack.Screen name="Eapp" component={Eapp} />
        <Stack.Screen name="Details"component={Details}/>
        <Stack.Screen name="Cart"component={Cart}/>
        <Stack.Screen name="PhonePay"component={PhonePay}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

export default App;
