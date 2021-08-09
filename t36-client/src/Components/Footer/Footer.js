import React, { useEffect } from 'react';
import Logo from '../Header/logo.png'
import {FooterContainer, NavSpace} from './Styles';
import {useSelector, useDispatch} from 'react-redux';
import {getWebLinks, getSocialLinks} from '../../redux/Footer/footerReducer';

const Footer = () => {
    const dispatch = useDispatch();
    const webLinks = useSelector(store => store.footer.webLinks);
    const socialLinks = useSelector(store => store.footer.socialLinks);

    useEffect(() => {
        dispatch(getWebLinks());
        dispatch(getSocialLinks());
    }, [])

    return (
        <FooterContainer>
            <img src={Logo} alt="Logo"/>

            <NavSpace>
                {webLinks.length > 0 ? 
                    webLinks.map((link) => {
                        return(
                            <a key={link.pathname} href={link.path}>{link.pathname}</a>
                        )
                    })
                    : ''
                }
            </NavSpace>

            <NavSpace icon>
                {socialLinks.length > 0 ? 
                    socialLinks.map((element) => {
                        return(
                            <a key={element.pathname} herf={element.path}>{element.pathname}</a>
                        )
                    })
                    : ''
                }
            </NavSpace>
        </FooterContainer>
    );
}

export default Footer;