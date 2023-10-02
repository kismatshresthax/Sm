import React from 'react';
import { Main } from './components/Main';
import { Marvel } from './components/Marvel';
import {Routes,Route} from 'react-router-dom'
import './components/style.css';

function App() {
  return (
    <>
     <Routes>
     
       <Route path='/'element={<Main/>}/>
       <Route path='/:id' element={<Marvel/>}/>
     </Routes>
    </>
  )
}

export default App;