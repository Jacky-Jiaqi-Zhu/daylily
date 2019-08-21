import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Schedule = () => {
    
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        Schedule
      </div>
    </div>
  );
};

Schedule.propTypes = {
  history: PropTypes.object
};

export default withRouter(Schedule);
