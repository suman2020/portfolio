import styled from 'styled-components';
import { Button } from 'react-scroll';
import { Link as LinkS } from 'react-scroll';
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
export const Content = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    align-items:center;
    transform: translate(0%, -50%);

`

export const HeaderName = styled.h1`
    color: #fff;
    font-size: 75px;
    text-align: center;
    
    color: yellow;

    @media screen and (max-width: 768px){
        font-size: 45px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }

`
export const Info = styled.h2`

    margin-top: 0px;
    color: #fff;
    font-size: 32px;
    text-align: center;
    max-width: 700px;
    // transform: translate(0%, -300%);
    color: cyan;
    @media screen and (max-width: 768px){
        font-size: 20px;
        // transform: translate(0%, -200%);
    }
    @media screen and (max-width: 480px){
        font-size: 16px;
        // transform: translate(0%, 0%);
    }

`
export const Social = styled.div`
    display: flex;
    justify-content: space-between;
     

`

export const SocialItems = styled.a`

color: #fff;
margin-top: 10px;
padding: 15px 30px;
cursor: pointer;
text-decoration: none;   
transition: width .1s ease;
&:hover{
    transform: scale(1.3);
    transition: 1s ease;

}

`
export const DropDownButton = styled(LinkS)`

    color: red;
    height: 4em;
    width: 4em;
    transform: translate(15%,45vh);
    cursor: pointer;
    border-radius:100%;
    color: green;
   



    &:hover{
        transform: scale(1.2) translate(13%,35vh);
        color: yellow;
        transition: 1s ease;
        border-radius:100%;


    }
`

