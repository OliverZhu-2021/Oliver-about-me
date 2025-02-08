import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './nav/nav';
import { createGlobalStyle } from 'styled-components';
import About from './about/about';
import Skills from './skills/skills';
import Projects from './projects/projects';
import Contact from './contact/contact';
import AnimeBg from './background/animeBg';
import PlayerStats from './player-stats/player-stats';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    border: 0;
    box-sizing: border-box;
    min-height: 100vh;
    width: 100vw;
    font-family: "Russo One", sans-serif;
    -webkit-tap-highlight-color: transparent;
    color: white;
  }

  :root {
    --purple: #540351;
    --blue: #3627b1;
    --cyan: #25afce;
    --transparent: rgba(0, 0, 0, 0);
    --radius-left: 3rem 0 0 3rem;
    --radius-right: 0 3rem 3rem 0;
  }

  button:hover,
  .class-sub-container a:hover,
  .project-item:hover,
  .skill-item:hover,
  .item:not(.active):hover,
  .sub-container-2:not(.active-subheading):hover,
  .sub-container-3:not(.active-subheading):hover {
    background-image: linear-gradient(90deg, #ffffff00, #ffffff42 50%, #ffffff00);
  }
`

const App = () => {
  
  return (
    <>
      <BrowserRouter basename='/Oliver-about-me'>
        <GlobalStyle />
        <Nav />
        <AnimeBg />
        <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/skills' element={<Skills />}/>
          <Route path='/hobbies' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <PlayerStats/>
      </BrowserRouter>
      
    </>
  )
}

export default App
