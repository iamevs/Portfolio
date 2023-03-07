import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Expirence, Feedbacks, Hero, Navbar, Tech, Works } from './components/index';



import './App.css'

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <About />
          <Expirence />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
