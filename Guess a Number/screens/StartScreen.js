import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Button, Keyboard, Alert } from 'react-native';

import Colour from '../constants/Colours';
import DefaultTextInput from '../component/InputField';
import OutputNumber from '../component/outputNumber';
import Colors from '../constants/Colours';

const StartGameScreen = (props) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [confirm, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState('');

	const numberInputHandler = (inputText) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	};

	const resetInput = () => {
		setEnteredValue('');
		setConfirmed(false);
	};

	const confirmPressed = () => {
		const chosenNumber = parseInt(enteredValue);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Invaild Number!', 'Enter numbers between 0 and 99 only', [
				{ text: 'Ok', style: 'destructive', onPress: resetInput },
			]);
			return;
		} else {
			setConfirmed(true);
			setSelectedNumber(chosenNumber);
			setEnteredValue('');
			Keyboard.dismiss();
		}
	};

	let confirmOutput;

	if (confirm) {
		confirmOutput = (
			<View style={styles.confirmOutput}>
				<Text style={styles.outputText}>You have selected</Text>
				<OutputNumber>{selectedNumber}</OutputNumber>
				<Button title="START GAME" color={Colors.special} onPress={() => props.onStartGame(selectedNumber)} />
			</View>
		);
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.screen}>
				<Text style={styles.startHeading}>Start a New Game!</Text>

				<View style={styles.innerBody}>
					<Text style={styles.selectNumber}>Select a Number</Text>
					<DefaultTextInput
						placeholder="Enter a number"
						maxLength={2}
						keyboardType="number-pad"
						autoCorrect={false}
						style={styles.textField}
						onChangeText={numberInputHandler}
						value={enteredValue}
					/>

					<View style={styles.buttons}>
						<View style={styles.btnStyle}>
							<Button title="Reset" color={Colour.reset} onPress={resetInput} />
						</View>
						<View style={styles.btnStyle}>
							<Button title="Confirm" color={Colour.confirm} onPress={confirmPressed} />
						</View>
					</View>
				</View>
				{confirmOutput}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	outputText: {
		color: Colors.confirm,
	},
	confirmOutput: {
		padding: 30,
		paddingLeft: 30,
		paddingRight: 30,
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: 10,
		elevation: 9,
		borderRadius: 15,
	},
	btnStyle: {
		width: 100,
		padding: 5,
	},
	textField: {
		backgroundColor: Colour.textField,
		margin: 20,
	},
	selectNumber: {
		alignSelf: 'center',
		fontSize: 18,
		color: 'red',
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginHorizontal: -50,
	},
	innerBody: {
		padding: 20,
		width: '80%',
		flexDirection: 'column',
		marginTop: 10,
		elevation: 8,
		borderRadius: 5,
	},
	startHeading: {
		paddingBottom: 10,
		paddingTop: 10,
		paddingLeft: 40,
		paddingRight: 40,
		marginTop: 10,
		fontSize: 20,
		borderColor: 'black',
		borderWidth: 2,
		borderRadius: 20,
	},
	screen: {
		flex: 1,
		padding: 5,
		alignItems: 'center',
	},
});

export default StartGameScreen;
