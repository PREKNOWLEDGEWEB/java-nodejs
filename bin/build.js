const exe = require('@angablue/exe');
const fs = require("fs");
const { exec } = require('child_process');

if (!fs.existsSync("bin\\hide.exe")) {
    console.log("Please Compile : g++ cpp-files/hideconsole.cpp -o bin/hide.exe");
    process.exit(2);
}
if (!fs.existsSync("bin\\show.exe")) {
    console.log("Please Compile : g++ cpp-files/showconsole.cpp -o bin/show.exe");
    process.exit(2);
}

exec('npm run compile', (error, stdout, stderr) => {
  if (error) {
    console.log('Failed to Compile Java Code to Class \n \n');
    console.error(`${error}`);
    return;
  }
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
});