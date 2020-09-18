import React from 'react';
import 'antd/dist/antd.css'
import GloBalStyles from './styles/globaStyles'
import {ThemeProvider} from 'styled-components'
import light from './styles/themes/light'
import Routes from './routes/index'
const App:React.FC = ()=>{
  return (
    <ThemeProvider theme={light}>
      <GloBalStyles/>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
