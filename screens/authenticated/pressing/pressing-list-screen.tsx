import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface Props {}

const PressingListScreen = (props: Props) => {
  const navigation  = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Pressings</Text>
      <Button
        title="Pressing Details"
         // @ts-ignore
        onPress={() => navigation.navigate("PressingDetails")}
        />
    </View>
  );
};

export default PressingListScreen;

const styles = StyleSheet.create({
  container: {}
});
