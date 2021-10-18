import { SkillsContainer,ButtonL } from "./SkillsElements";

const Skills = () =>{
    return(
        <>
        <div style={{backgroundColor:'grey'}}>
        <h1 style={{color:"Orange", textAlign: "center", fontWeight:"bold",fontSize:'45px',  padding: "30px 0px 0px "}}>Skills</h1>
        <br/> 
        <SkillsContainer id="skills">
            
            
                <ButtonL >Python</ButtonL>
                <ButtonL >C</ButtonL>
                <ButtonL >JavaScript</ButtonL>
                <ButtonL >C++</ButtonL>
                <ButtonL >Java</ButtonL>
                <ButtonL >MySQL</ButtonL>
                <ButtonL >PostgreSQL</ButtonL>
                <ButtonL >HTML</ButtonL>
                <ButtonL >CSS</ButtonL>
                <ButtonL >Node</ButtonL>
                <ButtonL >React</ButtonL>
                <ButtonL >Express</ButtonL>
                <ButtonL >GCC</ButtonL>
                <ButtonL >GDB</ButtonL>
                <ButtonL >Git</ButtonL>
                <ButtonL >Postman</ButtonL>
            
            
              
     
        </SkillsContainer>
        </div>
        </>
      
    )
}

export default Skills;