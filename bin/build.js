const exe = require('@angablue/exe');

const build = exe({
    entry: './bin/index.js',
    out: './javatest.exe',
    pkg: [ '--public'], // Specify extra pkg arguments
    version: '1.0.0',
    target: 'node16-win-x64',
    icon: './icon/icon.ico',
    properties: {
        FileDescription: 'Test 123',
        ProductName: 'index',
        LegalCopyright: 'Creeper INC',
        OriginalFilename: 'javatest.exe'
    }
});

build.then(() => console.log('Build completed!'));