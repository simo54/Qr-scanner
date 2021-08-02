import { Dimensions, StyleSheet } from 'react-native';

const styleCamera = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'black',
		height: 'auto',
	},
	previewIOS: {
		flexDirection: 'column',
		alignItems: 'center',
		width: Dimensions.get('window').width,
		flex: 1,
	},
	previewAndroid: {
		flex: 1,
		width: Dimensions.get('window').width,
	},
});

export default { styleCamera };
