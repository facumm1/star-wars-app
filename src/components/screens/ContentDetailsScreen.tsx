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

interface Props {
  route: ContentRouteType;
}

type ContentType = 'film' | 'people' | 'planet';

export const ContentDetailsScreen = ({route}: Props) => {
  const {goBackNav} = useNavigate();
  const tabBarHeight = useBottomTabBarHeight();

  //TODO fix types here
  const {contentType} = route.params;

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

        {contentMap[contentType as ContentType] || <Text>Invalid content</Text>}
      </View>
    </SafeAreaView>
  );
};

const FilmDetails = ({details}: {details: FilmTypes}) => {
  return (
    <View>
      <Text>Film details</Text>

      <Text>Title: {details.title}</Text>
      <Text>Episode: {details.episode_id}</Text>
      <Text>Director: {details.director}</Text>
      <Text>Producer: {details.producer}</Text>
      <Text>Release date: {details.release_date}</Text>
    </View>
  );
};

const PeopleDetails = ({details}: {details: PeopleTypes}) => {
  return (
    <View>
      <Text>People details</Text>
      <Text>Name: {details.name}</Text>
      <Text>Height: {details.height}</Text>
      <Text>Mass: {details.mass}</Text>
      <Text>Hair color: {details.hair_color}</Text>
      <Text>Skin color: {details.skin_color}</Text>
      <Text>Eye color: {details.eye_color}</Text>
    </View>
  );
};

const PlanetDetails = ({details}: {details: PlanetTypes}) => {
  return (
    <View>
      <Text>Planet details</Text>
      <Text>Name: {details.name}</Text>
      <Text>Rotation period: {details.rotation_period}</Text>
      <Text>Orbital period: {details.orbital_period}</Text>
      <Text>Diameter: {details.diameter}</Text>
      <Text>Climate: {details.climate}</Text>
      <Text>Gravity: {details.gravity}</Text>
      <Text>Terrain: {details.terrain}</Text>
      <Text>Surface water: {details.surface_water}</Text>
      <Text>Population: {details.population}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#edede9',
  },
  container: {
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
  },
});
