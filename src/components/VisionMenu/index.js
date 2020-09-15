import React, { useState } from 'react';

import { Container } from './styles';

const VisionMenu = () => {
  const [show, setShow] = useState(false);

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
            <select name="order-select" id="order-select">
              <option value="1">Prioridade</option>
              <option value="2">Estado</option>
              <option value="3">Data</option>
            </select>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default VisionMenu;
