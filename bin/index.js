const { spawn , exec } = require('child_process');
const testFolder = './';
const fs = require('fs');
var isWin = process.platform === "win32";

var java = "java";
var jarFound = 0;
var javac = "javac";

if (fs.existsSync(`.\\jre\\win-${process.arch}`)) {
  console.log("Pre-JRE Found!");
  java = `.\\jre\\win-${process.arch}\\java.exe`;
  jarFound = 1;
}

if(jarFound == 0){
  console.log("Either JRE for "+process.arch+" is not packaged Or This Architecture of cpu is not supported by java");
}

console.log(`isWin ...... ${isWin}`);
if(isWin){
  console.log("Processing....");
  console.log("Hide Win32 Console Host");
  require('child_process').execSync('bin\\hide.exe', {stdio: 'inherit'});
}

run();

function compileJavac(){
  console.log("Trying to Compile And Relaunch");
  exec(`${javac} java.java` , (stdout , stderr , stdio) => {
    run(1);
  });
}
function run(id = 0){
  const ls = spawn(`${java}`, ['java']);
  ls.stdout.on('data', (data) => {
    console.log(`${data}`);
    if(data.includes("Error:")){
      if( id == 0 ){
        compileJavac()
      }else{
        console.log("Unable to Run Application");
      }
    };
  });

  ls.stderr.on('data', (data) => {
    console.error(`${data}`);
    if(data.includes("Error:")){
      if( id == 0 ){
        compileJavac()
      }else{
        console.log("Unable to Run Application");
      }
    };
  });
  ls.on('close', (code) => {
    console.log(`JavaFX GUI Closed with Code ${code}`);
    require('child_process').execSync('bin\\show.exe', {stdio: 'inherit'});
  });
}