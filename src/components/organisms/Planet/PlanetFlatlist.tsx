import {useRef} from 'react';
import {FlatList} from 'react-native';

import {useFetchPlanetsQuery} from '../../../redux/starwarsApi';
import {PlanetCard} from '../../molecules/PlanetCard';
import {Loader} from '../../atoms/Loader';

export const PlanetFlatlist = () => {
  const {data} = useFetchPlanetsQuery({});
  const flatlistRef = useRef<FlatList>(null);

  return (
    <FlatList
      ref={flatlistRef}
      style={{backgroundColor: '#edede9', width: '100%'}}
      data={data}
      numColumns={2}
      ListEmptyComponent={Loader}
      keyExtractor={({url}) => url}
      renderItem={({item}) => <PlanetCard item={item} />}
    />
  );
};
