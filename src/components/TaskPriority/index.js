import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Options } from './styles'
import { setUpdate } from '../../redux'

import lowPriority from '../../assets/Path1.png';
import medPriority from '../../assets/Path2.png';
import highPriority from '../../assets/Arrows.png';
import api from '../../services/api';

const TaskPriority = ({ task }) => {

  const { permissions } = useSelector(state => state);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const updatePriority = async (id) => {
    console.log(id, "entrei")
    try {
      api.put(`Task.php?AUTH=${permissions.session}`, {
        "id": task.id,
        "description": task.description,
        "full_description": task.full_description,
        "final_date": task.final_date,
        "state": task.state_id,
        "priority": id,
        "user_id": task.user_id,
      }).then(() => {
        dispatch(setUpdate())
        setShow(false);
      });

    } catch (error) {
      alert(error);
    }
  }

  return (
    <Container value={task.priority}>
      <div onClick={() => setShow(!show)}>
        <img src={task.priority === 0 ? lowPriority : task.priority === 1 ? medPriority : highPriority} alt="prioridade" />
      </div>
      <Options show={show}>
        <li onClick={() => updatePriority(0)}>
          <div>
            <img src={lowPriority} alt="prioridade" />
          </div>
          Baixa Prioridade
        </li>
        <li onClick={() => updatePriority(1)}>
          <div>
            <img src={medPriority} alt="prioridade" />
          </div>
          Media Prioridade
        </li>
        <li onClick={() => updatePriority(2)}>
          <div>
            <img src={highPriority} alt="prioridade" />
          </div>
          Alta Prioridade
        </li>
      </Options>
    </Container>
  );
}

export default TaskPriority;
