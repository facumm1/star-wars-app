import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {useRef} from 'react';
import {Loader} from '../../atoms';

interface Props {
  filmAppearances: string[];
  modal: boolean;
  toggleModal: (bool?: boolean) => void;
}

const spacebg = 'https://cdn.wallpapersafari.com/38/0/tNfnSd.png';

export const PeopleAppearancesModal = ({
  filmAppearances,
  modal,
  toggleModal,
}: Props) => {
  const flatlistRef = useRef<FlatList>(null);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modal}
      onRequestClose={() => toggleModal(false)}>
      <ImageBackground resizeMode="cover" source={{uri: spacebg}}>
        <View style={{width: '100%', height: '100%'}}>
          <TouchableOpacity
            onPress={() => toggleModal()}
            style={styles.backBtn}>
            <Ionicons name="arrow-back" size={30} color="#FFF" />
          </TouchableOpacity>

          <FlatList
            ref={flatlistRef}
            style={{width: '100%'}}
            data={filmAppearances}
            numColumns={2}
            ListEmptyComponent={Loader}
            keyExtractor={url => url}
            renderItem={({item}) => (
              <Image source={{uri: item}} style={styles.poster} />
            )}
          />
        </View>
      </ImageBackground>
    </Modal>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#EEC609',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    bottom: -25,
  },
  poster: {
    height: 300,
    width: '100%',
    borderRadius: 15,
    margin: 10,
    maxWidth: '45%',
  },
  backBtn: {
    borderRadius: 50,
    padding: 5,
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 50,
  },
});
