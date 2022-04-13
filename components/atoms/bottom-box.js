import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

export default function BottomBox() {
  return (
    <Pressable style={styles.bottomBox}>
        <Text style={styles.bottomBoxQuestion}>Bottom Box</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    bottomBox: {
        backgroundColor: "#4CC15B",
        height: "40%",
        margin: "20px",
        borderRadius: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      bottomBoxQuestion: {
          color: "#fff",
          fontWeight: "bold",
          fontSize: "30px"
      }
});
