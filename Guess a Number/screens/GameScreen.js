import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import OutputNumber from '../component/outputNumber';

const generateRandomNumber = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	const randNum = Math.floor(Math.random() * (max - min) + min);

	if (randNum === exclude) {
		return generateRandomNumber(min, max, exclude);
	} else {
		return randNum;
	}
};

const GameScreen = (props) => {
	const [getCurrentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, props.userChoice));

	const [getRounds, setRounds] = useState(0);

	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	const { userChoice, onGameOver } = props;

	useEffect(() => {
		if (getCurrentGuess === userChoice) {
			onGameOver(getRounds);
		}
	}, [getCurrentGuess, userChoice, onGameOver]);

	const nextGuessHandler = (direction) => {
		if (
			(direction === 'lower' && getCurrentGuess < props.userChoice) ||
			(direction === 'greater' && getCurrentGuess > props.userChoice)
		) {
			Alert.alert("Don't lie", 'You know that this is wrong', [{ text: 'Sorry!', style: 'cancel' }]);
			return;
		}

		if (direction === 'lower') {
			currentHigh.current = getCurrentGuess;
		} else {
			currentLow.current = getCurrentGuess;
		}

		const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, getCurrentGuess);
		setCurrentGuess(nextNumber);
		setRounds((currentRounds) => currentRounds + 1);
	};

	return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
			<OutputNumber>{getCurrentGuess}</OutputNumber>
			<View style={styles.cardFormat}>
				<View style={styles.lowerBtn}>
					<Button title="LOWER" color="brown" onPress={nextGuessHandler.bind(this, 'lower')} />
				</View>
				<View style={styles.higherBtn}>
					<Button title="GREATER" color="orange" onPress={nextGuessHandler.bind(this, 'greater')} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	higherBtn: {
		width: 100,
	},
	lowerBtn: {
		width: 100,
	},
	cardFormat: {
		padding: 20,
		width: '80%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 10,
		elevation: 8,
		borderRadius: 5,
	},
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
});

export default GameScreen;
