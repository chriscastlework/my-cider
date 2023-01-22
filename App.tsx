import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home-screen';
import PressingScreen from './screens/pressing-screen';
import VesselDetailsScreen from './screens/vessel-details-screen';
import VesselListScreen from './screens/vessel-list-screen';

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

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pressing" component={PressingScreen} />
        <Stack.Screen name="Vessels" component={VesselStackNavigator} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}
