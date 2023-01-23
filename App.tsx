import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext, useEffect, useState } from 'react';
import LoadingOverlay from './components/ui/loading-overlay';
import { Colors } from './constants/global-styles';
import HomeScreen from './screens/home-screen';
import PressingScreen from './screens/pressing-screen';
import LoginScreen from './screens/unauthenticated/login-screen';
import SignUpScreen from './screens/unauthenticated/sign-up-screen';
import VesselDetailsScreen from './screens/vessel-details-screen';
import VesselListScreen from './screens/vessel-list-screen';
import AuthContextProvider, { AuthContext } from './stores/auth-context';

export type RootStackParamList = {
  Home: undefined;
  Vessels: undefined;
  Pressing: undefined;
};

const Stack = createNativeStackNavigator();

const VesselsStack = createNativeStackNavigator();

const VesselStackNavigator = () => {
  return (
    <VesselsStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <VesselsStack.Screen
        name="Vessels"
        component={VesselListScreen}
      ></VesselsStack.Screen>
      <VesselsStack.Screen
        name="VesselDetails"
        component={VesselDetailsScreen}
      ></VesselsStack.Screen>
    </VesselsStack.Navigator>
  );
};

const AuthStack = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

function Root() {

  const [IsTryingLogIn, setIsTryingLogIn] = useState(true);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    async function fetchAuthToken() {
      const authToken = await AsyncStorage.getItem("token");
      if (authToken) {
        authContext.setAuthToken(authToken);
        setIsTryingLogIn(false);
      }
    }
    fetchAuthToken();
  }, [])

  if (IsTryingLogIn) {
    return <LoadingOverlay />;
  }

  return <Navigation />
}

function Navigation() {

  const authContext = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authContext.isAuthenticated && <AuthStack />}
      {authContext.isAuthenticated && AuthStackNavigator()}
    </NavigationContainer>
  );
}

export default function App() {

  return (
    <AuthContextProvider>
        <Root></Root>
    </AuthContextProvider>
  );
}

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Pressing" component={PressingScreen} />
      <Stack.Screen name="Vessels" component={VesselStackNavigator} />
    </Stack.Navigator>
  );
}
