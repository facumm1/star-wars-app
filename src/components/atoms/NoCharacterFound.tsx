import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const NoCharactersFound: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No characters found.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginLeft: 20},
  text: {fontSize: 16, color: '#000', paddingVertical: 10},
});
