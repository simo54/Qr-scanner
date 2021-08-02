import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Camera from './src/components/Camera/Camera';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Camera />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
