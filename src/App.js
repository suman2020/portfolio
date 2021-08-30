
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/HomePage/Home';
import HeroContent from './Components/BodySection/HeroContent';
import Profile from './Components/Profile/Profile';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Project';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
function App() {
    return (
        <Router>
            <Home />
            <Switch>

                <Route path='herocontent' component = {HeroContent} exact/>
                <Route path = 'about' component = {Profile} exact/>
                <Route path = 'skills' component = {Skills} exact/>
                <Route path = 'experience' component = {Experience} exact/>
                <Route path = 'projects' component = {Projects} exact/>
                <Route path = 'contact' component = {Contact} exact/>

            </Switch>

           
        </Router>
      


      
        );
}

export default App;
