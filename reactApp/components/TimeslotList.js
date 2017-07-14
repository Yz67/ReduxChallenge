import React from 'react';
import Timeslot from './Timeslot';

class TimeslotList extends React.Component {
    constructor(props) {
        super(props);
        console.log('timeslots prop', this.props.timeslots.map);
    }
    render() {
        return (
            <div className='timeslotlist'>
                {Array.prototype.slice.call(this.props.timeslots).map( (timeslot) =>
                    <Timeslot
                        onModalClose={() => this.props.onModalClose()}
                        toggleModal={(data) => this.props.toggleModal(data)}
                        modalOpen={this.props.modalOpen}
                        key={timeslot.time+this.props.day}
                        time={timeslot.time}
                        occupied={timeslot.occupied}
                        info={timeslot.info}
                        day={this.props.day}
                    />)}
            </div>
    );
  }
};

export default TimeslotList;
