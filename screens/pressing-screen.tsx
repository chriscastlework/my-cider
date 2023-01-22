import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface PressingPageProps {}

const PressingScreen = (props: PressingPageProps) => {
  return (
    <View style={styles.container}>
      <Text>PressingPage</Text>
    </View>
  );
};

export default PressingScreen;

const styles = StyleSheet.create({
  container: {}
});
