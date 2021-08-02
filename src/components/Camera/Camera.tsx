import React from 'react';
import { Platform, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { Button } from 'react-native-elements';
import style from './style';

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
		<View style={style.styleCamera.container}>
			<RNCamera
				ref={cameraRef}
				style={
					Platform.OS === 'ios'
						? style.styleCamera.previewIOS
						: style.styleCamera.previewAndroid
				}
				type={RNCamera.Constants.Type.back}
				captureAudio={false}
				flashMode={RNCamera.Constants.FlashMode.on}
				androidCameraPermissionOptions={{
					title: 'Permission to use camera',
					message: 'We need your permission to use your camera',
					buttonPositive: 'Ok',
					buttonNegative: 'Cancel',
				}}>
				<Button title='Capture' onPress={() => captureCode}>
					Click
				</Button>
			</RNCamera>
		</View>
	);
}
