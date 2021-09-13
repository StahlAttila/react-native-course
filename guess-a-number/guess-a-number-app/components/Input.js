import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const Input = (props) => {

return <TextInput {...props} style={{...styles.input, ...props.style}}/>
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;