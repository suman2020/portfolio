import { ContactContainer, SocialHolder } from "./ContactElements";
import { SocialIcon } from "react-social-icons";
import {Icon} from '@iconify/react';



const Contact = () =>{
    return(
        <>
            <div id="contact">
            <div style={{backgroundColor:"black"}}>
                <h1 style={{textAlign:'center', fontSize:'45px', color:"orange", padding: '70px 5px 20px'}}>Contact</h1>
                <br/>
                <h3 style={{textAlign:'center', color:"white", padding: "5px 0px 10px"}}>I would love to connect with you.</h3>
                
            </div>
            <div style={{display: "flex", justifyContent:'center', backgroundColor:'black'}}>
                <Icon icon="fa:handshake-o" color="yellow" style={{fontSize:"72px"}}/>

            </div>
            <ContactContainer>
                <SocialHolder>
                    <SocialIcon url = "mailto:suman.thapamagar@mavs.uta.edu" target ="_blank" title="E-Mail"/>
                    
                    <p style={{color:'yellow'}}>Email Me</p>
                    <p style={{color:'cyan'}}>suman.thapamagar@mavs.uta.edu</p>


                </SocialHolder>   

                <SocialHolder>
                
                    <SocialIcon bgColor ="#8FDFFB" url = "https://www.linkedin.com/in/suman-thapa-magar-5b5a351a9/" target ="_blank" title="LinkedIn"/>
                    <p style={{color:'yellow'}}>Get in Touch</p>
                    <p style={{color:'cyan'}}>LinkedIn</p>
                </SocialHolder>
                
            

            </ContactContainer>
            </div> 
        </>
        
    )
}

export default Contact;
