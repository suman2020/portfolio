import styled from 'styled-components';

export const ProfileContainer = styled.div`
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    // align-items:center;
    padding: 0 30px;
    height: 90vh;
    position: relative;
    z-index: 1;

`
export const PictureHolder = styled.div`
    
    height: 100%;
    width: 100%;

`
export const SelfIntroduction = styled.div`
    font-size: 20px;
    color: white;
`
export const Image  = styled.img`
width: 70%;
height: 80vh;
border-radius: 100%;
// background-position: center center;
// background-size: cover;
// background-repeat:no-repeat;
// background-attachment: fixed;
`