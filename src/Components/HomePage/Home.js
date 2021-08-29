import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import {React, useState } from 'react';
import HeroContent from "../BodySection/HeroContent";

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



        </>
        );

}
export default Home;