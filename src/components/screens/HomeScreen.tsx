import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import {ContentSelector} from '../molecules/ContentSelector';
import {FilmFlatlist, PeopleFlatlist, PlanetFlatlist} from '../organisms';

type ContentType = 'films' | 'people' | 'planets';

export const HomeScreen = () => {
  const [selectedContent, setSelectedContent] =
    React.useState<ContentType>('films');

  const handleContentChange = (content: ContentType) => {
    setSelectedContent(content);
  };

  const tabBarHeight = useBottomTabBarHeight();

  const contentMap = {
    films: <FilmFlatlist />,
    people: <PeopleFlatlist />,
    planets: <PlanetFlatlist />,
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, {marginBottom: tabBarHeight * 1.5}]}>
        <Text style={styles.appTitle}>Forcepedia</Text>

        <ContentSelector
          selectedContent={selectedContent}
          handleContentChange={handleContentChange}
        />

        {/* Flatlist */}
        {contentMap[selectedContent] || <Text>Contenido inválido</Text>}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#edede9',
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  appTitle: {width: '90%', fontSize: 28, marginVertical: 15},
});
