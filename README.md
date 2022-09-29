# java-nodejs
Expirment to Open Java Apps Using NodeJs
Currently No Name Yeah No Name
# Building
## Step 1 :Compile hideconsole.cpp
```bash
g++ cpp-files/hideconsole.cpp -o bin/hide.exe
```
## Step 2 :Compile showconsole.cpp
```bash
g++ cpp-files/showconsole.cpp -o bin/show.exe
```
(Consider Using g++(mingw) instead of msys2)

## Step 3 : Compile java.java (Optional)
(You Must Have JDK Installed for this)
```bash
npm run compile
```
## Step 4 Compile Executable (automatically compiles java)
```bash
npm run pkg
```
(Done Output will be in there)