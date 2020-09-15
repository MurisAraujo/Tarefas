import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 60px;
  background-color: #343434;
  padding: 12px 10%;
  display:flex;
  justify-content:space-between;
  @media (max-width: 1000px){
    padding: 12px 5%;
  }
`;

export const FilterDiv = styled.div`
  display:flex;
`

export const CreateArea = styled.div`
    position: relative;
    display: inline-block;
    .input{
      border-radius: 3px;
      display: ${props => props.show === true ? 'block' : 'none'};
      position: absolute;
      overflow: auto;
      z-index: 1;
      background-color: #C9C9C9;
      box-shadow: 0 2px 3px 0 rgba(0,0,0,.05), 0 3px 10px 0 rgba(0,0,0,.15);
      padding:10px;
      div{
        display:flex;
        input{
          height: 30px;
          margin-right: 5px;
        }
        button{
          width:70px;
          height:30px;
          background-color: #85BE15;
        }
      }
    }
    .createbtn{
    width:60px;
    height:36px;
    font-size:18px;
    background-color: #2693FF;
    transition: background-color .2s;
    color: #101010;
      &:hover{
        background-color: #1D6EBF;
      }
    }
`
