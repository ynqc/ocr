import React, { Component } from 'react';
import { StyleSheet,Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text} onPress={() => Actions.image()}>
        image Screen
          </Text>
      </View>
     <View style={styles.item}>
        <Text style={styles.text} onPress={() => Actions.video()}>
          video Screen
        </Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF"
  },
  item: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#28a574",
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },
});

export default HomeScreen;