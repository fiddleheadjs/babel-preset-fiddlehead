module.exports = () => ({
    presets: [
        require('@babel/preset-env'),
    ],
    plugins: [
        [require('@babel/plugin-transform-react-jsx'), {
            pragma: 'jsx',
            pragmaFrag: "'['",
        }],
        [require('babel-plugin-auto-import'), {
            declarations: [{
                members: ['jsx'],
                path: 'fiddlehead',
            }]
        }]
    ],
});
