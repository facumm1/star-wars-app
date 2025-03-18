import {StyleSheet, Text, View} from 'react-native';
import {FilmTypes} from '../../types/responseTypes';

export const FilmTextDetails = ({details}: {details: FilmTypes}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{details.titulo}</Text>

      {/* Episode and release date */}
      <View style={styles.infoBox}>
        <View style={styles.episodeBox}>
          <Text style={styles.episodeText}>Episode {details.episodio}</Text>
        </View>

        <View style={styles.releaseDateBox}>
          <Text style={styles.releaseDateText}>
            {new Date(details.estreno).toLocaleDateString('en-US')}
          </Text>
        </View>
      </View>

      {/* Director and producer */}
      <View style={styles.directorProducerBox}>
        <View style={[styles.producerBox, {paddingHorizontal: 0}]}>
          <Text style={styles.direcProdTitle}>Director</Text>
          <Text style={styles.direcProdText}>{details.director}</Text>
        </View>

        <View style={styles.producerBox}>
          <Text style={styles.direcProdTitle}>Producer</Text>
          <Text style={styles.direcProdText}>{details.productor}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: '85%', alignSelf: 'center'},
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  directorProducerBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 10,
  },
  episodeBox: {
    borderWidth: 1,
    borderColor: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  episodeText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  releaseDateBox: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
  },
  releaseDateText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  producerBox: {
    borderRadius: 15,
    paddingHorizontal: 15,
    flexShrink: 1,
  },
  direcProdTitle: {color: '#FFF', fontSize: 18, fontWeight: '600'},
  direcProdText: {
    color: '#FFF',
    fontSize: 16,
  },
});
