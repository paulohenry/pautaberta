import React,
{createContext, useContext} from 'react'


interface userProps {
  image:string;
}

const userProvider:React.Context<userProps> = createContext({
  image:''
})