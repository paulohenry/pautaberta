import styled from 'styled-components';
import statusColor from '../../utils/statusColor'
interface IContainerProps{
  borderColor:string;
}

export const Container = styled.div<IContainerProps>`
      display:flex;
      justify-content:space-between;
      align-items:center;
      background-color:${
      props=>props.theme.colors.layout_colors.primary};
      max-height:100vh;
      overflow-y:auto;
      border:1px solid
      ${props=>props.borderColor && statusColor(props.borderColor)};
      overflow:hidden;
      border-radius:8px;
      margin: 0 5px 10px 5px ;
      padding:10px;
      &:hover{

        box-shadow: 0 0 5px ${props=>props.borderColor && statusColor(props.borderColor)};
        cursor:pointer;
      }
      >span{
        text-transform:uppercase;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:${props=>props.borderColor && statusColor(props.borderColor)};
        color:${props=>props.theme.colors.layout_colors.primary};
        padding:4px 0 4px 0;
        border-radius:8px;
        width:25%;
      }
  `;

export const ContentContainer = styled.div`

  `;
