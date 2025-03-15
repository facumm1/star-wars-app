import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen} from '../components/screens/SearchScreen';

type StackParamList = {
  SearchScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};
