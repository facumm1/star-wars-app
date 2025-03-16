import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {PlanetTypes} from '../../types/responseTypes';
import {useNavigate} from '../../hooks/useNavigate';

export const PlanetCard = ({item}: {item: PlanetTypes}) => {
  const {navigateTo} = useNavigate();

  return (
    <TouchableOpacity
      onPress={() =>
        navigateTo('ContentDetailsScreen', {...item, contentType: 'planet'})
      }
      style={styles.container}>
      <Text>Name: {item.name}</Text>
      <Text>Terrain: {item.terrain}</Text>
      <Text>Weather: {item.climate}</Text>
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
