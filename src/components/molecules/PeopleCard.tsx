import {memo} from 'react';
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
import {getContentImage} from '../../util/getContentImage';

export const PeopleCard = memo(({item}: {item: PeopleTypes}) => {
  const {navigateTo} = useNavigate();

  const {url, nombre} = item;

  // Get image from url id
  const image = getContentImage(url, 'people');

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
});

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
    height: 200,
    width: '100%',
    borderRadius: 15,
  },
});
