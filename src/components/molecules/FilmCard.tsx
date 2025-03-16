import {Text, View} from 'react-native';
import {FilmTypes} from '../../types/responseTypes';

export const FilmCard = ({item}: {item: FilmTypes}) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginVertical: 10,
        padding: 10,
      }}>
      <Text>Title: {item.title}</Text>
      <Text>Episode: {item.episode_id}</Text>
      <Text>Director: {item.director}</Text>
      <Text>Producer: {item.producer}</Text>
      <Text>Release date: {item.release_date}</Text>
    </View>
  );
};
