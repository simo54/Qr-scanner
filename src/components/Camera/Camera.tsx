import React, { useEffect, useState } from 'react';
import {
	Linking,
	View,
	Text,
	TouchableOpacity,
	PermissionsAndroid,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import style from './style';

export default function Camera() {
	const [hasPermission, setHasPermission] = useState(false);

	const onScan = (e: any) => {
		console.log(e);
		Linking.openURL(e.data).catch((err) =>
			console.error('An error occured', err)
		);
	};

	console.log(PermissionsAndroid);

	const askForCameraPermission = async () => {
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
				setHasPermission(true);
			} else {
				setHasPermission(false);
			}
		} catch (err) {
			console.warn(err);
		}
	};

	// Request Camera Permission
	useEffect(() => {
		askForCameraPermission();
	}, []);

	return (
		<View style={style.styleCamera.container}>
			{hasPermission ? (
				<QRCodeScanner
					onRead={onScan}
					topContent={
						<Text>
							Go to <Text>wikipedia.org/wiki/QR_code</Text> on your computer and
							scan the QR code.
						</Text>
					}
					bottomContent={
						<TouchableOpacity>
							<Text>OK. Got it!</Text>
						</TouchableOpacity>
					}
				/>
			) : null}
		</View>
	);
}
