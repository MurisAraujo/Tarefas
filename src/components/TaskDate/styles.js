import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 10px;
  background-color: #C9C9C9;
  padding: 0 5px;
  border-radius: 5px;
  color: #000;
  display: inline-block;
  position:relative;
  .dataShow{
    cursor: pointer;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
  }
`;

export const AddDate = styled.div`
  border-radius: 3px;
  display: ${props => props.show === true ? 'block' : 'none'};
  position: absolute;
  overflow: auto;
  z-index: 1;
  right: 1%;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,.05), 0 3px 10px 0 rgba(0,0,0,.15);
  padding:10px;
  background-color: #C9C9C9;
  div{
    display:flex;
    input{
      height: 30px;
      margin-right: 5px;
      padding: 0 10px;
    }
    button{
      width:70px;
      height:30px;
      background-color: #85BE15;
    }
  }
`
