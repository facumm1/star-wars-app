import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, Text} from 'react-native';
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
          backgroundColor: '#FFFFFF',
          height: Platform.OS === 'android' ? 70 : 90,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={'#000000'}
              size={25}
            />
          ),
          tabBarLabel: () => <Text>Home</Text>,
        }}
      />
      <Tab.Screen
        name="SearchStackNavigator"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              color={'#000000'}
              size={25}
            />
          ),
          tabBarLabel: () => <Text>Search</Text>,
        }}
      />
    </Tab.Navigator>
  );
};
