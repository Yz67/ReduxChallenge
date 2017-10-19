import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardActions,
  CardTitle,
  CardText,
} from 'material-ui/Card';

// imported components
import Hour from './Hour'

class Day extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const hours = [
      '9:00-10:00',
      '10:00-11:00',
      '11:00-12:00',
      '12:00-1:00',
      '1:00-2:00',
      '2:00-3:00',
      '3:00-4:00',
      '4:00-5:00',
    ]
    return (
      <Card className={'day'}>
        <CardTitle
          title={this.props.day}
        />
        <CardActions className={'dayCardActions'}>
          {hours.map(hour =>
            <Hour
              key={hour}
              time={hour}
              day={this.props.day}
            />
          )}
        </CardActions>
      </Card>
    );
  }
};

export default Day;
