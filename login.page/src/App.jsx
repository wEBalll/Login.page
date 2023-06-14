import styled from 'styled-components';
import './index.css';
import { Login } from './components/Login';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {

  return (
    <Wrapper>
      <Header/>      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div `
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

