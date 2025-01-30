import './App.css'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Qualification from './components/qualification/Qualification'
import Skills from './components/skills/Skills'
import Work from './components/work/Work';

function App() {
 

  return (
    <>
      <Header/>

      <main className='main'>
        <Home/>
        <Experience/>
        <Qualification/>
        <Skills/>
        <Work />
      </main>

      <Footer/>
    </>
  )
}

export default App
