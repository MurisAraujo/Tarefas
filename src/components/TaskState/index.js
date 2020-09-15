import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Container, Menu } from './styles';

const TaskState = ({ stateId }) => {

  const {taskStates} = useSelector(state => state);
  const [show, setShow] = useState(false);

  return (
    <Menu show={show}>
      {taskStates.map(state => (
        <>
          {
            state.id === stateId ?
              <Container color = {state.color} onClick={()=>setShow(!show)} key={state.id}>
                <h2>{state.description}</h2>
              </Container> :
              null
          }
        </>
      ))}
      <ul>
      {taskStates.map(state => (
        <li key={state.id}>
          teste
        </li>
      ))}
      </ul>
    </Menu>
  );
}

export default TaskState;
