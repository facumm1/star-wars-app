import {
  filmImages,
  imageNotAvailable,
  peopleImages,
  planetImages,
} from './images';

export const getContentImage = (url: string, content: string) => {
  // Get image id from url
  const id = url.split('/').filter(Boolean).pop();

  if (content === 'people') {
    return id && peopleImages[+id] ? peopleImages[+id] : imageNotAvailable;
  }

  if (content === 'film') {
    return id && filmImages[+id] ? filmImages[+id] : imageNotAvailable;
  }

  return id && planetImages[+id] ? planetImages[+id] : imageNotAvailable;
};
