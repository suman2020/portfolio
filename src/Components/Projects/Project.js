import { ProjectsContainer,ProjectHolder,Content,Title,Description,Demo,LiveButton,ViewSourceCode,ImageHolder, ButtonL,A } from "./ProjectElements";
import face_recognition from '../../Assets/face_recognition.PNG';
import spacecube from '../../Assets/space_cube.PNG';
import car_rental_system from '../../Assets/car_rental_system.PNG';
import concurrency from '../../Assets/concurrency.PNG';
import clip from '../../Assets/rental_clip.mp4';

import { Button } from "react-scroll";

const Projects = () =>{
    return(
        <div id="projects">
            <h1 style={{textAlign:'center', fontSize:'45px', color:"orange"}}>Projects</h1>
            <ProjectsContainer >
            
                <ProjectHolder>
                    
                    <Content>
                        <Title>
                        FaceRecognition
                        </Title>
                        
                        <Description>
                        An web app that uses Clarifai’s General AI Image Recognition Model to recognize human faces in images.

                        </Description>
                        <ButtonL >HTML</ButtonL>
                        <ButtonL >CSS</ButtonL>
                        <ButtonL >JavaScript</ButtonL>
                        <ButtonL >Node</ButtonL>
                        <ButtonL >React</ButtonL>
                        <ButtonL >Express</ButtonL>
                        <ButtonL >PostgreSQL</ButtonL>
                        <br/>   
                       
                    </Content>
                   

                    <ImageHolder src ={face_recognition}>

                    </ImageHolder>
                    <Demo >
                        
                        <LiveButton>
                            <A href="https://suman2020.github.io/facerecognition/" target="_blank" >ViewLive</A>
                            
                        </LiveButton>
                        <br></br><br></br>
                        <ViewSourceCode>
                        <A href="https://github.com/suman2020/facerecognition" target="_blank" >SourceCode</A>
                            
                        </ViewSourceCode>
                        <br></br>
                    </Demo>
                    
                    
                    

                </ProjectHolder>
                    
                <br></br>
                <ProjectHolder>
                <Content>
                        <Title>
                        Car Rental System
                        </Title>
                        
                        <Description>
                        An web app that uses Clarifai’s General AI Image Recognition Model to recognize human faces in images.

                        </Description>
                        <ButtonL >MySQL</ButtonL>
                        <ButtonL >Python</ButtonL>
                        <ButtonL >MySQL Workbench</ButtonL>
                        
                        <br/>   
                       
                    </Content>
                   

                    <ImageHolder src ={car_rental_system}>

                    </ImageHolder>
                    <Demo >
                        
                        <LiveButton>
                            <A href={clip} target="_blank" >ViewLive</A>
                            
                        </LiveButton>
                        <br></br><br></br>
                        <ViewSourceCode>
                        <A href="https://github.com/suman2020/Car_Rental_System" target="_blank" >SourceCode</A>
                            
                        </ViewSourceCode>
                        <br></br>
                    </Demo>
                </ProjectHolder>
                <br></br>
                <ProjectHolder>
                <Content>
                        <Title>
                        Space Cube
                        </Title>
                        
                        <Description>
                        An web app that uses Clarifai’s General AI Image Recognition Model to recognize human faces in images.

                        </Description>
                        <ButtonL >C#</ButtonL>
                        <ButtonL >Unity</ButtonL>
                        <ButtonL >Blender</ButtonL>
                        <ButtonL >Android Studio</ButtonL>
                        
                        
                        <br/>   
                       
                    </Content>
                   

                    <ImageHolder src ={spacecube}>

                    </ImageHolder>
                    <Demo >
                        
                        <LiveButton>
                            <A href="https://simmer.io/@suman2020/spacecube" target="_blank" >ViewLive</A>
                            
                        </LiveButton>
                        <br></br><br></br>
                        <ViewSourceCode>
                        <A href="https://github.com/suman2020/SpaceCube" target="_blank" >SourceCode</A>
                            
                        </ViewSourceCode>
                        <br></br>
                    </Demo>
                </ProjectHolder>

                <br></br>
                <ProjectHolder>
                <Content>
                        <Title>
                        Concurrency
                        </Title>
                        
                        <Description>
                        An web app that uses Clarifai’s General AI Image Recognition Model to recognize human faces in images.

                        </Description>
                        <ButtonL >C</ButtonL>
                        <ButtonL >Ubuntu</ButtonL>
                        <ButtonL >FileZilla</ButtonL>
                        <ButtonL >GCC</ButtonL>
                        <ButtonL >GDB</ButtonL>
                        
                        <br/>   
                       
                    </Content>
                   

                    <ImageHolder src ={concurrency}>

                    </ImageHolder>
                    <Demo >
                        
                        
                        <br></br><br></br>
                        <ViewSourceCode>
                        <A href="https://github.com/suman2020/Concurrency" target="_blank" >SourceCode</A>
                            

                        </ViewSourceCode>
                        <br></br>
                    </Demo>
                </ProjectHolder>
                <br></br>
            </ProjectsContainer>
        </div>
        
        
    );
}
export default Projects;