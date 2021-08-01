module.exports = {
	root: true,
	extends: [
		'@react-native-community',
		'prettier',
		'plugin:cypress/recommended',
	],
	plugins: ['prettier', 'unused-imports'],
	rules: {
		'prettier/prettier': 'error',
		'unused-imports/no-unused-imports-ts': 2,
		'import/prefer-default-export': 'off',
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
	},
};
