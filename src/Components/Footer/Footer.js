import { FooterContainer } from "./FooterElements";
import { Icon } from '@iconify/react';

const Footer = () =>{
    return(
    <>
    <FooterContainer>
        <p>Designed and edited by: Suman Thapa Magar</p>
        <p><Icon icon="twemoji:copyright" height='20' align="top"/> Copyright 2021  | All rights reserved</p>
    </FooterContainer>
    </>
    );
}

export default Footer;