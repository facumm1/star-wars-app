import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const KeepWritingText: React.FC<{keepWriting: boolean}> = React.memo(
  ({keepWriting}) => {
    return (
      <Text style={styles.writingAlert}>
        {keepWriting
          ? 'Keep on writing...'
          : 'Write something to start searching star wars characters.'}
      </Text>
    );
  },
);

const styles = StyleSheet.create({
  writingAlert: {
    marginLeft: 30,
    marginTop: 10,
    color: '#000',
    fontSize: 16,
    alignSelf: 'flex-start',
  },
});
