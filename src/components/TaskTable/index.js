import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import Task from '../Task';
import { loadTask, loadTaskStates } from './functions'
import { getStates } from '../../redux';


const TaskTable = () => {

  const { permissions } = useSelector(state => state);

  // eslint-disable-next-line
  const history = useHistory();
  const dispatch = useDispatch();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTask(permissions).then(response => {
      if (response.error === true) {
        alert('teste')
      } else {
        setTasks(response.data);
      }
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    loadTaskStates(permissions).then(response => {
      if (response.error === true) {
        alert('teste')
      } else {
        dispatch(getStates(response.data))
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      {tasks.map(task =>
        <Task task={task} key={task.id} />
      )}
    </Container>
  );
}

export default TaskTable;
