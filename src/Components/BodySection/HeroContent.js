import { DropDownButton,Social, SocialItems, HeroContainer,Background, Image,Content, HeaderName, Info } from "./HeroContentElements";
import background_image from '../../Assets/background.jpg';
import { SocialIcon } from "react-social-icons";
import Resume from '../../Assets/Current-Resume.pdf';
import { FaArrowCircleDown } from "react-icons/fa";
const HeroContent = () =>{

    return (
        <HeroContainer id="hercontent">
            <Background>
                <Image src = {background_image}></Image>
            </Background>
            <Content>
                <HeaderName>Suman Thapa Magar</HeaderName>
                <Info>
                    Software Engineer | Computational Thinker | Athlete
                </Info>
                <Social>
                    <SocialItems>
                        <SocialIcon bgColor ="#8FDFFB" url = "https://www.linkedin.com/in/suman-thapa-magar-5b5a351a9/" target ="_blank" title="LinkedIn"/>
                    </SocialItems>
                    <SocialItems>
                        <SocialIcon url = "https://github.com/suman2020" bgColor="#DC8B6D " target ="_blank" title = "Github"/>
                    </SocialItems>
                    <SocialItems>
                        <SocialIcon url = "mailto:suman.thapamagar@mavs.uta.edu" target ="_blank" title="E-Mail"/>
                    </SocialItems>
                    <SocialItems>
                        <SocialIcon url = "https://twitter.com/MagarSuman13" target ="_blank" title="Twitter"/>
                    </SocialItems>
                    <SocialItems>
                        {/* <FileIcon url = {Resume} target ="_blank"/> */}
                        <SocialIcon network=""url = {Resume} target = "_blank" title="Resume"/>
                    </SocialItems>
                   
                </Social>
                <DropDownButton to='about' smooth={true} duration={500} spy={true} exact ='true' offset={-80} >
                        <FaArrowCircleDown style={{height:"3.7em", width:"3.5em"}}/>
                    
                </DropDownButton>
                
               
            </Content>
            

        </HeroContainer>

    );


}

export default HeroContent;