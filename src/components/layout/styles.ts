import styled from 'styled-components';

export const Grid = styled.div`
      display:grid;
      grid-template-rows:100vh;
      grid-template-columns: 20vw 80vw;
      grid-template-areas:
        "aside contentt"
        "aside contentt";
  `;