import React from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, ArtSection, FormSection, Divisor } from './styles';
import img from '../../assets/art.png';
import logo from '../../assets/logo.png';
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
      if(data.error === true){
        alert(data.message)
        console.log('entrei no error')
      }
      dispatch(logIn(data.data))
      history.push('/main');
      
    } catch (error) {
      alert("Usuario o senha incorretos")
    }
    
  }


  return (
    <Container>
      <FormSection>
        <img src={logo} alt=""/>
        <h2>Gerenciador de Tarefas</h2>
        <h1>Login</h1>
        <label htmlFor="">Usuario</label>
        <input type="text" id="user_name"/>
        <label htmlFor="">Senha</label>
        <input type="password" id="password"/>
        <button onClick={() => UserLogin()}>Entrar</button>
      </FormSection>
      <Divisor/>
      <ArtSection>
        <img src={img} alt=""/>
      </ArtSection>
    </Container>
  );
}

export default Login;
