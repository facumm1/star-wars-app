import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PlanetTypes} from '../../../types/responseTypes';
import {upperWord} from '../../../util/upperWord';

export const PlanetDetails = ({details}: {details: PlanetTypes}) => {
  const {
    imagen,
    nombre,
    clima,
    gravedad,
    terreno,
    poblacion,
    periodo_orbital,
    periodo_rotacion,
    agua_superficie,
  } = details;

  return (
    <ScrollView style={styles.scrollView}>
      <ImageBackground source={{uri: imagen}} blurRadius={10}>
        <Image
          source={{uri: imagen}}
          resizeMode="contain"
          style={styles.image}
        />
      </ImageBackground>

      <View style={styles.planetDetailsBox}>
        <View style={styles.header}>
          <Text style={{color: '#000', fontSize: 22, fontWeight: 600}}>
            {nombre}
          </Text>

          <View>
            <Text style={{color: '#000', fontSize: 18, fontWeight: 600}}>
              Weather
            </Text>
            <Text style={{color: '#000', fontSize: 18, textAlign: 'center'}}>
              {upperWord(clima)}
            </Text>
          </View>
        </View>

        {/* Gravity, Terrain, Population */}
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <View style={{margin: 10}}>
            <Text style={styles.textTitle}>Gravity</Text>
            <Text style={styles.text}>{gravedad}</Text>
          </View>

          <View style={{margin: 10}}>
            <Text style={styles.textTitle}>Terrain</Text>
            <Text style={styles.text}>{upperWord(terreno)}</Text>
          </View>

          <View style={{margin: 10}}>
            <Text style={styles.textTitle}>Population</Text>
            <Text style={styles.text}>{upperWord(poblacion)}</Text>
          </View>
        </View>

        {/* Rotational / Orbital */}
        <View style={{flexDirection: 'row'}}>
          <View style={{margin: 10}}>
            <Text style={styles.textTitle}>Rotational period</Text>
            <Text style={styles.text}>{periodo_rotacion}</Text>
          </View>

          <View style={{margin: 10}}>
            <Text style={styles.textTitle}>Orbital period</Text>
            <Text style={styles.text}>{periodo_orbital}</Text>
          </View>
        </View>

        <View style={{margin: 10}}>
          <Text style={styles.textTitle}>Water surface</Text>
          <Text style={styles.text}>{agua_superficie}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {width: '100%', height: '100%', backgroundColor: '#000'},
  image: {width: '100%', height: 300},
  planetDetailsBox: {
    padding: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#F4F4F4',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textTitle: {color: '#000', fontSize: 18, fontWeight: 600},
  text: {color: '#000', fontSize: 18},
});
