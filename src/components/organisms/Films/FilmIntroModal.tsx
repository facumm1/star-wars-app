import {
  Animated,
  Easing,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {useEffect, useRef} from 'react';

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
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (modal) {
      scrollY.setValue(0);
      Animated.timing(scrollY, {
        toValue: -1000,
        duration: 25000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [modal, scrollY]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modal}
      onRequestClose={() => toggleModal(false)}>
      <ImageBackground resizeMode="cover" source={{uri: spacebg}}>
        <TouchableOpacity onPress={() => toggleModal()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>

        <ScrollView style={{width: '100%', height: '100%'}}>
          <Animated.View
            style={[
              styles.crawlContainer,
              {transform: [{translateY: scrollY}]},
            ]}>
            <Text style={styles.title}>EPISODE {episodio}</Text>
            <Text style={styles.title}>{titulo}</Text>

            <Text style={styles.crawl}>{apertura}</Text>
          </Animated.View>
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
    bottom: -50,
    transform: [{perspective: 800}, {rotateX: '30deg'}],
  },
  crawlContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: '100%', // Empieza desde abajo
  },
  crawl: {
    fontSize: 22,
    color: '#EEC609',
    width: '100%',
    flex: 1,
    textAlign: 'center',
    transform: [{perspective: 800}, {rotateX: '30deg'}],
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
