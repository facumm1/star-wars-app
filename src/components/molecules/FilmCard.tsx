import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FilmTypes} from '../../types/responseTypes';
import {useNavigate} from '../../hooks/useNavigate';

export const FilmCard = ({item}: {item: FilmTypes}) => {
  const {navigateTo} = useNavigate();
  const {titulo, episodio, director, productor, estreno} = item;

  return (
    <TouchableOpacity
      onPress={() =>
        navigateTo('ContentDetailsScreen', {...item, tipoContenido: 'film'})
      }
      style={styles.container}>
      <Text>Title: {titulo}</Text>
      <Text>Episode: {episodio}</Text>
      <Text>Director: {director}</Text>
      <Text>Producer: {productor}</Text>
      <Text>Release date: {estreno}</Text>
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
