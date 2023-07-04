module.exports = {
	root: true,
	extends: '@react-native',
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
			rules: {
				'comma-dangle': [
					'error',
					{
						arrays: 'never',
						objects: 'never',
						imports: 'never',
						exports: 'never',
						functions: 'never'
					}
				]
			}
		}
	]
};
