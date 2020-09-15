import styled from 'styled-components';

export const Container = styled.li`
  width:100%;
  height:40px;
  background: #2B2B2B;
  color:#e9e9e9;
  display: flex;
  padding: 0 10px;
  align-items:center;
  .taskContent{
    display:flex;
    justify-content: flex-end;
    width:80%;
    @media (max-width: 1040px) {
      width: 70%;
    }
    @media (max-width: 750px) {
      width: 40%;
    }
    @media (max-width: 500px) {
      width: 30%;
    }
  }
`;

export const TaskName = styled.div`
  display:flex;
  width: 20%;
  padding: 0 5px;
  align-items:center;
  h2{
    margin-left: 10px;
  }
  .tooltip {
    position: relative;
    display: inline-block;
    height:30px;
    &:hover{
      .tooltiptext {
        visibility: visible;
      }
    }
    .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: black;
      color: #fff;
      bottom:-1px;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;
      /* Position the tooltip */
      position: absolute;
      z-index: 2;
      ::after{
        content: " ";
      position: absolute;
      top: 50%;
      right: 100%; /* To the left of the tooltip */
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent black transparent transparent;
      }
    }
  }

  @media (max-width: 1040px) {
    width: 30%;
  }
  @media (max-width: 750px) {
    width: 60%;
  }
  @media (max-width: 500px) {
    width: 70%;
  }
`;

