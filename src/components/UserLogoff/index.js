import React from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import { Container } from './styles';
import { logOff } from '../../redux';

const UserLogoff = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  function exitGTPP(){
    dispatch(logOff());
    history.push('/');
  }

  return (
    <Container>
      <button onClick={() => {exitGTPP()}}>
        M
      </button>
    </Container>
  );
}

export default UserLogoff;
