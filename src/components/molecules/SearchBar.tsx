import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

interface Props {
  fieldValue: string;
  showSearchResults: boolean;
  onChangeText: (text: string) => void;
  clearResults: () => void;
}

export const SearchBar = ({
  fieldValue,
  showSearchResults,
  onChangeText,
  clearResults,
}: Props) => {
  return (
    <View style={styles.searchBar}>
      <Ionicons style={styles.icon} name="search" size={25} color={'#60CCDE'} />

      <TextInput
        value={fieldValue}
        autoCapitalize="none"
        style={styles.textInput}
        placeholder="Luke Skywalker..."
        placeholderTextColor={'#b3b3b3'}
        onChangeText={onChangeText}
      />

      {showSearchResults && (
        <TouchableOpacity onPress={() => clearResults()}>
          <Ionicons
            style={styles.icon}
            name="close"
            size={25}
            color={'#000000'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    overflow: 'hidden',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 15,
    marginVertical: 5,
    width: '90%',
    backgroundColor: '#ffffff',
  },
  icon: {paddingHorizontal: 10},
  clearIcon: {paddingHorizontal: 10},
  textInput: {flex: 1, fontSize: 16, color: '#000000'},
});
