import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={'large'} color={'#000'} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {paddingTop: 20},
});
