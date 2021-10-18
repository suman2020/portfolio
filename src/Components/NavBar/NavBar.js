import React from 'react';
import { Nav, NavBarContainer, NavLogo, Bars, NavMenu, NavItem, NavLinks } from './NavBarElements';
import { animateScroll as scroll } from 'react-scroll';

const NavBar = ({ isOpen, toggle}) => {
    const toggleHome=()=>{
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav >
                <NavBarContainer>
                    <NavLogo to = '/' onClick ={toggleHome} style={{color: "greenyellow",fontWeight:"bold" , fontSize:'40px'}}> Home </NavLogo>
                </NavBarContainer>
                
                <Bars onClick={toggle} isOpen={isOpen}/>
                
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' smooth={true} duration={500} spy={true} exact ='true' offset={-80}>About Me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='skills' smooth={true} duration={500} spy={true} exact ='true' offset={-150}> Skills </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='experience' smooth={true} duration={500} spy={true} exact ='true' offset={-80}> Experience </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects' smooth={true} duration={500} spy={true} exact ='true' offset={-80}> Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact' smooth={true} duration={500} spy={true} exact ='true' > Contact </NavLinks>
                    </NavItem>
                </NavMenu>
            </Nav>

        </>
        );
}
export default NavBar;