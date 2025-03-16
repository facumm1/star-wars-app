import {Text, View} from 'react-native';
import {PeopleTypes} from '../../types/responseTypes';

export const PeopleCard = ({item}: {item: PeopleTypes}) => {
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
      <Text>Altura: {item.height}</Text>
      <Text>Peso: {item.mass}</Text>
    </View>
  );
};
