import React from 'react';
import { connect } from 'react-redux';
import {
  Toolbar,
  ToolbarGroup
} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

import { clearAll } from '../actions/index';

class Footer extends React.Component {
  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          
        </ToolbarGroup>
        <ToolbarGroup firstChild={true}>
          <RaisedButton
            label="Clear All"
            primary={true}
            onClick={() => this.props.onClearAll()}
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClearAll: () => dispatch(clearAll()),
  };
};

export default connect(null, mapDispatchToProps)(Footer);
