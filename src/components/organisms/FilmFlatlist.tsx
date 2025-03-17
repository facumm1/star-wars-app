import {useRef} from 'react';
import {FlatList} from 'react-native';

import {useFetchFilmsQuery} from '../../redux/starwarsApi';
import {FilmCard} from '../molecules/FilmCard';
import {Loader} from '../atoms/Loader';

export const FilmFlatlist = () => {
  const {data} = useFetchFilmsQuery({});
  const flatlistRef = useRef<FlatList>(null);

  return (
    <FlatList
      ref={flatlistRef}
      style={{backgroundColor: '#edede9', width: '100%'}}
      data={data}
      ListEmptyComponent={Loader}
      keyExtractor={({episodio}) => episodio.toString()}
      renderItem={({item}) => <FilmCard item={item} />}
    />
  );
};
