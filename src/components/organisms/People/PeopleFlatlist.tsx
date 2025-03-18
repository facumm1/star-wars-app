import {useRef} from 'react';
import {FlatList} from 'react-native';

import {useFetchPeopleQuery} from '../../../redux/starwarsApi';
import {Loader} from '../../atoms/Loader';
import {PeopleCard} from '../../molecules/PeopleCard';

export const PeopleFlatlist = () => {
  const {data} = useFetchPeopleQuery({});
  const flatlistRef = useRef<FlatList>(null);

  return (
    <FlatList
      ref={flatlistRef}
      style={{backgroundColor: '#F4F4F4', width: '100%'}}
      data={data}
      numColumns={2}
      ListEmptyComponent={Loader}
      keyExtractor={({url}) => url}
      renderItem={({item}) => <PeopleCard item={item} />}
    />
  );
};
