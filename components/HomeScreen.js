import React, { Component } from 'react';
import { StyleSheet,Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => Actions.image()}>
        image Screen
      </Text>
      <Text style={styles.text} onPress={() => Actions.video()}>
        video Screen
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
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },
});

export default HomeScreen;