import React from 'react';
import Weeks from './Week';
import { HashRouter as Router, Route, Redirect, Link } from 'react-router-dom';


const Month = ({month}) => {
  return (
    <div>
      <h2>{month}</h2>

      <Weeks month={month}/>
    </div>
  );
}

export default Month;
