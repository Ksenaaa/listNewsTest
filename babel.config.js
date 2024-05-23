module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: [
                    '.ios.js',
                    '.ios.ts',
                    '.ios.tsx',
                    '.android.js',
                    '.android.ts',
                    '.android.tsx',
                    '.js',
                    '.ts',
                    '.tsx',
                    '.json',
                ],
                alias: {
                    '^@src/(.+)': './src/\\1',
                },
            },
        ],
        [
            'module:react-native-dotenv',
            {
                envName: 'APP_ENV',
                moduleName: '@env',
                path: '.env',
            },
        ],
        ['@babel/plugin-transform-private-methods', { loose: true }],
        'react-native-reanimated/plugin',
    ],
};
