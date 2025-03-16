import {NavigationProp, useNavigation} from '@react-navigation/native';

type StackParamList = {
  HomeScreen: undefined;
  ContentDetailsScreen: undefined;
};

type UseNavigateHook = {
  navigateTo: (screenName: keyof StackParamList, data: any) => void;
  goBackNav: () => void;
};

type NavigateProp = NavigationProp<StackParamList, keyof StackParamList>;

export const useNavigate = (): UseNavigateHook => {
  const navigation = useNavigation<NavigateProp>();

  const navigateTo = (screenName: keyof StackParamList, data: any) => {
    navigation.navigate(screenName, data);
  };

  const goBackNav = () => {
    navigation.goBack();
  };

  return {navigateTo, goBackNav};
};
