import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';
import HomeScreenNavButton from '../../components/ui/home-screen-nav-btn';
import { AuthContext } from '../../stores/auth-context';
import { useContext } from 'react';

const HomeScreen = () => {

  const navigation = useNavigation();
  const authContext = useContext(AuthContext);

  return (
    <View style={styles.container}>
      
      <HomeScreenNavButton
        buttonText="Cider Guide"
        // @ts-ignore
        onClick={() => navigation.navigate("CiderGuid")}
      />
      <HomeScreenNavButton
        buttonText="Vessels"
        // @ts-ignore
        onClick={() => navigation.navigate("Vessels")}
      />
      <HomeScreenNavButton
        buttonText="Pressing"
        // @ts-ignore
        onClick={() => navigation.navigate("Pressing")}
      />
      <HomeScreenNavButton
        buttonText="Recipes"
        // @ts-ignore
        onClick={() => navigation.navigate("Recipes")}
      />
      <HomeScreenNavButton
        buttonText="Market"
        // @ts-ignore
        onClick={() => navigation.navigate("Market")}
      />

    <HomeScreenNavButton
        buttonText="Log out"
        // @ts-ignore
        onClick={() => authContext.logout()}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {

  },
  button: {
    padding: 10
  }
});
