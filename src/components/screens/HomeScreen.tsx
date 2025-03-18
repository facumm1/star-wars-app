import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import {ContentSelector} from '../molecules/ContentSelector';
import {FilmFlatlist, PeopleFlatlist, PlanetFlatlist} from '../organisms';

type ContentType = 'films' | 'people' | 'planets';

const contentMap = {
  films: <FilmFlatlist />,
  people: <PeopleFlatlist />,
  planets: <PlanetFlatlist />,
};

export const HomeScreen = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const [selectedContent, setSelectedContent] = useState<ContentType>('films');

  const handleContentChange = (content: ContentType) => {
    setSelectedContent(content);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, {marginBottom: tabBarHeight * 1.5}]}>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            marginVertical: 15,
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/images/vader.png')}
            style={{width: 35, height: 35, marginRight: 10}}
          />
          <Text style={styles.appTitle}>Forcepedia</Text>
        </View>

        <ContentSelector
          selectedContent={selectedContent}
          handleContentChange={handleContentChange}
        />

        {/* Flatlist */}
        {contentMap[selectedContent] || <Text>Invalid content</Text>}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    marginBottom: 75,
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  appTitle: {fontSize: 28},
});
