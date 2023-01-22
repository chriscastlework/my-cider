import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


const VesselListScreen = () => {

    const navigation  = useNavigation();
    
  return (
    <View style={styles.container}>
      <Text>PressingListScreen</Text>
      <Button
        title="Vessel Details"
         // @ts-ignore
        onPress={() => navigation.navigate("VesselDetails")}
        />
    </View>
  );
};

export default VesselListScreen;

const styles = StyleSheet.create({
  container: {}
});
