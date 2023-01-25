import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FruitTypePicker from '../../../components/ui/fruit-type-picker';

interface PressingDetailsScreenProps {}

const PressingDetailsScreen = (props: PressingDetailsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>PressingDetailsScreen</Text>
      <FruitTypePicker/>
    </View>
  );
};

export default PressingDetailsScreen;

const styles = StyleSheet.create({
  container: {}
});
