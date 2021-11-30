import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// rafce 
const App = () => {

  return (
    <div className='d-flex-column'>
      <BrowserRouter>
        <Header />
        <Container>  
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </Container>  
      </BrowserRouter>
    </div>
  )

}

export default App;
