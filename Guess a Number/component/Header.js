import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colour from '../constants/Colours';

const Header = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>{props.title}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		padding: 36,
		backgroundColor: Colour.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		color: 'white',
		fontSize: 25,
	},
});

export default Header;
