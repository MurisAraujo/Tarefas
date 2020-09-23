import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import {setCol, setOrder, setUpdate} from '../../redux';

const VisionMenu = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const changeCol = (value) => {
    if(value !== 'vazio'){
      dispatch(setCol(value));
      dispatch(setUpdate());
    }
  }

  const changeOrder = (value) => {
    if(value !== 'vazio'){
      dispatch(setOrder(value));
      dispatch(setUpdate());
    }
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
            <input type="checkbox" name="priority-cbox" id="priority-cbox" />
            <label htmlFor="priority-cbox">Prioridade</label>
          </li>
          <li >
            <input type="checkbox" name="state-cbox" id="state-cbox" />
            <label htmlFor="state-cbox">Estado</label>
          </li>
          <li >
            <input type="checkbox" name="date-cbox" id="date-cbox" />
            <label htmlFor="date-cbox">Data</label>
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
