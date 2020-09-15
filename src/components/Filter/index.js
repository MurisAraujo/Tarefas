import React, {useState} from 'react';

import { Container } from './styles';

const Filter = () => {

  const [show, setShow] = useState(false);

  return (
    <Container show={show}>
       <button id="vision-btn" onClick={() => setShow(!show)}>
        Filtrar
       </button>
      <div>
        <ul>
        </ul>
      </div>
    </Container>
  );
}

export default Filter;
