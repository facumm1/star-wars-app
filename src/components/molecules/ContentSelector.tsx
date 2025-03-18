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
  const isFilmsSelected = selectedContent === 'films' ? '#60CCDE' : '#FFFFFF';
  const isPeopleSelected = selectedContent === 'people' ? '#60CCDE' : '#FFFFFF';
  const isPlanetsSelected =
    selectedContent === 'planets' ? '#60CCDE' : '#FFFFFF';

  const filmsColor = selectedContent === 'films' ? '#60CCDE' : '#000';
  const peopleColor = selectedContent === 'people' ? '#60CCDE' : '#000';
  const planetColor = selectedContent === 'planets' ? '#60CCDE' : '#000';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleContentChange('films')}
        style={[
          styles.button,
          {
            borderColor: isFilmsSelected,
            borderWidth: 2,
          },
        ]}>
        <Text style={[styles.text, {color: filmsColor}]}>Films</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleContentChange('people')}
        style={[
          styles.button,
          {
            borderColor: isPeopleSelected,
            borderWidth: 2,
          },
        ]}>
        <Text style={[styles.text, {color: peopleColor}]}>People</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleContentChange('planets')}
        style={[
          styles.button,
          {
            borderColor: isPlanetsSelected,
            borderWidth: 2,
          },
        ]}>
        <Text style={[styles.text, {color: planetColor}]}>Planets</Text>
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
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 2.5,
    marginHorizontal: 2.5,
  },
  text: {color: '#000', fontSize: 16, fontWeight: 500},
});
