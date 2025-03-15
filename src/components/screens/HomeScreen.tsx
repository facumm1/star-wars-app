import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#FFFFF0', alignItems: 'center'}}>
      <View style={{width: '90%'}}>
        <Text style={{fontSize: 28}}>Hello home screen</Text>
      </View>
    </SafeAreaView>
  );
};
