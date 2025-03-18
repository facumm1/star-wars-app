import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {PlanetTypes} from '../../types/responseTypes';
import {useNavigate} from '../../hooks/useNavigate';
import {getContentImage} from '../../util/getContentImage';

export const PlanetCard = ({item}: {item: PlanetTypes}) => {
  const {navigateTo} = useNavigate();
  const {url, nombre} = item;
  const image = getContentImage(url, 'planet');

  return (
    <TouchableOpacity
      onPress={() =>
        navigateTo('ContentDetailsScreen', {
          ...item,
          imagen: image,
          tipoContenido: 'planet',
        })
      }
      style={styles.container}>
      <ImageBackground source={{uri: image}} blurRadius={10}>
        <Image
          resizeMode="contain"
          source={{uri: image}}
          style={styles.image}
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
  image: {
    height: 175,
    width: '100%',
    borderRadius: 15,
  },
});
