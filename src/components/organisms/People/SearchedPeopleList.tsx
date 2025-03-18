import {useRef} from 'react';
import {FlatList} from 'react-native';

import {useFetchPeopleByNameQuery} from '../../../redux/starwarsApi';
import {Loader, NoCharactersFound} from '../../atoms';
import {PeopleCard} from '../../molecules/PeopleCard';

export const SearchedPeopleList = ({fieldValue}: {fieldValue: string}) => {
  const {data, isFetching} = useFetchPeopleByNameQuery(fieldValue);

  const flatlistRef = useRef<FlatList>(null);

  return (
    <FlatList
      ref={flatlistRef}
      style={{backgroundColor: '#F4F4F4', width: '100%'}}
      data={data}
      numColumns={2}
      ListEmptyComponent={
        isFetching || fieldValue === undefined ? Loader : NoCharactersFound
      }
      keyExtractor={({url}) => url}
      renderItem={({item}) => <PeopleCard item={item} />}
    />
  );
};
