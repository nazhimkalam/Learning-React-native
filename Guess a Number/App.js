import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './component/Header';
import StartGameScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

export default function App() {
	const [getUserNumber, setUserNumber] = useState();
	const [getGuessRounds, setGuessRounds] = useState(0);

	const restartGame = () => {
		setGuessRounds(0);
		setUserNumber(null);
	};

	const gameOverHandler = (numberOfRounds) => {
		setGuessRounds(numberOfRounds);
	};

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
		setGuessRounds(0);
	};

	let content = <StartGameScreen onStartGame={startGameHandler} />;

	if (getUserNumber && getGuessRounds == 0) {
		content = <GameScreen userChoice={getUserNumber} onGameOver={gameOverHandler} />;
	} else if (getGuessRounds > 0) {
		content = <GameOver userNumber={getUserNumber} roundsNumber={getGuessRounds} onRestart = {restartGame}/>;
	}

	return (
		<View style={myStyle.screen}>
			<Header title="Guess a Number" />
			{content}
		</View>
	);
}

const myStyle = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
