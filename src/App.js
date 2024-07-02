import './App.css'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Footer from './components/footer/footer'
import Hero from './components/hero/hero'
import Projects from './components/projects/projects'
import Technologies from './components/technologies/technologies'


function App() {

  return (
    <div className='app'>
      <div className="bg-pic">
        <div className="circle-left"></div>
        <div className="circle-right"></div>
      </div>
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App;

