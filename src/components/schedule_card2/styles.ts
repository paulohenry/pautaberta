import styled from 'styled-components';



export const Container = styled.div`
      grid-area:contentt;    
      background-color:${
      props=>props.theme.colors.layout_colors.secondary};
      max-height:100vh;
      overflow-y:auto;
  
  `;