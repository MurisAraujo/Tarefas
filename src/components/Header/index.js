import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Container, FilterDiv, CreateArea } from './styles';

import VisionMenu from '../VisionMenu';
import Filter from '../Filter';
import UserLogoff from '../UserLogoff';
import api from '../../services/api';


const Header = () => {

  const param = useSelector(state => state);

  const [createTaskOption, setCreateTaskOption] = useState(false);

  async function createTask() {
    const input = document.getElementById('taskName')
    try {
      // eslint-disable-next-line
      const { data } = api.post(`Task.php?AUTH=${param.session}`, {
        "description": input.value,
      }).then(() => {
        alert('tarefa criada com sucesso')
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
            <input type="text" id="taskName" />
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
