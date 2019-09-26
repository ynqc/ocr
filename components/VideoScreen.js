import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        video screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default VideoScreen;