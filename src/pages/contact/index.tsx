import React from 'react';
import { Content, Grid, SocialMediaPicture, SocialMedia, CustomList, CustomItem, CustomLink } from './styles';
import TwitterIcon from '../../assets/twitter-ico.png';
import FaceIcon from '../../assets/facebook-ico.png';
import LinkedinIcon from '../../assets/linkedin-ico.png';
import Section from '../../components/section';

function Contact() {
    return (
        <Section elementName="Contact" HeaderText='' customstyle="height: 30%; background-color: var(--black);">
            <Grid>
                <Content>
                    <CustomList>
                        <CustomItem><CustomLink href="mailto:worell-oscar@hotmail.com.br">E-mail</CustomLink></CustomItem>
                        <CustomItem><CustomLink href="https://www.linkedin.com/in/oscar-filho-5740ab139/" target="_blank">Linkedin</CustomLink></CustomItem>
                        <CustomItem><CustomLink href="https://wa.me/5545998543680" target="_blank">WhatsApp</CustomLink></CustomItem>
                    </CustomList>
                </Content>
                <SocialMedia>
                    <a href="https://www.facebook.com/oscar.worell/" target="_blank"><SocialMediaPicture src={FaceIcon} alt="Facebook" /></a>
                    <a href="https://www.linkedin.com/in/oscar-filho-5740ab139/" target="_blank"><SocialMediaPicture src={LinkedinIcon} alt="Linkedin" /></a>
                    <a href="https://twitter.com/OscarWorell" target="_blank"><SocialMediaPicture src={TwitterIcon} alt="Twitter" /></a>
                </SocialMedia>
            </Grid>
        </Section>
    );
}

export default Contact;