import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import { Stacknavigator }  from './src/utils/Stacknavigator';

import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stacknavigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;