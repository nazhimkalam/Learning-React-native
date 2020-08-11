import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colour from '../constants/Colours';

const OutPutNumber = (props) => {
	return (
		<View style={styles.myView}>
			<Text style={styles.myText}>{props.children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	myView: {
		borderColor: Colour.outputBorderColor,
		borderWidth: 3,
		borderRadius: 20,
		padding: 30,
		marginTop: 15,
		marginBottom: 20,
	},
	myText: {
		color: Colour.outputBorderColor,
		fontSize: 25,
		margin: -20,
		alignSelf: 'center',
	},
});
export default OutPutNumber;
