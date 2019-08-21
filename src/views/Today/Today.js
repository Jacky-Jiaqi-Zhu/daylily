import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import TaskList from '../../components/TaskList';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Today = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <TaskList tasks={[]} />
      </div>
    </div>
  );
};

Today.propTypes = {
  history: PropTypes.object
};

export default withRouter(Today);
