import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOver = (props) => {
	return (
		<View style={styles.screen}>
			<Text style = {styles.text1}>Game Over!</Text>
			<Text style = {styles.text}>Number of rounds: {props.roundsNumber}</Text>
			<Text style = {styles.text}>Number was: {props.userNumber}</Text>
			<View style = {styles.resetBtn}>
				<Button title="Restart" color="grey" onPress={props.onRestart} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:'blue'
    },
    text1:{
        fontSize:30,
        color:'red',
        fontWeight:"bold"
    },
    resetBtn:{
        width:120,
        margin:20,
    },
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		color: 'red',
	},
});

export default GameOver;
