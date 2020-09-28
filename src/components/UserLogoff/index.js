import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import { logOff } from '../../redux';

const UserLogoff = () => {

  const [photo, setPhoto] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  const { userPhotos } = useSelector(state => state);
  const { permissions } = useSelector(state => state);
  

  async function loadUserImage() {
    for (let index = 0; index < userPhotos.length; index++) {
      if(permissions.id === userPhotos[index].user_id){
        setPhoto(userPhotos[index].photo)
        console.log(userPhotos[index].photo)
      }
    }
  }

  function exitGTPP() {
    dispatch(logOff());
    history.push('/');
  }

  useEffect(() => {
    loadUserImage()
  }, []);

  return (
    <Container>
      <button onClick={() => { exitGTPP() }}>
        <img src={ photo} alt=""/>
      </button>
    </Container>
  );
}

export default UserLogoff;
