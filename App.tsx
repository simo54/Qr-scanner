import React, { useEffect } from 'react';
import { PermissionsAndroid, SafeAreaView, StyleSheet } from 'react-native';
import Camera from './src/components/Camera/Camera';

export default function App() {
	useEffect(() => {
		requestCameraPermission();
	}, []);

	const requestCameraPermission = async () => {
		console.log('coool');
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.CAMERA,
				{
					title: 'Cool Photo App Camera Permission',
					message:
						'Cool Photo App needs access to your camera ' +
						'so you can take awesome pictures.',
					buttonNeutral: 'Ask Me Later',
					buttonNegative: 'Cancel',
					buttonPositive: 'OK',
				}
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				alert('you can use');
			} else {
				alert('permission denide');
			}
		} catch (err) {
			console.warn(err);
		}
	};

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
