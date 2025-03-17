import {FilmTypes, PeopleTypes, PlanetTypes} from '../types/responseTypes';
import {translations} from './translations';

type Results = FilmTypes[] | PeopleTypes[] | PlanetTypes[];

export const translateApiAttributes = (
  results: Results,
  contentType: string,
) => {
  const contentTranslation = translations[contentType];

  return results.map(content => {
    const mappedAttr = Object.entries(content).map(([key, value]) => {
      return [contentTranslation[key] || key, value];
    });

    return Object.fromEntries(mappedAttr);
  });
};
