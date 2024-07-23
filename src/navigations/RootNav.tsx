import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import {Tabs} from './Tabs';

export type RootNavParamList = {
  Tab: undefined;
  detail: {id: number};
};

const Stack = createStackNavigator<RootNavParamList>();

const RootNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="detail"
        component={Detail}
        options={{
          headerBackTitleVisible: false,
          headerTitle: '',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export {RootNav};
