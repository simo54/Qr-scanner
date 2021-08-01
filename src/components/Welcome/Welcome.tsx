import React from 'react';
import { Text, View } from 'react-native';
import customStyle from './style';

export default function Welcome() {
	return (
		<View style={customStyle.styleWelcome.container}>
			<Text style={customStyle.styleWelcome.text}>
				🚀 Welcome to this boilerplate 🚀
			</Text>
		</View>
	);
}
