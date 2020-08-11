import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
	// This was for Tutorial_01
	// const [outputText, setOutputText] = useState('Hello World');

	// Tutorial_04
	const [enteredText, setEnteredText] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	// displays the content on the text box when you type
	const changeInTextInput = (dataEntered) => {
		setEnteredText(dataEntered);
	};

	// when button clicked we collect whats written into a list and display it's contents
	const btnClick = () => {
		setCourseGoals((currentGoals) => [...currentGoals, { id: Math.random().toString(), value: enteredText }]);
	};

	return (
		//Tutorial_01
		// <View style = {{padding:50}}>
		//   <Text>{outputText}</Text>
		//   <Button title = "click me" onPress = { () => setOutputText('Changed Text')} />
		// </View>

		// Tutorial_02
		// <View style = { { padding : 30} }>
		//   <View style = { {flexDirection:'row', justifyContent:'center', alignItems:'center'} }>
		//     <TextInput placeholder = "Enter text here" style = { {borderColor:'black', borderWidth:2, padding:10, width:'80%'} } />
		//     <Button title = "ADD" />
		//   </View>
		// </View>

		// Tutorial_03 ( Flex-Box )
		// <View style={{ padding: 50, flexDirection: 'column-reverse' }}>
		// 	<View
		// 		style={{
		// 			backgroundColor: 'red',
		// 			width: 80,
		// 			height: 80,
		// 			justifyContent: 'center',
		// 			alignItems: 'center',
		// 		}}
		// 	>
		// 		<Text>1</Text>
		// 	</View>

		//   <View
		// 		style={{
		// 			backgroundColor: 'blue',
		// 			width: 80,
		// 			height: 80,
		// 			justifyContent: 'center',
		// 			alignItems: 'center',
		// 		}}
		// 	>
		// 		<Text>2</Text>
		// 	</View>

		//   <View
		// 		style={{
		// 			backgroundColor: 'green',
		// 			width: 80,
		// 			height: 80,
		// 			justifyContent: 'center',
		// 			alignItems: 'center',
		// 		}}
		// 	>
		// 		<Text>3</Text>
		// 	</View>
		// </View>

		// Tutorial_04 _Using_External_StyleSheet
		// <View style={myStyle.this}>
		// 	<View style={myStyle.thisView}>
		// 		<TextInput
		// 			placeholder="Enter data"
		// 			style={myStyle.thisTextView}
		// 			onChangeText={changeInTextInput}
		// 			value={enteredText}
		// 		/>
		// 		<Button title="Click Me" onPress={btnClick} />
		// 	</View>

		// 	<FlatList
		// 		keyExtractor={(item, index) => item.id}
		// 		data={courseGoals}
		// 		renderItem={(itemData) => (
		// 			<View style={myStyle.outputList}>
		// 				<Text> {itemData.item.value}</Text>
		// 			</View>
		// 		)}
		// 	/>
		// </View>
	);
}

const myStyle = StyleSheet.create({
	thisView: {
		padding: 20,
		marginTop: 50,
	},
	thisTextView: {
		borderWidth: 2,
		borderColor: 'black',
		padding: 10,
	},
	thisFlex: {
		flexDirection: 'row',
	},
	outputList: {
		padding: 10,
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: '#abcdef',
		borderColor: 'black',
		borderWidth: 1,
	},
});
