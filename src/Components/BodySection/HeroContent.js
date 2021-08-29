import { HeroContainer,Background, Image } from "./HeroContentElements";
import background_image from '../../Assets/background.jpg'
const HeroContent = () =>{

    return (
        <HeroContainer>
            <Background>
                <Image src = {background_image}>

                </Image>
            </Background>

        </HeroContainer>

    );


}

export default HeroContent;