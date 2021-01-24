// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import reportWebVitals from './reportWebVitals';
// Create react component

const App = () => {

  const buttonText = {text: 'Print me!'}
  const labelText = 'Enter Text'
  const cssStyle = { backgroundColor: 'blue', color: 'white' }

  function getTime() {
    return (new Date().toLocaleDateString())
  }

  return (
    <div>

      <label className="label" htmlFor='name'>
        {labelText}
      </label>

      <input id ="name" type="text" />

      <button style={cssStyle}>
        {buttonText.text}
      </button>
      <br></br>
      <label>
        Current Time: {getTime()}
      </label>
    </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();