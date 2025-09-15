module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    [
      '@babel/preset-typescript',
      {
        allowDeclareFields: true, // Enable parsing of 'declare' modifier
      },
    ],
  ],
};