import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Login from './src/pages/login/index';
import Home from './src/pages/home/index';
import Register from './src/pages/register/index';
import LostPassword from './src/pages/lost-password/index';

export type RootStackParamList = {
  Login: undefined;
  Home: {
    userName?: string | null,
    userId?: string | null
  };
  Register: undefined;
  LostPassword: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="LostPassword" component={LostPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
