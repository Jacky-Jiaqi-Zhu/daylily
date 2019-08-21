import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import { connect } from 'react-redux';
import { initTasks } from '../../redux/actions'

const useStyles = makeStyles(theme => ({

}));

const TaskList = ({ tasks, initTasks }) => {

  console.log(tasks)
  // const tasks = tasks

  return (
    <div>
      {
        tasks.map((task) =>
          (
            <Card key={task.id}>
              <CardContent>
                <Typography>{task.name}</Typography>
                <Typography>{task.desc}</Typography>                
              </CardContent>
            </Card>
          )
        )
      }

    </div>
  )

}

TaskList.propTypes = {
  tasks: PropTypes.array
};

const mapStateToProps = state => ({
  tasks: state.tasksReducer.tasks
})



const mapDispatchToProps = dispatch => ({
  initTasks: dispatch(initTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
