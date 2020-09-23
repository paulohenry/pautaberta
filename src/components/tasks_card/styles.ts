import styled from 'styled-components';
import statusColor from '../../utils/statusColor'

interface ContainerProps{
  status:string;
}

export const Container = styled.div<ContainerProps>`
      display:flex;
      justify-content:space-between;
      align-items:center;
      background-color:${
      props=>props.theme.colors.layout_colors.primary};
      max-height:100vh;
      overflow-y:auto;
      border-bottom:1px solid ${props=>props.theme.colors.others.light_texts};
      padding:20px 10px 20px 10px;
      >p{
        font-weight:bold;
      }
      >span{
        display:flex;
        align-items:center;
        justify-content:center;
        margin-left:10px;
        max-width:25%;
        min-width:25%;
        border-radius:8px;
        padding:10px;
        background-color:${props=>props.status && statusColor(props.status)};
        text-transform:uppercase;
        color:${props=>props.theme.colors.layout_colors.primary};
      }
  `;
