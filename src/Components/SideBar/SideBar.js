import { SideBarContainer, Icons, CloseIcon, SideBarMenu, SideBarWrapper, SideBarLink } from './SideBarElements.js';


const SideBar = ({ isOpen, toggle }) => {
    return (

        <SideBarContainer isOpen={isOpen}  >
            <Icons onClick={toggle}>
                <CloseIcon style={{cursor: 'pointer'}} />
            </Icons>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='about' onClick={toggle} >About Me </SideBarLink>
                    <SideBarLink to='skills' onClick={toggle} >Skills </SideBarLink>
                    <SideBarLink to='experience' onClick={toggle} >Experience </SideBarLink>
                    <SideBarLink to='projects' onClick={toggle} >Project </SideBarLink>
                    <SideBarLink to='about' onClick={toggle} >Contact </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>

            </SideBarContainer>

       
        );
}
export default SideBar;