import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import Task from '../Task';
import { loadTask, loadTaskStates, loadUserImages } from './functions'
import { getStates, setPhotos } from '../../redux';


const TaskTable = () => {

  const { permissions } = useSelector(state => state);
  const { stateUpdate } = useSelector(state => state);
  const { visionMenu } = useSelector(state => state);

  // eslint-disable-next-line
  const history = useHistory();
  const dispatch = useDispatch();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTask(permissions, visionMenu).then(response => {
      if (response.error === true) {
        alert('teste')
      } else {
        setTasks(response.data);
      }
    });
    // eslint-disable-next-line
  }, [stateUpdate]);

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

  useEffect(() => {
    loadUserImages(permissions).then(response => {
      if (response.error === true) {
        alert('teste')
      } else {
        dispatch(setPhotos(response.data))
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
