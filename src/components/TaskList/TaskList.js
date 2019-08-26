import React, { useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import { connect } from 'react-redux';
import { updateTasks } from '../../redux/actions'

const useStyles = makeStyles(theme => ({

}));

const TaskList = ({ tasks, updateTasks }) => {

  useEffect(() => {
    fetch('http://localhost:1234/tasks/list', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(
      (response) => {
        return response.json().then(
          (tasks) => {
            updateTasks(tasks)
          }
        )
      }
    )
  }, []);

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
  updateTasks: (tasks) => { dispatch(updateTasks(tasks)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
