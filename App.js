/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import HomeScreen from './components/HomeScreen';
import ImageScreen from './components/ImageScreen';
import VideoScreen from './components/VideoScreen';
import ImageDetail from './components/ImageDetail';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={HomeScreen} title="Home" initial />
        <Scene key="image" component={ImageScreen} title="Image" />
        <Scene key="imageDetail" component={ImageDetail} title="Image show page" />
        <Scene key="video" component={VideoScreen} title="Video" />
      </Scene>
    </Router>
  );
};
export default App;
