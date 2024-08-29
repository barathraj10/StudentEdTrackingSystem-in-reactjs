import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './App';
import Content from './content';
import Menu from './menu';


function Final(){
  return(
    <div>
      <Nav/>
      <Content/>
      <Menu/>
    </div>
  )
}

ReactDOM.render(<Final/>,document.getElementById('root'));

