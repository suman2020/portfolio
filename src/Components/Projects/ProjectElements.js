import styled from 'styled-components';
export const ProjectsContainer = styled.div`
    
    display: grid;
    grid-template-columns: 1fr;
    
    // align-items:center;
    padding: 5px 30px;
    height: 90vh;
    position: relative;
    z-index: 1;
    background: blue;
    row-gap: 1em;
`
export const ProjectHolder = styled.div`
    display: flex;
    justify-content:space-between;  
    border: 1px black solid;
    

`
export const Title = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`
export const Content = styled.section`
    height:100%;
    width: 40%;
    background-color: red;

`
export const Description = styled.p`
    color: yellow;
`
export const Demo = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 100%;
    width: 60%;
    background-color: grey;
`

export const LiveButton = styled.button`
    border-radius: 10%;
    font-size: 20px;
    height: 30%;
    padding: 15px 32px;
    text-align: center;

`
export const ViewSourceCode = styled.button`
    border-radius: 10%;
    font-size: 20px;
    padding: 15px 32px;
    height: 30%;

`

