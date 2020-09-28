import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-right: 15px;
  display:flex;
  width: 60px;
  justify-content:space-around;
  @media(max-width: 900px){
    display:none;
  }
`;

export const VinculatedUsers = styled.div`
  display: inline-block;
  position:relative;
  width: 25px;
  height:25px;
  border-radius: 100%;
  background-color: #c9c9c9;
  color: #000;
  div{
    width: 100%;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
  }
`;

export const UserList = styled.div`
  display: inline-block;
  position:relative;
  width: 25px;
  height:25px;
  border-radius: 100%;
  background-color: #c9c9c9;
  color: #000;
  div{
    width: 100%;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
  }
  ul{
    border-radius: 3px;
  width: 240px;
  right: 1%;
  display: ${props => props.show === true ? 'block' : 'none'};
  position: absolute;
  overflow: auto;
  z-index: 1;
  background-color: #2B2B2B;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,.05), 0 3px 10px 0 rgba(0,0,0,.15);
  li{
    padding: 5px;
    display:flex;
    align-items:center;
    img{
      margin-right:2px;
      border-radius: 100%;
    }
    p{
      white-space: nowrap; 
      width: 150px;
      overflow:hidden;
      text-overflow: ellipsis;
      margin-right:10px;
      font-size: 14px;
      color: #c9c9c9;
      font-weight: 500;
    }
    button{
      padding: 3px;
      background-color: #85BE15;
      transition: background-color .25s;
      &:hover{
      background-color: ${darken(0.1, '#85BE15')};
    }
    }
  }
  }
`;

export const VinculatedList = styled.ul`
  border-radius: 3px;
  width: 220px;
  right: 1%;
  display: ${props => props.show === true ? 'block' : 'none'};
  position: absolute;
  overflow: auto;
  z-index: 1;
  background-color: #2B2B2B;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,.05), 0 3px 10px 0 rgba(0,0,0,.15);
  li{
    padding: 5px;
    display:flex;
    align-items:center;
    img{
      margin-right:2px;
      border-radius: 100%;
    }
    p{
      white-space: nowrap; 
      width: 100px;
      overflow:hidden;
      text-overflow: ellipsis;
      margin-right:10px;
      font-size: 14px;
      color: #c9c9c9;
      font-weight: 500;
    }
    button{
      padding: 3px;
      background-color: #d22e2e;
      transition: background-color .25s;
      &:hover{
      background-color: ${darken(0.1, '#d22e2e')};
    }
    }
  }
`