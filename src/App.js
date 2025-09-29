import './App.css';
import Header from './components/header/Header';
import Banner from './components/sections/banner/Banner';
import Cursos from './components/sections/cursos/Cursos';
import Curso from './components/sections/curso/Curso'
import Inscrevasse from './components/sections/inscrevasse/Inscrevasse';
import Footer from './components/footer/Footer';

function App() {
  return <>
    <Header/>
    <Banner/>
    <Cursos/>
    <Curso />
    <Inscrevasse/>
    <Footer/>
  </>
}

export default App;
