const webpack = require('webpack')
const path = require('path')



const config = {
    entry: {
        'vendors': [
            'rxjs',
            '@angular/common',
            '@angular/compiler',
            '@angular/core',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            '@ngrx/core',
            '@ngrx/store',
            '@ngrx/effects'
        ]
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: './[name].bundle.js',
        library: '__[name]'
    },
    plugins: [new webpack.DllPlugin({
        name: '__[name]',
        path: 'build/[name]-manifest.json',
    })]
}

console.log(config.output)

module.exports = config;