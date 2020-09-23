import styled from 'styled-components';

export const Container = styled.div`
margin-left:10px;
  button{
    width:35px;
    height:35px;
    border-radius:100%;
    background-color: #c9c9c9;
    display:flex;
    cursor: pointer;
    &:hover{
      background-color: #8A8A8A;
    }
    img{
      width:100%;
      height: 100%;
      border-radius:100%;
    }
  }
`;
