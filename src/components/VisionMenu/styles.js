import styled from 'styled-components';

export const Container = styled.div`
position: relative;
display: inline-block;
margin: 0 20px;
  button{
    height: 36px;
    padding: 0 10px;
    font-size: 1em;
    background-color: #C9C9C9;
    transition: background-color .2s;
    color: #101010;
    cursor: pointer;
    &:hover{
      background-color: #8A8A8A;
    }
  }
  div{
    border-radius: 3px;
    min-width: 170%;
    max-width:200%;
    right:50%;
    display: ${props => props.show === true ? 'block' : 'none'};
    position: absolute;
    overflow: auto;
    z-index: 1;
    background-color: #C9C9C9;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.05), 0 3px 10px 0 rgba(0,0,0,.15);
    ul{
      padding: 5px;
      li{
        padding: 0 5px;
        margin:5px 0;
        h2{
          font-size:20px;
        }
        input{
          margin-right: 3px;
        }
        select{
          width:100%;
          background-color:transparent;
          border-radius: 2px;
          option{
            background-color:#c9c9c9;
          }
        }
      }
    }
  }
    @media (max-width: 700px){
      display:none;
    }
`;
