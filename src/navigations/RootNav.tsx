import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

export type RootNavParamList = {
  home: undefined;
  detail: {id: number};
};

const Stack = createStackNavigator<RootNavParamList>();

const RootNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
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
