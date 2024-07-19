import {Text, View} from 'react-native';

import {styled} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNav} from './navigations/RootNav';

const BoldText = styled.Text`
  font-weight: 600;
`;

const App = () => {
  return (
    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
  );
};

export default App;
