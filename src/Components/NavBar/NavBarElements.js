import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`

    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index:20;   
    @media screen and (max-width: 960px){
    transition: 0.9s all ease;

}


`
export const NavBarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index:20;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex;
    align-items:center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

`

export const Bars = styled(FaBars)`
    display:none;

    @media screen and (max-width: 768px){
        cursor: pointer;
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 65%);
        font-size: 2rem;
        color:#fff;
        z-index: 20;
`
export const NavMenu = styled.div`
display:flex;
align-items: center;
list-style:none;
text-align:center;
margin-right: -20px;
@media screen and (max-width: 768px){
    display: none;

}
 
`
export const NavItem = styled.li`
height: 80px;
`
export const NavLinks = styled(LinkS)`
color: #fff;
display:flex;
align-items:center;
text-decoration:none;
padding: 0 1.5rem;
height: 100%;
cursor: pointer;
font-size: 1.5rem;
&.active{
    border-bottom: 3px solid #01bf71;
}

`




