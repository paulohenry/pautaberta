import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Container = styled.div`
      grid-area:aside;
      box-shadow:4px 0px 19px 8px rgba(0,0,0,0.15);
      display:flex;
      flex-direction:column;
      align-items:center;
      z-index:1;
      max-height:100vh;
`;

export const HeaderContainer = styled.header`
      >svg{
            padding-top:5px;
            margin-top:5px;
      }
`;
export const ContainerLinks = styled.nav`
      margin:5vh 0 0 0;
      display:flex;
      flex-direction:column;     
      width:100%;
      height:100%;
            
`
export const MenuItemLink = styled(Link)`
      position:relative;
      font-style: normal;
      align-items:center;
      display:flex;      
      font-weight: bold;
      font-size: 20px;
      line-height: 25px;
      width:100%;
      padding:15px 0 15px 30px;
      letter-spacing: 0.2px;      
      text-decoration:none;

      color:${props=>props.theme.colors.layout_colors.light_texts};

      border-bottom:2px solid ${
      props=>props.theme.colors.others.line_color};

            >svg{
                  margin-right:15px;
                  font-size:30px;          
                  fill:${props=>props.theme.colors.layout_colors.light_texts}; 
            }                         
          
            >span{
                  position:absolute;
                  left:0;
                  top:0;
                  width:10px;
                  height:100%;
                  background:transparent;
                  transition:all 0.05s;
            }

      &:hover{
            background-color:${
            props=>props.theme.colors.others.hover_menu};
            color:${props=>props.theme.colors.others.gradient};
            >span{
                  background:linear-gradient(180deg, 
                  rgba(42, 228, 233, 0.887547) 0%,
                  rgba(255, 255, 255, 0) 100%), #15647A;
            }
            >svg{
                  fill:${props=>props.theme.colors.others.gradient};                
            }
      }

`
export const ContainerFooter = styled.footer`
            display:flex;
            flex-wrap:wrap;
            position:relative;
            width:100%;
            cursor:pointer;
            align-items:center;
            padding:15px 0 15px 30px;
            > svg {
                  fill:${props=>props.theme.colors.layout_colors.light_texts};
                  margin-right:15px;
            }
            font-weight:bold;
            font-size:20px;
            color:${props=>props.theme.colors.layout_colors.light_texts};

            >span{
                  position:absolute;
                  left:0;
                  top:0;
                  width:10px;
                  height:100%;
                  background:transparent;
                  transition:all 0.05s;
            }

            &:hover{
            background-color:${
            props=>props.theme.colors.others.hover_menu};
            color:${props=>props.theme.colors.others.gradient};
            >span{
                  background:linear-gradient(180deg, 
                  rgba(42, 228, 233, 0.887547) 0%,
                  rgba(255, 255, 255, 0) 100%), #15647A;
            }
            >svg{
                  fill:${props=>props.theme.colors.others.gradient};                
            }
      }
`;

