import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../components/screens/HomeScreen';

type StackParamList = {
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
