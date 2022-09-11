const { exec } = require('child_process');
const testFolder = './';
const fs = require('fs');
var isWin = process.platform === "win32";

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

if(isWin){
	console.log("processing....");
	require('child_process').execSync('hide.exe', {stdio: 'inherit'});
}

exec('java java');