import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

interface HomeScreenNavButtonProps {
    buttonText: string;
    onClick: () => {};
}

const HomeScreenNavButton = (props: HomeScreenNavButtonProps) => {

const onPressHandler = () => {
    props.onClick();
}

  return (
    <Pressable onPress={onPressHandler} style={styles.container}>
    <View>
      <Text>{props.buttonText}</Text>
    </View>
    </Pressable>
  );
};

export default HomeScreenNavButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    margin: 2
  },

});
