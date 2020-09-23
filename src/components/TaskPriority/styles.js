import styled from 'styled-components';

export const Container = styled.div`
  height: 26px;
  width: 26px;
  background-color: ${props => props.value === 0 ? '#F1F8E9' : props.value === 1 ? '#FFF7EA' : '#FFF2F2' };
  display: inline-block;
  border-radius: 6px;
  position:relative;
  div{
    cursor:pointer;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  @media(max-width: 900px){
    display:none;
  }
`;

export const Options = styled.ul`
  border-radius: 3px;
  min-width: 580%;
  right: 1%;
  display: ${props => props.show === true ? 'block' : 'none'};
  position: absolute;
  overflow: auto;
  z-index: 1;
  background-color: #202020;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,.05), 0 3px 10px 0 rgba(0,0,0,.15);
  li{
    padding: 5px;
    background-color: #202020;
    display:flex;
    cursor:pointer;
    div{
      width: 10%;
      align-self:center;
      margin-right: 5px;
    }
  }
`
