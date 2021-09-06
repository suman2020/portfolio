import styled from 'styled-components';
export const SkillsContainer = styled.div`
    
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(100px, 1fr) );;
    
    // align-items:center;
    grid-gap: 1em 2em;
    
    position: relative;
    z-index: 1;
    

`
export const ButtonL = styled.button`
background-color: black; 
border: none;
color: yellow;
padding: 15px 10px;
text-align: center;
text-decoration: none;
// display: inline-block;
font-size: 15px;
margin: 8px 2px;
cursor: auto;
&:hover{
    color: red;
    background-color:#17BAD0; 
    transition: 1s ease;
    transform: scale(1.2)
}
@media screen and (max-width: 768px){
    font-size: 10px;
    // transform: translate(0%, -200%);
}
`