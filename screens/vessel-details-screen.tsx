import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface VesselDetailsScreenProps {}

const VesselDetailsScreen = (props: VesselDetailsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>VesselDetailsScreen</Text>
    </View>
  );
};

export default VesselDetailsScreen;

const styles = StyleSheet.create({
  container: {}
});
