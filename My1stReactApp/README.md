### note:(need to know) import file, export file: use another file's code: https://www.w3schools.com/react/tryit.asp?filename=tryreact_es6_module1
for more: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
<hr>

### 'hello-world' --> app--> if any one taking this app from github then need to run--> $ npm install --> (to install dependecies)
## 2. To create a react app we need to make a directory 
## 1. lets call the directory: My1stReactAapp: open terminal from that directory, Now create React app 'hello-world'
```
$ create-react-app hello-world
// will start creating app with -> react, react DOM, bebel
// Now, in terminal, we will see many suggestions command--> among them:
$ npm start 
// to start the app
```
## 2. Now change directory to app folder 'hello-world' and start app.
```
$ cd hello-world
$ npm start 
```
## 3. Now, a server will be created to run React--> see the browser
<br><br>
<hr>
<hr>

# src and public folders : 'src' folder --> is very important
## inside src folder--> we have 'index.js' to do code.
<hr>

### 1. inside the public folder we have 'index.html' we will use this to show on browser(only one HTML) 
```
<!-- inside the html file we only have 1 <div id='root'> -->

<div id="root"></div>

<!-- we will use only use this div to inject our react.js code -->
```
### 2. inside src folder--> we have 'index.js' to do react.js code.(only do code here)
<br>
<hr><br>
 
# Start coding inside the src folder: 
# component : 1. function component 2. class component
<img src="picS/functional and class component.JPG" alt="peng ting" width="500" height="60%">
 <br><br>

## 1. function component <hr>


### 1. App.js-> contains App component-> export default App.
### 2. index.js-> contains Randering info. used ReactDOM to render on html.
```
// structure of ReactDOM:
ReactDOM.render(React or JSX component, HTML component);
//example:
ReactDOM.render(<App />,  document.getElementById('root'));
```
### 3. Example of a simple component:
```
/// example of a component:
function App() {          // a react component
  return (                // JSX code
    <div className="App">
      <h1>Hello</h1>
    </div>
  );                      // JSX code
}                         // a react component end

export default App;       // exporting the component
```
### 4. Now example of 2 components passing togather: App.js->
#### note: one react component contains only one root elemnt. but we can pass other element by calling function inside the element.
```
function App() {          // a react component
  return (                // JSX code
    <div className="App">
      <h1>Hello</h1>
      <Person />          {/*+ taking the 2nd compnent to pass */}
    </div>
  );                      // JSX code
}                         // a react component end

function Person() {          // a react component
  return (                // JSX code
    <div className="App">
      <h1>I am a person from 2nd element</h1>
    </div>
  );  

export default App;  contains both components
```
### 5. as App contains both the componenta togater. inside index.js, only one 'App'  rendering is enough.
```
import App from './App';
ReactDOM.render(<App />,  document.getElementById('root'));
```
 <br> 

## 2. class component <hr>
<img src="picS/class component vs functional component.JPG" alt="peng ting" width="500" height="60%">