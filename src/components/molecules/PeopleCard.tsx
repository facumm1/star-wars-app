import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {PeopleTypes} from '../../types/responseTypes';
import {useNavigate} from '../../hooks/useNavigate';

export const PeopleCard = ({item}: {item: PeopleTypes}) => {
  const {navigateTo} = useNavigate();

  return (
    <TouchableOpacity
      onPress={() =>
        navigateTo('ContentDetailsScreen', {...item, contentType: 'people'})
      }
      style={styles.container}>
      <Text>Name: {item.name}</Text>
      <Text>Height: {item.height}</Text>
      <Text>Mass: {item.mass}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginVertical: 10,
    padding: 10,
  },
});
