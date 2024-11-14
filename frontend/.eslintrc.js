module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		semi: ['warn', 'always'],
		quotes: [
			'warn',
			'single',
			{
				'avoidEscape': true,
				'allowTemplateLiterals': true,
			},
		],
		indent: ['warn', 'tab', { SwitchCase: 1 }],
		'react/jsx-curly-brace-presence': ['warn', { props: 'always' }],
		'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
		'no-unused-vars': 'warn',
		'react-hooks/rules-of-hooks': 'warn',
		'react-hooks/exhaustive-deps': 'warn',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
