import './App.css';
import Menu from './componets/Menu/Menu';
//Importamos componentes de React Router: 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componets/Home/Home';
import Computadoras from './componets/Computadoras/Computadoras';
import Sillas from './componets/Sillas/Sillas';
import Celulares from './componets/Celulares/Celulares';

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/computadoras' element={ <Computadoras/>}  />
          <Route path='/sillas/:id' element={ <Sillas/> }  />
          <Route path='/celulares' element={ <Celulares/> } />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;

/*
      <h1>Enlaces</h1>
      <h2>Enlaces Absolutos</h2>
      <p>Me conecta con una página externa</p>
      <a href="https://infobae.com" target='_blank' >Diario Infobae</a>

      <h2>Enlaces Relativos</h2>
      <p>Me permite conectarme con secciones o páginas de mi mismo sitio web</p>
      <a href="">Home</a>


*/