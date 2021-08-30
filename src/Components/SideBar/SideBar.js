import { SideBarContainer, Icons, CloseIcon, SideBarMenu, SideBarWrapper, SideBarLink } from './SideBarElements.js';


const SideBar = ({ isOpen, toggle }) => {
    return (

        <SideBarContainer isOpen={isOpen}  >
            <Icons onClick={toggle}>
                <CloseIcon style={{cursor: 'pointer'}} />
            </Icons>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='about' onClick={toggle} smooth={true} duration={500} spy={true} exact ='true' offset={-80}>About Me </SideBarLink>
                    <SideBarLink to='skills' onClick={toggle} smooth={true} duration={500} spy={true} exact ='true' offset={-80} >Skills </SideBarLink>
                    <SideBarLink to='experience' onClick={toggle} smooth={true} duration={500} spy={true} exact ='true' offset={-80} >Experience </SideBarLink>
                    <SideBarLink to='projects' onClick={toggle} smooth={true} duration={500} spy={true} exact ='true' offset={-80} >Project </SideBarLink>
                    <SideBarLink to='contact' onClick={toggle} smooth={true} duration={500} spy={true} exact ='true' offset={-80}>Contact </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>

            </SideBarContainer>

       
        );
}
export default SideBar;