import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../screens/Detail';
import {Tabs} from './Tabs';
import {Person} from '../screens/Person';

export type RootNavParamList = {
  Tab: undefined;
  Detail: {id: number};
  Person: {id: number};
  SearchResult: undefined;
};

const Stack = createStackNavigator<RootNavParamList>();

const RootNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Tab"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerTitle: '', headerTransparent: true}}
      />
      <Stack.Screen
        name="Person"
        component={Person}
        options={{headerTitle: '인물 정보'}}
      />
    </Stack.Navigator>
  );
};

export {RootNav};
