import * as React from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle, Pressable } from 'react-native';
import { Colors } from '../../constants/global-styles';

interface Props {
    mode?: "flat";
    onPress: () => void; 
    children: string | JSX.Element;
    style?: StyleProp<ViewStyle>;
}

const Button = ({onPress, children, mode, style}: Props) => {
    return<View style={style}>
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
    <View style={[styles.button, mode === "flat" && styles.flat]}>
        <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
        </Text>
    </View>
    </Pressable> 
    </View> 
};

export default Button;

const styles = StyleSheet.create({
    button:{
        borderRadius: 4,
        padding: 8,
        backgroundColor: Colors.primary500,
    },
    flat: {
        backgroundColor: "transparent"
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    flatText:{
        color: Colors.primary100
    },
    pressed: {
        opacity: 0.5,
        backgroundColor: Colors.primary500,
        borderRadius: 4
    }
})
