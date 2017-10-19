import React from 'react'
import Month from './Month';
import Weeks from './Week';

const Selector = ({selectMonth}) => {
    return (
      <div>
        <select id="selectMonth" onChange={(e) => {
          //console.log(e,e.target.value)
          selectMonth(e.target.value);
        }}>
          <option value="month">Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
    );
  }

export default Selector;
