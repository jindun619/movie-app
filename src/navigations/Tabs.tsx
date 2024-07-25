import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {useTheme} from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {height: 100},
        tabBarStyle: {borderTopWidth: 0, opacity: 0.5},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
          title: '홈',
          headerTitle: '홈',
          headerTitleAlign: 'left',
          headerTitleStyle: {paddingTop: 20, fontSize: 30, fontWeight: 600},
          headerTitleContainerStyle: {marginLeft: 10},
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
          title: '검색',
          headerTitle: '검색',
          headerTitleAlign: 'left',
          headerTitleStyle: {paddingTop: 20, fontSize: 30, fontWeight: 600},
          headerTitleContainerStyle: {marginLeft: 10},
          headerShadowVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};
export {Tabs};
