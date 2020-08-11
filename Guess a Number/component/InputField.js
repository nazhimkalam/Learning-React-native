import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
	return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
	input: {
		borderBottomColor: 'red',
		borderBottomWidth: 1,
		textAlign: 'center',
		width: 120,
		alignSelf: 'center',
	},
});

export default Input;
