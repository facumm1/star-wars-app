import React from 'react';
import {StatusBar} from 'react-native';

import {StarwarsApp} from './src/StarwarsApp';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <StarwarsApp />
    </>
  );
}

export default App;
