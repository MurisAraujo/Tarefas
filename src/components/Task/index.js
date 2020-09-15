import React from 'react';

import { Container, TaskName } from './styles'
import TaskState from '../TaskState';
import user from '../../assets/user.png';

const Task = ({task}) => {
  return (
    <Container>
      <TaskName>
        <div className="tooltip" >
          <img src={user} alt="" width = '30' height = '30' />
          <span className = "tooltiptext">{task.user_name}</span>
        </div>
        <h2 >{task.description}</h2>
      </TaskName>
      <div className="taskContent">
        <TaskState stateId={task.state_id}/>
        <h2>{task.progress}%</h2>
      </div>
    </Container>
  );
}

export default Task;
