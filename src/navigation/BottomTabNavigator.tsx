import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchStackNavigator} from './SearchStackNavigator';
import Ionicons from '@react-native-vector-icons/ionicons';
import {HomeStackNavigator} from './HomeStackNavigator';

type TabParamList = {
  HomeStackNavigator: undefined;
  SearchStackNavigator: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#384A56',
          height: 50,
          paddingTop: 5,
          borderTopWidth: 0,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          position: 'absolute',
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Ionicons
              name={'home-outline'}
              color={focused ? '#60CCDE' : '#FFF'}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStackNavigator"
        component={SearchStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Ionicons
              name={'search-outline'}
              color={focused ? '#60CCDE' : '#FFF'}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
