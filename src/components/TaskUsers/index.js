import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '../../services/api';

import { Container, UserList, VinculatedUsers } from './styles';

const TaskUsers = () => {
  return (
    <Container>
      <VinculatedUsers>

      </VinculatedUsers>
      <UserList>

      </UserList>
    </Container>
  );
}




export default TaskUsers;
