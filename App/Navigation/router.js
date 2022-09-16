import 'react-native-gesture-handler';
import { Text } from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Login } from '../Src/Container/Auth';
import { CountryDetail, WeatherDetail } from '../Src/Container/Home';

const Stack = createStackNavigator();

function LoginStack({ navigation }) {
  return (
    <Stack.Navigator headerShown="none">
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="CountryDetail"
        component={CountryDetail}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="WeatherDetail"
        component={WeatherDetail}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App({ navigation }) {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
