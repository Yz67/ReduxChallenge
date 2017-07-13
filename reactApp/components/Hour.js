import React from 'react';

/* Equivalent function component! */
let Hour = ({appt, addCall, openModal}) => {
  return (
     <div
      //  onclick={() => openModal()}
       onClick={() => openModal(appt.id)}
       className={appt.class}>{appt.text} {appt.number}
     </div>
  );
}
//style={hourStyle}>{appointments[1].text}
const hourStyle = {
  backgroundColor: 'white',
  width: 200,
  height: 50,
  borderWidth: 10,
  borderColor: 'blue'
}
// class Hour extends React.Component {
//   render() {
//     return (
//       <div
//         id={5}
//         onClick={() => addCall(id)}>
//         <p>{displayMessage}</p>
//       </div>
//     );
//   }
// };

export default Hour;
