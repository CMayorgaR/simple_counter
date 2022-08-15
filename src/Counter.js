import logo from './logo.svg';
import {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function Counter(){

    const [counter, setCounter] = useState(0);

	useEffect(() => {
	  setInterval(() => {
		setCounter(prevCounter => prevCounter + 1);
	  }, 1000);
	}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple counter con REACT:
        </p>
        <a
          className="App-link"
        >
        <FontAwesomeIcon icon={faClock} style={{"margin-right":"10px"}}/> {counter}
        </a>
      </header>
    </div>
  );
}

export default Counter;
