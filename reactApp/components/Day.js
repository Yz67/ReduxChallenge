import React from 'react';
import PropTypes from 'prop-types';

const Day = ( { agenda, clickTime, day } ) => {
    return (
        <div>
            <p>Day { day + 1 }:</p>
            <div className="Day">
                { agenda.map(( time, idx ) => {
                    return (
                        <div key={ idx } onClick={ () => clickTime( time.person, time.phone, day, idx ) } className={ 'timestamp '.concat( time.person ? 'open' : 'closed' ) }>
                            <text>{ time.person }</text><br />
                            <text>{ time.phone }</text><br />
                            <text>{ idx + 9 > 12 ? idx - 3 + ' PM' : idx + 9 + ' AM' }</text><br />
                        </div>
                    );
                } ) }
            </div>
        </div>
    );
};

Day.propTypes = {
    agenda: PropTypes.array,
    day: PropTypes.number,

    clickTime: PropTypes.func
};

export default Day;
