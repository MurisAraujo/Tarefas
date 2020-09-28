import styled from 'styled-components';

export const Container = styled.button`
  background-color: #${props => props.color};
  cursor: pointer;
  min-width:60px;
  max-width:100px;
  padding:0 5px;
  height:25px;
  font-size:14px;
  margin: 0 10px;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,.2), 0 3px 10px 0 rgba(0,0,0,.2);
  h2{
    font-weight: 500;
  }
  @media(max-width: 900px){
    display:none;
  }
`;

export const Menu = styled.div`
  position: relative;
  display: inline-block;
  min-width:5%;
  ul{
    border-radius: 3px;
    width: 120%;
    right: 1%;
    display: ${props => props.show === true ? 'block' : 'none'};
    position: absolute;
    overflow: auto;
    z-index: 1;
    background-color: #202020;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.05), 0 3px 10px 0 rgba(0,0,0,.15);
  }
`

export const StateItem = styled.li`
  margin: 5px;
  border-radius:3px;
  button{
    width:100%;
    height: 30px;
    background-color: #${props => props.color};
  }
   
`




