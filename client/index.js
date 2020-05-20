import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  return (
    <div>Hello Mern App - Front End React</div>
  )
}

const ele = document.getElementById('app');

ReactDOM.render(<App />,ele);
