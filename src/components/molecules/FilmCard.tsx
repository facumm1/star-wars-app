import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FilmTypes} from '../../types/responseTypes';
import {useNavigate} from '../../hooks/useNavigate';

export const FilmCard = ({item}: {item: FilmTypes}) => {
  const {navigateTo} = useNavigate();

  return (
    <TouchableOpacity
      onPress={() => navigateTo('ContentDetailsScreen', {...item, contentType: 'film'})}
      style={styles.container}>
      <Text>Title: {item.title}</Text>
      <Text>Episode: {item.episode_id}</Text>
      <Text>Director: {item.director}</Text>
      <Text>Producer: {item.producer}</Text>
      <Text>Release date: {item.release_date}</Text>
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
