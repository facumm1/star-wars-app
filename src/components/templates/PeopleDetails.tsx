import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PeopleTypes} from '../../types/responseTypes';
import {upperWord} from '../../util/upperWord';
import {getContentImage} from '../../util/getContentImage';
import {useToggle} from '../../hooks';
import {PeopleAppearancesModal} from '../organisms/People/PeopleAppearancesModal';

export const PeopleDetails = ({details}: {details: PeopleTypes}) => {
  const {tg: modal, stg: toggleModal} = useToggle(false);

  const {
    nombre,
    imagen,
    nacimiento,
    altura,
    peso,
    color_ojos,
    color_piel,
    color_pelo,
    genero,
  } = details;

  const filmAppearances = details.peliculas.map((movie: string) =>
    getContentImage(movie, 'film'),
  );

  return (
    <ScrollView style={styles.scrollView}>
      <ImageBackground source={{uri: imagen}} blurRadius={10}>
        <Image
          source={{uri: imagen}}
          resizeMode="contain"
          style={styles.image}
        />
      </ImageBackground>

      <View style={styles.peopleDetailsBox}>
        <View style={styles.header}>
          <Text style={{color: '#000', fontSize: 22, fontWeight: 600}}>
            {nombre}
          </Text>

          <Text style={{color: '#000', fontSize: 22, fontWeight: 600}}>
            {nacimiento}
          </Text>
        </View>

        {/* Height, weight, genre */}
        <View style={{flexDirection: 'row'}}>
          <View style={{margin: 10}}>
            <Text style={styles.textTitle}>Height</Text>
            <Text style={styles.text}>{altura}</Text>
          </View>

          <View style={{margin: 10}}>
            <Text style={styles.textTitle}>Weight</Text>
            <Text style={styles.text}>{peso}</Text>
          </View>

          <View style={{margin: 10}}>
            <Text style={styles.textTitle}>Genre</Text>
            <Text style={styles.text}>{upperWord(genero)}</Text>
          </View>
        </View>

        {/* Eye / Hair / Skin Color */}
        <View style={{margin: 10}}>
          <Text style={styles.textTitle}>Eye / Hair / Skin Color</Text>
          <Text style={styles.text}>
            {upperWord(color_ojos)} / {upperWord(color_piel)} /{' '}
            {upperWord(color_pelo)}
          </Text>
        </View>

        <TouchableOpacity onPress={() => toggleModal()} style={styles.filmsBtn}>
          <Text style={styles.filmsBtnText}>View film participations</Text>
        </TouchableOpacity>

        <PeopleAppearancesModal
          filmAppearances={filmAppearances}
          modal={modal}
          toggleModal={toggleModal}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {width: '100%', height: '100%', backgroundColor: '#000'},
  image: {width: '100%', height: 300},
  peopleDetailsBox: {
    padding: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#F4F4F4',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTitle: {color: '#000', fontSize: 18, fontWeight: 600},
  text: {color: '#000', fontSize: 18},
  filmsBtn: {
    marginTop: 25,
    marginBottom: 15,
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: '#FFF',
    alignSelf: 'center',
  },
  filmsBtnText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
