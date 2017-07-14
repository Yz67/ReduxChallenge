import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, ListItem, ListSubHeader} from 'react-toolbox/lib/list';
import DialogBox from './DialogBox';


class TimeSlotContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    findInfo(time) {
        if (!this.props.entries[time] || !this.props.entries[time].name || !this.props.entries[time].phone ) {
            return '';
        }
        const name = this.props.entries[time].name || '';
        const phone = this.props.entries[time].phone || '';
        const space = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0';
        return space + 'Name: ' + name + space + ' Phone: ' + phone;
    }

    render() {
        return (
            <div className="timeSlotContainer">
                <List selectable ripple>
                    <ListSubHeader caption="Phone Schedule" />
                    {this.props.times.map((time, index) => {
                        return (
                            <ListItem
                                key={index}
                                avatar="https://image.flaticon.com/icons/png/512/9/9243.png"
                                caption={time + this.findInfo(time)}
                            >
                                <DialogBox tag={time}/>
                            </ListItem>);
                    })}
                </List>
            </div>
        );
    }
}

TimeSlotContainer.propTypes = {
    times: PropTypes.array,
    entries: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        times: state.times,
        entries: state.entries
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeSlotContainer);
