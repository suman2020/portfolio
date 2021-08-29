import React from 'react';
import { Nav, NavBarContainer, NavLogo, Bars, NavMenu, NavItem, NavLinks } from './NavBarElements';

const NavBar = ({ isOpen, toggle}) => {
    return (
        <>
            <Nav >
                <NavBarContainer>
                    <NavLogo to = '/'> Home </NavLogo>
                </NavBarContainer>
                
                <Bars onClick={toggle} isOpen={isOpen}/>
                
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About Me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='skills'> Skills </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='experience'> Experience </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects'> Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'> Contact </NavLinks>
                    </NavItem>
                </NavMenu>
            </Nav>

        </>
        );
}
export default NavBar;