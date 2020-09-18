import styled from 'styled-components';


export const Container = styled.div`
     flex:1;
     display:flex;
     justify-content:space-between;
     height:10vh;
     align-items:center;
     margin:20px 30px 20px 30px;
    >div{
      display:flex;
      align-items:center;
      justify-content:center;
      >img{
        margin-right:30px;
        cursor:pointer;       
      }
      >p{
        
        font-weight:bold;
        margin-right:10px;
      }
      >h1{
        font-weight:bold;
      }
    }
  `;
  
  export const ContainerSignal = styled.div`
        display:flex;

        position:relative;
        border-right:2px solid        
      ${props=>props.theme.colors.others.light_texts};
        height:100%;
        margin-right:30px;
        >svg{
        fill:${props=>props.theme.colors.others.light_texts};
        margin-right:30px;
        cursor:pointer;
       }
        >span{
          top:0;
          right:0;
          position:absolute;
          margin-right:30px;
          border-radius:50%;
          width:10px;
          height:10px;
          background-color:red;
      }
      
  
  `

  export const UserImage = styled.img`
  
    border-radius:50%;
    border:3px solid ${props=>props.theme.colors.others.light_texts};
  `

