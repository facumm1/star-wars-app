import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {FilmTypes} from '../../../types/responseTypes';
import {FilmTextDetails} from '../../molecules/FilmTextDetails';
import {useToggle} from '../../../hooks';

import {FilmIntroModal} from './FilmIntroModal';

export const FilmDetails = ({details}: {details: FilmTypes}) => {
  const {tg: modal, stg: toggleModal} = useToggle(false);
  const {poster, apertura, episodio, titulo} = details;

  return (
    <ImageBackground
      style={styles.container}
      source={{uri: details.poster}}
      blurRadius={50}>
      <ScrollView style={styles.scrollView}>
        {/* Poster image */}
        <View style={{width: '100%', overflow: 'hidden', marginTop: 50}}>
          <Image
            style={{height: 300, width: '100%'}}
            resizeMode="contain"
            source={{uri: poster}}
          />
        </View>

        {/* Text details */}
        <FilmTextDetails details={details} />

        <TouchableOpacity onPress={() => toggleModal()} style={styles.crawlBtn}>
          <Text style={styles.crawlBtnText}>View intro text</Text>
        </TouchableOpacity>

        <FilmIntroModal
          apertura={apertura}
          episodio={episodio}
          titulo={titulo}
          modal={modal}
          toggleModal={toggleModal}
        />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  scrollView: {width: '100%', height: '100%'},
  crawlBtn: {
    marginTop: 25,
    marginBottom: 15,
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: '#FFF',
    alignSelf: 'center',
  },
  crawlBtnText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
