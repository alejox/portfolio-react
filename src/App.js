import React from 'react';
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import {Footer, Header, Nav} from './components'
import { About, Contact, Experience, Portfolio, Services, Testimonials } from './pages';

const App = () => {

return (

  <HashRouter>
    <h1>Hola</h1>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/header' element={<Header />}/>
      <Route path='/nav' element={<Nav />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/experience' element={<Experience />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/portfolio' element={<Portfolio />}/>
      <Route path='/testimonials' element={<Testimonials />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/footer' element={<Footer />}/>
    </Routes>
  </HashRouter>
  
  );
};



export default App;
