import React from 'react';
import Nav from './src/navigation';
import {NetworkProvider} from 'react-native-offline';

const App = () => (
  <NetworkProvider>
    <Nav />
  </NetworkProvider>
);

export default App;
