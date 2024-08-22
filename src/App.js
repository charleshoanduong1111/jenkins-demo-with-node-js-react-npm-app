import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
		
		<div>
		  	<h3>Learn React will help you to understand the following instruction:</h3>
		   	<h3>Go to download: <a className="App-link" href="https://nodejs.org">Node.js</a></h3>
			<h3>If Node.js is ok, you need to create "node_modules" by running: </h3>
			<code>npm install</code><br></br>
			<h3>Go to: <a className="App-link" href="https://www.w3schools.com/react/react_getstarted.asp">React Get Start</a></h3>
			<h3>You may learn how to create the my-react-app and run it by the following instructon:</h3>
		 	<code>npm uninstall -g create-react-app</code><br></br>			
		   	<code>npx create-react-app my-react-app</code><br></br>
		 	<code>cd my-react-ap</code><br></br>		 
			<code>npm start</code><br></br>
			<code>Open your browser and type localhost:3000 in the address bar and you can see the result</code>
		</div>
		
      </header>
    </div>
  );
}

export default App;