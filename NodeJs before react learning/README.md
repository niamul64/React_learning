## Note: if i have package.json file the i just need to run: [npm install] -> all dependencies will be installed.
### only package.json file is enough to send for dependencies.(but we have to use '--save' after every package install command)
### don't need to share the node_modules file.
### import file, export file: use another file's code: https://www.w3schools.com/react/tryit.asp?filename=tryreact_es6_module1
for more: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
<br><br><hr>

#### node packages documentation: https://www.npmjs.com/package/date-format
#### '$npm help': show alo the command that i can use.
<hr>

### see global dependecy installation folder
```
$ npm root -g
```
### install any package as globally in pc
```
$ npm install [package_name] -g
```
### uninstall any package from globally in pc
```
$ npm uninstall [package_name] -g
```
### install any package as development requirement, but don't need in production, and keep it separetly in package.json file
```
$ npm install [package_name] --save-dev
```
### install dependecies from package.json:
```
$ npm install
```
### install a particular version of any package:
```
$ npm install bootstrap@3.7.7 --save
```
### uninstall any package:
```
$ npm uninstall bootstrap --save
```
### update any package:
```
$ npm update bootstrap
```

<hr><hr>

### 1. Come to the folder where we want to make node app or npm app. and type on terminal:
$ npm init
// shortcut: initialize with deafult
$ npm init --yes
```
package name: (myapp)
version: (1.0.0)
description: "learing npm"
entry point: (index.js)
test command:
git repository:
keywords:
author: niamul
license: (ISC)
About to write to D:\github uploads\React_learning\MyApp\package.json:
```
### 2. Now, install a package: search by the package on the website: https://www.npmjs.com/package/date-format
### here, '--save' is very important after install package command. by this we are installing and saying to auto include in package.json file
```
// search: date-formate: will get the doc for this: follow th instruction from doc
$ npm install date-format --save 
```
### 3. install bootstrap: must use '--save'
```
$ npm install bootstrap --save
```
<hr>

# Now, use packages in js file: create a index.js
### 1. Use date_format package.: follow documatation for using the package
