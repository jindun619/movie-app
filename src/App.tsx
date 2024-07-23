import {styled, ThemeProvider} from 'styled-components/native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {RootNav} from './navigations/RootNav';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import {dark, light, Theme} from './theme';

const queryClient = new QueryClient();

const App = () => {
  const [appTheme, setAppTheme] = useState('light');

  useEffect(() => {
    Appearance.addChangeListener(() => {
      setAppTheme(Appearance.getColorScheme() === 'dark' ? 'dark' : 'light');
      return () => {};
    });
  }, []);

  const styledTheme: Theme = appTheme === 'dark' ? dark : light;

  const customDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#03CF5D',
    },
  };
  const customDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#03CF5D',
    },
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={styledTheme}>
        <NavigationContainer
          theme={appTheme === 'dark' ? customDarkTheme : customDefaultTheme}>
          <RootNav />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
