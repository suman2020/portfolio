import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import {React, useState } from 'react';
import HeroContent from "../BodySection/HeroContent";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Project";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);


    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar isOpen={isOpen} toggle={toggle} />
            <HeroContent/>
            <Profile/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contact/>
            <Footer/>
            

        </>
        );

}
export default Home;