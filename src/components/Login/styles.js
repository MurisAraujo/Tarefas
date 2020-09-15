import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #444;
  display:flex;
`;

export const ArtSection = styled.div`
  width: 65%;
  display:flex;
  img{
    width: 90%;
    margin: auto;
  }
`;

export const FormSection = styled.div`
  display:flex;
  flex-direction: column;
  padding: 0 5%;
  width: 35%;
  height: 100%;
  justify-content: center;
  label{
    margin: 10px 0;
    color: #e9e9e9;
    font-size: 18px;
    margin-top: 20px;
  }
  input{
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    font-size: 18px;
  }
  button{
    margin-top: 40px;
    width: 50%;
    height:35px;
    align-self:center;
    background-color: #39CC14;
    transition: background-color .5s;
    
    &:hover{
      background-color: ${darken(0.1, '#39CC14')};
    }
    
  }
  h1{
    font-size: 30px;
    color: #e9e9e9;
    align-self: center;
  }
`;