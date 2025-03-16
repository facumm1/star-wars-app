import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import {useField, useDebouncedValue} from '../../hooks';
import {KeepWritingText} from '../atoms/KeepWritingText';
import {SearchedPeopleList} from '../organisms/SearchedPeopleList';
import {SearchBar} from '../molecules/SearchBar';

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
        <Text style={styles.screenTitle}>Search people</Text>

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
    backgroundColor: '#edede9',
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  screenTitle: {width: '90%', fontSize: 28, marginVertical: 15},
});
