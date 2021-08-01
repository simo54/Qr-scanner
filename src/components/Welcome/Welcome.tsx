import React from 'react';
import { View } from 'react-native';
import customStyle from './style';
import Camera from '../Camera/Camera';
export default function Welcome() {
	return (
		<View style={customStyle.styleWelcome.container}>
			<Camera />
		</View>
	);
}
