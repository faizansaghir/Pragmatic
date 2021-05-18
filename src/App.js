import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Content/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
