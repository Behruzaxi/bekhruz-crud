import React from 'react';
import Header from './components/Header/Header';
import NavbarFunc from './components/Navbar/Navbar';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import GetData from './components/GetData/GetData';


function App() {
  return (
      <>

      <Router>
      <NavbarFunc/> 
        <Routes>
          <Route path='/home' element={<Header/>}/>
          <Route path='/table' element={<GetData/>}/>
        </Routes>
      </Router>

      {/* <Header/> */}
      </>
  );
}

export default App;
