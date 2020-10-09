/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import StoreHOC from 'StoreHOC';
import Navigation from 'navigations/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <StoreHOC>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </StoreHOC>
  );
};

export default App;
