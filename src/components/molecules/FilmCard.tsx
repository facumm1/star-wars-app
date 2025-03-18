import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {FilmTypes} from '../../types/responseTypes';
import {useNavigate} from '../../hooks/useNavigate';
import {filmImages} from '../../util/images';

const imageNotAvailable =
  'https://mint.fiu.edu/wp-content/uploads/2021/10/image-not-available.jpg';

export const FilmCard = ({item}: {item: FilmTypes}) => {
  const {navigateTo} = useNavigate();
  const {titulo, episodio} = item;

  const poster = filmImages[episodio]
    ? filmImages[episodio]
    : imageNotAvailable;

  return (
    <TouchableOpacity
      onPress={() =>
        navigateTo('ContentDetailsScreen', {
          ...item,
          poster,
          tipoContenido: 'film',
        })
      }
      style={styles.container}>
      <Image source={{uri: poster}} style={styles.poster} />

      <View style={styles.titleBox}>
        <Text numberOfLines={1} style={{color: '#FFFFFF'}}>
          {titulo}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    alignSelf: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    margin: 10,
    maxWidth: '45%',
  },
  titleBox: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    padding: 10,
  },
  poster: {height: 300, width: '100%', borderRadius: 15},
});
