import styled from 'styled-components';

export const Container = styled.ul`
  width:95%;
  min-height: 800px;
  margin: 10px auto;
  max-height:920px;
  overflow-y:auto;
  border-radius:5px;
  @media (max-height: 880px) {
    max-height:600px
  }
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background:#2693FF;
  }

  .task:nth-child(odd){
    background-color: #444444;
  }
`;