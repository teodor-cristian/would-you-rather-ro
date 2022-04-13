import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OrBtn() {
  return (
    <View style={styles.orBtn}>
        <Text>SAU</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  orBtn: {
    position: "absolute",
    backgroundColor: "red",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: "50%",
    zIndex: "100",
  },
});
