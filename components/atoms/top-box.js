import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';

export default function TopBox() {
  return (
      <>
        <Pressable style={styles.topBox}>
            <Text style={styles.topBoxQuestion}>Top Box</Text>
        </Pressable>
      </>
  );
}

const styles = StyleSheet.create({
  topBox: {
    backgroundColor: "#c15bd7",
    height: "40%",
    margin: "20px",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  topBoxQuestion: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: "30px"
  }
});
