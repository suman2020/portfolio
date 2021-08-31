import styled from 'styled-components';
export const ProjectsContainer = styled.div`
    
    display: grid;
    grid-template-columns: 1fr;
    
    // align-items:center;
    padding: 5px 30px;
    // height: 100vh;
    position: relative;
    z-index: 0;
    // background: grey;
    row-gap: 1rem;
    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
   
`
export const ProjectHolder = styled.div`
    
    display: grid;
    margin: 0 auto;
    grid-gap: 1rem;  
    // border: 1px black solid;
    // background-color:#049CBC;
    @media screen and (min-width: 768px){
        grid-template-columns: repeat(2,1fr);
    }
    @media screen and (min-width: 1000px){
        grid-template-columns: repeat(3,1fr);
    }
    

`
export const Title = styled.h1`
    font-size: 2em;
    // text-align: center;
    color:orange ;
    &:hover{
        color: red;
        // font-size: 3em;
    }
`
export const Content = styled.section`
    height:70%;
    // width: 50%;
   

`
export const Description = styled.p`
    color: black;
    font-size: 20px;
`
export const Demo = styled.div`
    justify-self: start;
    
    
    @media screen and (min-width: 768px){
        justify-self:start;
        height: 20vh;
        // transform: translate(0%, -200%);
    }
    @media screen and (min-width: 1000px){
        justify-self:center;
        height: 20vh;
        width: 60%;
        // transform: translate(0%, -200%);
    }

    
    
    
`

export const LiveButton = styled.button`
    border-radius: 10%;
    font-size: 20px;
    height: 5vh;
    width: 200px;
    // padding: 15px 32px;
    text-align: center;
    cursor: pointer;
    margin: 2px;
    color: palevioletred;
    &:hover{
        transform: scale(1.3);
        color: yellow;
        background-color:black; 
        transition: 1s ease;
    }
    @media screen and (min-width: 768px){
        margin:5px;
        height:5vh;
    }
     @media screen and (min-width: 1000px){
        margin:15px;
        height:5vh;
    }


`
export const ViewSourceCode = styled.button`
    border-radius: 10%;
    font-size: 20px;
    // padding: 15px 32px;
    height: 5vh;
    cursor: pointer;
    text-align: center;
    color: palevioletred;
    width: 200px;
    margin: 2px;
    &:hover{
        transform: scale(1.3);
        color: yellow;
        background-color:black; 
        transition: 1s ease;
    }
    @media screen and (min-width: 768px){
        margin:5px;
        height:5vh;
    }
     @media screen and (min-width: 1000px){
        margin:15px;
        height:5vh;
    }


`
export const ImageHolder = styled.img`
    width: 50%;
    height: 30vh;
    justify-self: start;
    @media screen and (min-width: 768px){
        justify-self:end;
        height: 50vh;
        width: 70%;
        // transform: translate(0%, -200%);
    }
    @media screen and (min-width: 1000px){
        justify-self:center;
        height: 50vh;
        width: 100%;
        // transform: translate(0%, -200%);
    }
    @media screen and (min-width: 1420px){
        justify-self:center;
        height: 45vh;
        width: 70%;
        // transform: translate(0%, -200%);
    }


`
export const ButtonL = styled.button`
background-color: grey; 
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 8px 2px;
cursor: pointer;
&:hover{
    color: yellow;
    background-color:#17BAD0; 
    transition: 1s ease;
}
@media screen and (max-width: 768px){
    font-size: 10px;
    // transform: translate(0%, -200%);
}
`

