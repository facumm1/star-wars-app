import {
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

interface Props {
  apertura: string;
  episodio: number;
  titulo: string;
  modal: boolean;
  toggleModal: (bool?: boolean) => void;
}

const spacebg = 'https://cdn.wallpapersafari.com/38/0/tNfnSd.png';

export const FilmIntroModal = ({
  episodio,
  titulo,
  apertura,
  modal,
  toggleModal,
}: Props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modal}
      onRequestClose={() => toggleModal(false)}>
      <ImageBackground resizeMode="cover" source={{uri: spacebg}}>
        <ScrollView style={{width: '100%', height: '100%'}}>
          <TouchableOpacity
            onPress={() => toggleModal()}
            style={styles.backBtn}>
            <Ionicons name="arrow-back" size={30} color="#FFF" />
          </TouchableOpacity>

          <View style={{marginTop: 25}}>
            <Text style={styles.title}>EPISODE {episodio}</Text>
            <Text style={styles.title}>{titulo}</Text>
          </View>

          <Text style={styles.crawl}>{apertura}</Text>
        </ScrollView>
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
  crawl: {
    fontSize: 22,
    color: '#EEC609',
    width: '100%',
    flex: 1,
    textAlign: 'center',
    transform: [
      {perspective: 800}, // Da el efecto 3D
      {rotateX: '30deg'}, // Inclina el texto hacia atrás
    ],
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
