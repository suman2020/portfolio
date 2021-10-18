import { ListContainer } from "./ExperienceElements";
import list_image from "../../Assets/list_image.png"

const Experience = () =>{
    return(
        <>
        
        <div id="experience" style ={{backgroundColor: "#838C95"}}>
        <h1 style={{color:"orange", textAlign: "center",fontSize:'45px', padding: "15px"}}>Work Experience</h1>
       
        <h3 style={{color:"blue", textAlign: "center"}}>Information Technology Service Assistant</h3>
        <h3 style={{color:"blue", textAlign: "center"}}>MAY 2019 - Present</h3>
        <h3 style={{color:"blue", textAlign: "center"}}>The University of Texas at Arlington</h3>
        <br/>
       


        <ListContainer style={{display: "flex",flexDirection:"column", justifyContent:"center"}}>
        <p style={{color:"white"}}> ➤ Provided technical support for hardware, software and computing pheripherals </p>
        <p style={{color:"white"}}> ➤ Handled the university website using Cascade and SiteCore </p>
        <p style={{color:"white"}}> ➤ Setup, configured, diagnosed and performed hardware and software repairs </p>
        <p style={{color:"white"}}> ➤ Assisted in new lab computers installation and re-configurations </p>
        <p style={{color:"white"}}> ➤ Assisted with document sorting, distribution, filing, processing forms and data entry </p>
        <p style={{color:"white"}}> ➤ Created and updated knowledge articles and training materials </p>  

            
        </ListContainer>
        </div>
        </>
    )
}

export default Experience;