
import styled from 'styled-components';
import {Input as AntInput} from 'antd'
import { SearchOutlined,FilterOutlined } from '@ant-design/icons';
import statusColor from '../../utils/statusColor'

interface TagProps{
  status:string;
}

export const IconSearch = styled(SearchOutlined)`

`

export const IconFilter = styled(FilterOutlined)`

`
export const Container = styled.div`
      display:flex;
      flex-direction:column;
      padding:30px;
      >span{
        display:flex;
        justify-content:flex-end;
        width:100%;
      }
  `;

export const BtnNewProcess = styled.button`
    margin-bottom:15px;
    padding:10px;
    background-color:${props=>props.theme.colors.layout_colors.tertiary};
    color:${props=>props.theme.colors.layout_colors.primary};
    border:none;
    border-radius:8px;
    transition:opacity .3s;
    &:hover{
      opacity:0.8;
    }
`

export const ListProcess = styled.div`
      border-radius:8px;
      background-color:${
      props=>props.theme.colors.layout_colors.primary};
      border:1px solid ${
      props=>props.theme.colors.others.light_texts};
      width:100%;
      height:auto;
      padding-bottom:56px;
`;

export const SearcherContainer = styled.span`
       display:flex;
       justify-content:space-between;
       align-items:center;
       width:100%;

`;

export const SearcherInput = styled(AntInput)`
  color:gray;
  width:50%;
  margin-left:20px;
  margin-top:10px;
  border:none;
  border-bottom:1px solid ${props=>props.theme.colors.others.light_texts};
    >input{&:focus{

      border:none;
    }
  }

`;

export const BtnOrder = styled.button`
    background-color:transparent;
    border:none;
    color:${props=>props.theme.colors.layout_colors.black_texts};
    padding:0px 20px 0px 20px ;
    >svg{
      fill:${props=>props.theme.colors.layout_colors.black_texts};
    }
`;
export const BtnFilter = styled.button`
    background-color:transparent;
    border:none;
    color:${props=>props.theme.colors.layout_colors.black_texts};
    padding:0px 20px 0px 20px ;

`;
export const TableContainer = styled.table`
    padding:20px;
    width:100%;

  >thead tr{
    padding:20px 0 20px 0;
    color:${props=>props.theme.colors.layout_colors.light_texts};
    display:flex;
    width:100%;
    justify-content:space-around;
    border-bottom:1px solid ${props=>props.theme.colors.layout_colors.light_texts};

    td{
      margin:0;
      padding:0;
    }
  }
  >tbody{
    tr{
      display:flex;
      justify-content:space-around;
      align-items:center;
      margin:0;
      padding:10px 0 10px 0;
      border-bottom:1px solid ${props=>props.theme.colors.layout_colors.light_texts};
      >td{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;

        margin:0;
        padding:0;

        >span{
          &:first-child{
          font-weight:bold;
        }
       }
       &:nth-child(3){
        font-weight:bold;
       }

      }
    }
  }
`

export const Tag  = styled.span<TagProps>`
    display:flex;
    align-items:center;
    justify-content:center;
    text-transform:uppercase;
    background-color:${props=>props.status &&  statusColor(props.status)};
    color:${props=>props.theme.colors.layout_colors.primary};
    max-width:120px;
    min-width:120px;
    border-radius:8px;
    padding:5px;
    cursor:pointer;
    transition:opacity .3s;
    &:hover{
      opacity:0.7;
    }
`
