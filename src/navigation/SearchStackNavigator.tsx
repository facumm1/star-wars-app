import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SearchScreen} from '../components/screens/SearchScreen';
import {ContentDetailsScreen} from '../components/screens/ContentDetailsScreen';

type StackParamList = {
  SearchScreen: undefined;
  ContentDetailsScreen: undefined;
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
      <Stack.Screen
        name="ContentDetailsScreen"
        component={ContentDetailsScreen}
      />
    </Stack.Navigator>
  );
};
