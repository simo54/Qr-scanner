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
	const [url, setUrl] = useState<undefined | string>(undefined);
	const onScan = (e: any) => {
		setUrl(e.data);
		Linking.openURL(e.data).catch((err) =>
			console.error('An error occured', err)
		);
	};

	return (
		<View style={style.styleCamera.container}>
			<QRCodeScanner
				onRead={onScan}
				bottomContent={
					<Text style={style.styleCamera.text}>
						{url ? <Text>Url id {url}</Text> : <Text>Scan</Text>}
					</Text>
				}
			/>
		</View>
	);
}
