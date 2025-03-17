import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {PeopleTypes} from '../../types/responseTypes';
import {useNavigate} from '../../hooks/useNavigate';

export const PeopleCard = ({item}: {item: PeopleTypes}) => {
  const {navigateTo} = useNavigate();

  const {nombre, altura, peso} = item;

  return (
    <TouchableOpacity
      onPress={() =>
        navigateTo('ContentDetailsScreen', {...item, tipoContenido: 'people'})
      }
      style={styles.container}>
      <Text>Name: {nombre}</Text>
      <Text>Height: {altura}</Text>
      <Text>Mass: {peso}</Text>
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
