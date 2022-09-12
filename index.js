const { spawn } = require('child_process');
const testFolder = './';
const fs = require('fs');
var isWin = process.platform === "win32";
console.log(`isWin ...... ${isWin}`);
if(isWin){
  console.log("Processing....");
  console.log("Hide Win32 Console Host");
  require('child_process').execSync('hide.exe', {stdio: 'inherit'});
}
const ls = spawn('java', ['java']);
ls.stdout.on('data', (data) => {
  console.log(`${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`${data}`);
});

ls.on('close', (code) => {
  console.log(`JavaFX GUI Closed with Code ${code}`);
  require('child_process').execSync('show.exe', {stdio: 'inherit'});
});