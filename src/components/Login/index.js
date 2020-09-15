import React from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, ArtSection, FormSection } from './styles';
import img from '../../assets/art.png';
import api from '../../services/api';
import { logIn } from '../../redux';

const Login = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const UserLogin = async () => {
    try {
      const {data} = await api.post('http://187.35.128.157:71/GLOBAL/Controller/Login.php?login', {
        "user": document.getElementById('user_name').value,
        "password": document.getElementById('password').value
      })
      dispatch(logIn(data.data))
      history.push('/main');
      
    } catch (error) {
      console.log('entrei no catch')
    }
    
  }


  return (
    <Container>
      <FormSection>
        <img src="" alt=""/>
        <h1>Login</h1>
        <label htmlFor="">Usuario</label>
        <input type="text" id="user_name"/>
        <label htmlFor="">Senha</label>
        <input type="password" id="password"/>
        <button onClick={() => UserLogin()}>Entrar</button>
      </FormSection>
      <ArtSection>
        <img src={img} alt=""/>
      </ArtSection>
    </Container>
  );
}

export default Login;
