import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';

import {
  ContentRouteType,
  FilmTypes,
  PeopleTypes,
  PlanetTypes,
} from '../../types/responseTypes';
import {useNavigate} from '../../hooks/useNavigate';
import {FilmDetails} from '../organisms/Films/FilmDetails';
import {PeopleDetails} from '../organisms/People/PeopleDetails';

interface Props {
  route: ContentRouteType;
}

type TipoContenido = 'film' | 'people' | 'planet';

export const ContentDetailsScreen = ({route}: Props) => {
  const {goBackNav} = useNavigate();
  const tabBarHeight = useBottomTabBarHeight();

  //TODO fix types here
  const {tipoContenido} = route.params;

  const contentMap = {
    film: <FilmDetails details={route.params as unknown as FilmTypes} />,
    people: <PeopleDetails details={route.params as unknown as PeopleTypes} />,
    planet: <PlanetDetails details={route.params as unknown as PlanetTypes} />,
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, {marginBottom: tabBarHeight * 1.5}]}>
        <TouchableOpacity onPress={() => goBackNav()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={30} color="#000000" />
        </TouchableOpacity>

        {contentMap[tipoContenido as TipoContenido] || (
          <Text>Invalid content</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const PlanetDetails = ({details}: {details: PlanetTypes}) => {
  return (
    <View>
      <Text>Planet details</Text>
      <Text>Name: {details.nombre}</Text>
      <Text>Rotation period: {details.periodo_rotacion}</Text>
      <Text>Orbital period: {details.periodo_orbital}</Text>
      <Text>Diameter: {details.diametro}</Text>
      <Text>Climate: {details.clima}</Text>
      <Text>Gravity: {details.gravedad}</Text>
      <Text>Terrain: {details.terreno}</Text>
      <Text>Surface water: {details.agua_superficie}</Text>
      <Text>Population: {details.poblacion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#edede9',
  },
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  backBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    padding: 5,
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 50,
  },
});
