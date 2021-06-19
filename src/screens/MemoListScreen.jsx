import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar.jsx';
import MemoList from '../components/MemoList.jsx';
import CircleButton from '../components/CircleButton.jsx';


export default function MemoListScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleButton>+</CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});