import { ProjectsContainer,ProjectHolder,Content,Title,Description,Demo,LiveButton,ViewSourceCode,ImageHolder, ButtonL } from "./ProjectElements";
import face_recognition from '../../Assets/face_recognition.PNG';
import spacecube from '../../Assets/space_cube.PNG';
import car_rental_system from '../../Assets/car_rental_system.PNG';
import concurrency from '../../Assets/concurrency.PNG';

import { Button } from "react-scroll";

const Projects = () =>{
    return(
        <div id="projects">
            <h1 style={{textAlign:'center', fontSize:'45px'}}>Projects</h1>
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
                            ViewLive
                        </LiveButton>
                        <br></br><br></br>
                        <ViewSourceCode>
                            SourceCode

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
                        <ButtonL >HTML</ButtonL>
                        <ButtonL >CSS</ButtonL>
                        <ButtonL >JavaScript</ButtonL>
                        <ButtonL >Node</ButtonL>
                        <ButtonL >React</ButtonL>
                        <ButtonL >Express</ButtonL>
                        <ButtonL >PostgreSQL</ButtonL>
                        <br/>   
                       
                    </Content>
                   

                    <ImageHolder src ={car_rental_system}>

                    </ImageHolder>
                    <Demo >
                        
                        <LiveButton>
                            ViewLive
                        </LiveButton>
                        <br></br><br></br>
                        <ViewSourceCode>
                            SourceCode

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
                        <ButtonL >HTML</ButtonL>
                        <ButtonL >CSS</ButtonL>
                        <ButtonL >JavaScript</ButtonL>
                        <ButtonL >Node</ButtonL>
                        <ButtonL >React</ButtonL>
                        <ButtonL >Express</ButtonL>
                        <ButtonL >PostgreSQL</ButtonL>
                        <br/>   
                       
                    </Content>
                   

                    <ImageHolder src ={spacecube}>

                    </ImageHolder>
                    <Demo >
                        
                        <LiveButton>
                            ViewLive
                        </LiveButton>
                        <br></br><br></br>
                        <ViewSourceCode>
                            SourceCode

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
                        <ButtonL >HTML</ButtonL>
                        <ButtonL >CSS</ButtonL>
                        <ButtonL >JavaScript</ButtonL>
                        <ButtonL >Node</ButtonL>
                        <ButtonL >React</ButtonL>
                        <ButtonL >Express</ButtonL>
                        <ButtonL >PostgreSQL</ButtonL>
                        <br/>   
                       
                    </Content>
                   

                    <ImageHolder src ={concurrency}>

                    </ImageHolder>
                    <Demo >
                        
                        <LiveButton>
                            ViewLive
                        </LiveButton>
                        <br></br><br></br>
                        <ViewSourceCode>
                            SourceCode

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