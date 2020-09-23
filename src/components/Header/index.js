import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, FilterDiv, CreateArea } from './styles';
import {setUpdate} from '../../redux';

import VisionMenu from '../VisionMenu';
import Filter from '../Filter';
import UserLogoff from '../UserLogoff';
import api from '../../services/api';


const Header = () => {

  const { permissions } = useSelector(state => state);
  const dispatch = useDispatch();

  const [createTaskOption, setCreateTaskOption] = useState(false);

  async function createTask() {
    const input = document.getElementById('taskName')
    try {
      // eslint-disable-next-line
      const { data } = api.post(`Task.php?AUTH=${permissions.session}`, {
        "description": input.value,
      }).then(() => {
        alert('tarefa criada com sucesso');
        setCreateTaskOption(!createTaskOption);
        input.value = '';
        dispatch(setUpdate())
      })
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Container>
      <CreateArea show={createTaskOption}>
        <button className="createbtn" onClick={() => setCreateTaskOption(!createTaskOption)}>
          Criar
        </button>
        <div className="input">
          <div>
            <input type="text" id="taskName" placeholder="Nome da Tarefa"/>
            <button onClick={() => createTask()}>Criar Tarefa</button>
          </div>
        </div>
      </CreateArea>
      <FilterDiv>
        <VisionMenu />
        <Filter />
        <UserLogoff />
      </FilterDiv>
    </Container>
  );
}

export default Header;
