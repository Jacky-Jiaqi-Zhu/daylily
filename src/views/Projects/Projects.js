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

const Projects = () => {
    
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        Projects
      </div>
    </div>
  );
};

Projects.propTypes = {
  history: PropTypes.object
};

export default withRouter(Projects);
