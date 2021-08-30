import { ProfileContainer,PictureHolder, SelfIntroduction, Image } from "./ProfileElements";
import profile_pic from '../../Assets/profile.png';
const Profile = () =>{
    return(
        <>
        <div style={{backgroundColor:"#343434"}} id ="about">
        <h1 style={{color:"orange", textAlign: "center"}}>About Me</h1>
        <ProfileContainer>
            
           
            <SelfIntroduction>
                <p>
                I am an undergrad pursuing my degree in Computer Science. My primary interests lies in using computation and visualization of 
                    computer programming to solve challenges in real world.
                </p>
                <p>
                    Currently, I am seeking a full time software engineer/ developer position in DFW metroplex. If you think, I'm a good fit, 
                    please contact me via <a href="mailto:suman.thapamagar@uta.edu" style={{textDecoration: "none", color: "mediumseagreen"}}>suman.thapamagar@mavs.uta.edu</a>
                </p>
                <button>View My Resume</button>
                    
            </SelfIntroduction>
            <PictureHolder>
                <Image src = {profile_pic}></Image>
            </PictureHolder>    
        </ProfileContainer>
        </div>
        </>
    )   
}

export default Profile;