import React from 'react';

const displayMessage = 'This is hour inside week now';

// class component
class Hour extends React.Component {
  render() {
    return (
      <div>
        <p>{displayMessage}</p>
      </div>
    );
  }
};


export default Hour;
