import React from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { Button } from 'react-native-elements';

export default function Camera() {
	const [{ cameraRef }, { takePicture }] = useCamera(undefined);

	const captureCode = async () => {
		try {
			const data = await takePicture();
			console.log(data.uri);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View>
			<RNCamera ref={cameraRef} type={RNCamera.Constants.Type.back}>
				<Button title='Capture' onPress={() => captureCode}>
					Click
				</Button>
			</RNCamera>
		</View>
	);
}
