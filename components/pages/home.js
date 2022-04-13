import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ce ai prefera?</Text>
      <StatusBar style="auto" />
    <Pressable style={styles.startBtn} onPress={() =>
            navigation.navigate('Questions', { name: 'Jane' })
        }>
      <Text style={styles.btnText}>Start</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header : {
      fontSize: "60px"
  },
  startBtn: {
    marginTop: "40px",
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  btnText: {
      color: "#fff",
      fontWeight: "bold"
  }
});
