import styled from 'styled-components';

export const Container = styled.button`
  background-color: #${props => props.color};
  cursor: pointer;
  width:60px;
  height:25px;
  font-size:14px;
  margin: 0 10px;
  
  h2{
    font-weight: 500;
  }
  
`;

export const Menu = styled.div`
  position: relative;
  display: inline-block;
  ul{
    border-radius: 3px;
    width: 100%;
    display: ${props => props.show === true ? 'block' : 'none'};
    position: absolute;
    overflow: auto;
    z-index: 1;
    background-color: #C9C9C9;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.05), 0 3px 10px 0 rgba(0,0,0,.15);
    li{
      background-color: #444444;
    }
  }
`




