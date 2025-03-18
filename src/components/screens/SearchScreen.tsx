import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import {useField, useDebouncedValue} from '../../hooks';
import {KeepWritingText} from '../atoms/KeepWritingText';
import {SearchBar} from '../molecules/SearchBar';
import {SearchedPeopleList} from '../organisms';

const chewieLogo = require('../../../assets/images/chewie.png');

export const SearchScreen = () => {
  const tabBarHeight = useBottomTabBarHeight();

  const {
    fieldValue,
    onChangeText,
    keepWriting,
    showSearchResults,
    clearResults,
  } = useField();
  const {debouncedValue} = useDebouncedValue(fieldValue);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, {marginBottom: tabBarHeight * 1.7}]}>
        <View style={styles.titleLogo}>
          <Image source={chewieLogo} style={styles.chewieLogo} />
          <Text style={styles.screenTitle}>Search characters</Text>
        </View>

        <SearchBar
          fieldValue={fieldValue}
          showSearchResults={showSearchResults}
          onChangeText={onChangeText}
          clearResults={clearResults}
        />

        {showSearchResults ? (
          <SearchedPeopleList fieldValue={debouncedValue as string} />
        ) : (
          <KeepWritingText keepWriting={keepWriting} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  screenTitle: {fontSize: 28},
  titleLogo: {
    width: '90%',
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
  },
  chewieLogo: {width: 35, height: 35, marginRight: 10},
});
