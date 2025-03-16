import {Text, View} from 'react-native';
import {PlanetTypes} from '../../types/responseTypes';

export const PlanetCard = ({item}: {item: PlanetTypes}) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginVertical: 10,
        padding: 10,
      }}>
      <Text>Nombre: {item.name}</Text>
      <Text>Terreno: {item.terrain}</Text>
      <Text>Clima: {item.climate}</Text>
    </View>
  );
};
