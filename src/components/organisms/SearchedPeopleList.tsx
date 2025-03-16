import {useRef} from 'react';
import {FlatList} from 'react-native';

import {useFetchPeopleByNameQuery} from '../../redux/starwarsApi';
import {Loader, NoCharactersFound} from '../atoms';
import {PeopleCard} from '../molecules/PeopleCard';

export const SearchedPeopleList = ({fieldValue}: {fieldValue: string}) => {
  const {data, isFetching} = useFetchPeopleByNameQuery(fieldValue);

  const flatlistRef = useRef<FlatList>(null);

  return (
    <FlatList
      ref={flatlistRef}
      style={{backgroundColor: '#edede9', width: '100%'}}
      data={data?.results}
      ListEmptyComponent={
        isFetching || fieldValue === undefined ? Loader : NoCharactersFound
      }
      keyExtractor={({url}) => url}
      renderItem={({item}) => <PeopleCard item={item} />}
    />
  );
};
