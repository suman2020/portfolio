import styled from 'styled-components';
// import img from '../../Assets/background_mobile.jpg';


export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 90vh;
    position: relative;
    z-index: 1;
`

export const Background = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`

export const Image = styled.img`
    width: 100%;
    height: 100vh;
    background-position: center center;
    background-size: cover;
    background-repeat:no-repeat;
    background-attachment: fixed;
   
`