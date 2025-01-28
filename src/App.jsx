import './App.css'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'

function App() {
 

  return (
    <>
      <Header/>

      <main className='main'>
        <Home/>
        <Experience/>
      </main>

      <Footer/>
    </>
  )
}

export default App
