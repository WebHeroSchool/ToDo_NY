import logo from './logo.svg';
import './App.css';

const number = 5;
const flag = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
		<p style={{color: 'green'}}>
		  Wake up to a new world!!!
		</p>
		<p>
          Переменная number = {number}
        </p>

        <p>
          Number * 10 = {number * 10} <br />
        </p>

        <p>
		 Логический вывод: {flag &&  'Flag is true'}
		</p>        

        <p>
         Тернарный вывод: {flag ? 'Flag is true' :  'Flag is false'}
        </p>
		
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
		
		
      </header>
    </div>
  );
}

export default App;
