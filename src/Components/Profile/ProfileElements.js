import styled from 'styled-components';

export const ProfileContainer = styled.div`
    
    
    padding: 20px 450px 40px;
    margin-left: auto;
    margin-right: auto;
    display: flex;


    z-index: 1;
    
    // align-items: center;  
    @media screen and (max-width: 768px){
        padding: 1px 20px 5px;
    }
    @media screen and (max-width: 1200px){
        padding: 1px 50px 5px;
    }

`
export const SelfIntroduction = styled.div`

    font-size: 20px;
    color: white;
    
    
`
export const Image  = styled.img`

margin: 0px 30px 10px 2px;
width: 150px;
border-radius: 100%;
// background-position: center center;
// background-size: cover;
// background-repeat:no-repeat;
// background-attachment: fixed;
`

export const Button = styled.button`
text-decoration: none;
background: #5E5DF0;
border-radius: 999px;
box-shadow: #5E5DF0 0 10px 20px -10px;
box-sizing: border-box;
color: #FFFFFF;
cursor: pointer;
font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
font-size: 16px;
font-weight: 700;
line-height: 24px;
opacity: 1;
outline: 0 solid transparent;
padding: 10px 20px;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
width: fit-content;
word-break: break-word;
border: 0;
  
}

`
