import { ProfileContainer,PictureHolder, SelfIntroduction, Image, Button } from "./ProfileElements";
import profile_pic from '../../Assets/profile.png';
import Resume from '../../Assets/Current-Resume.pdf';
const Profile = () =>{
    return(
        <>
        <div style={{backgroundColor:"#343434"}} id ="about">
        <h1 style={{color:"orange", textAlign: "center",fontSize:'45px'}}>About Me</h1>
        <ProfileContainer>
            
            <Image src = {profile_pic}></Image>
            
           
            <SelfIntroduction>
                <p style={{ marginLeft:"auto", marginRight:"auto"}}>
                I am currently a senior pursuing my undergraduate degree in Computer Science. My primary interests include software design and development, computational programming and web development. I also have keen interest in sports. During leisure time, I enjoy playing volleyball and soccer. 
                </p>
                <br/>
                <p style={{ marginLeft:"auto", marginRight:"auto"}}>
                    Currently, I am seeking a full time software engineer/ developer position or similar intern roles. If you think, I'm a good fit, 
                    please contact me via <a href="mailto:suman.thapamagar@mavs.uta.edu" style={{textDecoration: "none", color: "mediumseagreen"}}>suman.thapamagar@mavs.uta.edu</a>
                </p>
                <br/>
                <a href = {Resume} target = "_blank" style = {{marginTop: "5px",textDecoration:"none"}}><Button > View My Resume</Button></a>
                    
            </SelfIntroduction>
                
        </ProfileContainer>
        </div>
        </>
    )   
}

export default Profile;