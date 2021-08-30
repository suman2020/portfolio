import { ProjectsContainer,ProjectHolder,Content,Title,Description,Demo, LiveButton,ViewSourceCode } from "./ProjectElements"

const Projects = () =>{
    return(
        <div id="projects">
            <h1 style={{textAlign:'center'}}>Projects</h1>
            <ProjectsContainer >
            
                <ProjectHolder>
                    
                    <Content>
                        <Title>
                        FaceRecognition
                        </Title>
                        
                        <Description>

                        </Description>
                    </Content>
                    <Demo>
                        <LiveButton>
                            ViewLive
                        </LiveButton>
                        <ViewSourceCode>
                            SourceCode

                        </ViewSourceCode>
                    </Demo>

                </ProjectHolder>
                <ProjectHolder>
                    Hi
                </ProjectHolder>
                <ProjectHolder>
                    Hey
                </ProjectHolder>
            </ProjectsContainer>
        </div>
        
        
    );
}
export default Projects;