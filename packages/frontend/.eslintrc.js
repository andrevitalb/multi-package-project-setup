module.exports = {
	extends: [
		"react-app",
		"plugin:jsx-a11y/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@next/next/recommended",
		"../.eslintrc.base.js",
	],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: "./tsconfig.json",
	},
	env: {
		node: true,
	},
	rules: {
		"@typescript-eslint/no-unused-vars": "off",
		"react/react-in-jsx-scope": "off",
		"jsx-a11y/anchor-is-valid": "off",
		"@next/next/no-img-element": "off",
		"@next/next/no-css-tags": "off",
	},
	overrides: [
		{
			files: ["*.tsx"],
			rules: {
				"@typescript-eslint/explicit-function-return-type": ["off"],
				"@typescript-eslint/explicit-module-boundary-types": ["off"],
			},
		},
	],
}
