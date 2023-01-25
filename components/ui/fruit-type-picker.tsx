import { Picker } from '@react-native-picker/picker';
import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FruitType } from '../../models/models';

interface FruitTypePickerProps {}

const FruitTypePicker = (props: FruitTypePickerProps) => {

  const [selectedValue, setSelectedValue] = useState(FruitType.Apples);

  return (
    <View>
    <Picker
      style={styles.input}
      selectedValue={selectedValue}
      onValueChange={setSelectedValue}
    >
      <Picker.Item label={FruitType.Apples} value={FruitType.Apples} />
      <Picker.Item label={FruitType.Pears} value={FruitType.Pears} />
      <Picker.Item label={FruitType.Grapes} value={FruitType.Grapes} />
      <Picker.Item label={FruitType.Other} value={FruitType.Other} />
    </Picker>
  </View>
  );
};

export default FruitTypePicker;

const styles = StyleSheet.create({
    input: {},
    value: {}
});
