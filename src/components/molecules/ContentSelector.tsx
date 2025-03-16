import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type ContentType = 'films' | 'people' | 'planets';

interface Props {
  selectedContent: string;
  handleContentChange: (content: ContentType) => void;
}

export const ContentSelector = ({
  selectedContent,
  handleContentChange,
}: Props) => {
  const isFilmsSelected = selectedContent === 'films' ? '#d4a373' : '#FFFFFF';
  const isPeopleSelected = selectedContent === 'people' ? '#d4a373' : '#FFFFFF';
  const isPlanetsSelected =
    selectedContent === 'planets' ? '#d4a373' : '#FFFFFF';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleContentChange('films')}
        style={[
          styles.button,
          {
            backgroundColor: isFilmsSelected,
          },
        ]}>
        <Text style={styles.text}>Films</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleContentChange('people')}
        style={[
          styles.button,
          {
            backgroundColor: isPeopleSelected,
          },
        ]}>
        <Text style={styles.text}>People</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleContentChange('planets')}
        style={[
          styles.button,
          {
            backgroundColor: isPlanetsSelected,
          },
        ]}>
        <Text style={styles.text}>Planets</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    marginBottom: 10,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#d4a373',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 2.5,
    marginHorizontal: 2.5,
  },
  text: {color: '#000', fontSize: 16},
});
