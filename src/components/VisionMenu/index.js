import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import {setCol, setOrder, updateTask, setStateVisi, setDateVisi, setVincVisi, setPriorityVisi } from '../../redux';

const VisionMenu = () => {
  const [show, setShow] = useState(false);

  const { visionMenu } = useSelector(state => state);
  const dispatch = useDispatch();

  const changeCol = (value) => {
    if(value !== 'vazio'){
      dispatch(setCol(value));
      dispatch(updateTask());
    }
  }

  const changeOrder = (value) => {
    if(value !== 'vazio'){
      dispatch(setOrder(value));
      dispatch(updateTask());
    }
  }

  const setStateVisibility = (value) => {
    dispatch(setStateVisi(value))
  }

  const setDateVisibility = (value) => {
    dispatch(setDateVisi(value))
  }

  const setVincVisibility = (value) => {
    dispatch(setVincVisi(value))
  }

  const setPriorityVisibility = (value) => {
    dispatch(setPriorityVisi(value))
  }

  return (
    <Container show={show}>
      <button id="vision-btn" onClick={() => setShow(!show)}>
        Visualização
       </button>
      <div >
        <ul >
          <li >
            <h2 >Itens na linha:</h2>
          </li>
          <li >
            <input type="checkbox" name="company-cbox" id="company-cbox" />
            <label htmlFor="company-cbox">Companhia</label>
          </li>
          <li >
            <input type="checkbox" name="shop-cbox" id="shop-cbox" />
            <label htmlFor="shop-cbox">Loja</label>
          </li>
          <li >
            <input type="checkbox" name="departament-cbox" id="departament-cbox" />
            <label htmlFor="departament-cbox">Departamento</label>
          </li>
          <li >
            <input type="checkbox" name="priority-cbox" id="priority-cbox" onChange={e => setPriorityVisibility(e.target.checked)} checked={visionMenu.priority} />
            <label htmlFor="priority-cbox">Prioridade</label>
          </li>
          <li >
            <input type="checkbox" name="state-cbox" id="state-cbox" onChange={e => setStateVisibility(e.target.checked)} checked={visionMenu.state} />
            <label htmlFor="state-cbox">Estado</label>
          </li>
          <li >
            <input type="checkbox" name="date-cbox" id="date-cbox" onChange={e => setDateVisibility(e.target.checked)} checked={visionMenu.date} />
            <label htmlFor="date-cbox">Data</label>
          </li>
          <li >
            <input type="checkbox" name="vinc-cbox" id="vinc-cbox" onChange={e => setVincVisibility(e.target.checked)} checked={visionMenu.vinc} />
            <label htmlFor="vinc-cbox">Usuarios Vinculados</label>
          </li>
          <li >
            <h2 >Ordenar por:</h2>
          </li>
          <li >
            <select name="col-select" id="col-select" onChange={ e => changeCol(e.target.value)}>
              <option value="vazio">Selecione uma opção</option>
              <option value="priority">Prioridade</option>
              <option value="state_id">Estado</option>
            </select>
          </li>
          <li>
            <select name="order-select" id="order-select" onChange={ e => changeOrder(e.target.value)}>
              <option value="vazio">Selecione uma opção</option>
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default VisionMenu;
