import React from 'react';
import Hour from './Hour';

let Week = ({ appointments, openModal}) => {
  return (
     <div>
       <h1>Day 1: </h1>
       {appointments.map((obj) => (
         <Hour
           key={obj.id} openModal={(id) => openModal(id)}
           appt={obj}
           ></Hour>))}
     </div>
  );
}


export default Week;












// class Week extends React.Component {
//   render() {
//     return (
//       <div>
//         <Hour></Hour>
//       </div>
//     );
//   }
// };
