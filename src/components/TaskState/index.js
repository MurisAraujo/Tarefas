import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Menu, StateItem } from './styles';
import api from '../../services/api';
import { updateTask } from '../../redux'

const TaskState = ({ task }) => {

  const { taskStates } = useSelector(state => state);
  const { permissions } = useSelector(state => state);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const updateState = async (id) => {
    try {
      api.put(`Task.php?AUTH=${permissions.session}`, {
        "id": task.id,
        "description": task.description,
        "full_description": task.full_description,
        "final_date": task.final_date,
        "state": id,
        "priority": task.priority,
        "user_id": task.user_id,
      }).then(() => {
        dispatch(updateTask())
        setShow(false);
      });

    } catch (error) {
      alert(error);
    }
  }

  return (
    <Menu show={show}>
      {taskStates.map(state => (
        <React.Fragment key={state.id}>
          {
            state.id === task.state_id ?
              <Container color={state.color} onClick={() => setShow(!show)}>
                <h2>{state.description}</h2>
              </Container> :
              null
          }
        </React.Fragment>
      ))}
      <ul >
        {taskStates.map(state => (
          <StateItem color={state.color} key={state.id}>
            <button onClick={() => updateState(state.id)}>{state.description}</button>
          </StateItem>
        ))}
      </ul>
    </Menu>
  );
}

export default TaskState;
