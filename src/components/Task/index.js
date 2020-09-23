import React, {useEffect, useState} from 'react';

import { Container, TaskName } from './styles'
import { useSelector } from 'react-redux';
import TaskState from '../TaskState';
import TaskPriority from '../TaskPriority';
import TaskDate from '../TaskDate';

const Task = ({ task }) => {

  const [photo, setPhoto] = useState('');

  const { userPhotos } = useSelector(state => state);

  async function loadUserImage() {
    for (let index = 0; index < userPhotos.length; index++) {
      if(task.user_id === userPhotos[index].user_id){
        setPhoto(userPhotos[index].photo)
      }
    }
  }

  useEffect(() => {
    loadUserImage()
  }, []);

  setTimeout(() => {
    
  }, 200);

  return (
    <Container>
      <TaskName>
        <div className="tooltip" >
          <img src={"data:image/jpeg;base64," + photo} alt="" width='30' height='30' />
          <span className="tooltiptext">{task.user_name}</span>
        </div>
        <h2 >{task.description}</h2>
      </TaskName>
      <div className="taskContent">
        <TaskPriority task={task} />
        <TaskState task={task} />
        <TaskDate task={task} />
        <h2>{task.progress}%</h2>
      </div>
    </Container>
  );
}

export default Task;
