import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {PeopleTypes} from '../../types/responseTypes';
import {useNavigate} from '../../hooks/useNavigate';
import {imageNotAvailable, peopleImages} from '../../util/images';

export const PeopleCard = ({item}: {item: PeopleTypes}) => {
  const {navigateTo} = useNavigate();

  const {url, nombre} = item;

  // Get image ID and poster
  const id = url.split('/').filter(Boolean).pop();
  const image = id && peopleImages[+id] ? peopleImages[+id] : imageNotAvailable;

  return (
    <TouchableOpacity
      onPress={() =>
        navigateTo('ContentDetailsScreen', {
          ...item,
          imagen: image,
          tipoContenido: 'people',
        })
      }
      style={styles.container}>
      <ImageBackground source={{uri: image}} blurRadius={10}>
        <Image
          resizeMode="contain"
          source={{uri: image}}
          style={styles.poster}
        />

        <View style={styles.nameBox}>
          <Text numberOfLines={1} style={{color: '#FFFFFF'}}>
            {nombre}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
    alignSelf: 'center',
    flex: 1,
    backgroundColor: '#000',
    borderRadius: 20,
    margin: 10,
    maxWidth: '45%',
  },
  nameBox: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    padding: 10,
  },
  poster: {
    height: 200,
    width: '100%',
    borderRadius: 15,
  },
});
