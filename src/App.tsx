import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from './global';
import Routes from './routes';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Routes />
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
          />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
