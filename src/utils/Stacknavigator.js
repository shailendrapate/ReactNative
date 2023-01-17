import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home/Home';
import ContactUs from '../screens/ContactUs/ContactUs';
import ViewCatalog from '../screens/ViewCatalog/ViewCatalog';
const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};



export const Stacknavigator = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ContactUs" component={ContactUs} />
    <Stack.Screen name="ViewCatalog" component={ViewCatalog} />
  </Stack.Navigator>
);

