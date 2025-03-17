import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {PlanetTypes} from '../../types/responseTypes';
import {useNavigate} from '../../hooks/useNavigate';

export const PlanetCard = ({item}: {item: PlanetTypes}) => {
  const {navigateTo} = useNavigate();

  const {nombre, terreno, clima} = item;

  return (
    <TouchableOpacity
      onPress={() =>
        navigateTo('ContentDetailsScreen', {...item, tipoContenido: 'planet'})
      }
      style={styles.container}>
      <Text>Name: {nombre}</Text>
      <Text>Terrain: {terreno}</Text>
      <Text>Weather: {clima}</Text>
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
