import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Userlist from '../UserList';



const Teams = () => {
  const classes = '';

  return (
    <div className={classes}>
      <Userlist />
    </div>
  );
};

Teams.propTypes = {
  history: PropTypes.object
};

export default withRouter(Teams);
