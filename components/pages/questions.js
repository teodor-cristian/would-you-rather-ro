import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopBox from '../atoms/top-box';
import BottomBox from '../atoms/bottom-box';
import OrBtn from '../atoms/or-btn';

export default function Questions() {
  return (
    <View style={styles.container}>
      <Text>Ai prefera sa</Text>
      <TopBox />
      <OrBtn />
      <BottomBox />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
