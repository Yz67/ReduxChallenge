import React from 'react';
import Timeslot from './Timeslot';

class TimeslotList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='timeslotlist'>
                {this.props.timeslots.map( (timeslot) => (
                    <Timeslot
                        onModalClose={() => this.props.onModalClose()}
                        onModalSubmit={() => this.props.onModalSubmit(values, time)}
                        toggleModal={(data) => this.props.toggleModal(data)}
                        modalOpen={this.props.modalOpen}
                        key={timeslot.time}
                        time={timeslot.time}
                        occupied={timeslot.occupied}
                        info={timeslot.info}
                    />))}
            </div>
    );
  }
};

export default TimeslotList;
