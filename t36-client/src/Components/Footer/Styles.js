import styled from 'styled-components';

const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    margin: 10px auto;
    gap: 15px;

    @media(min-width: 768px){
        flex-direction: row;
        position: absolute;
        bottom: 0;
    }
`;

const NavSpace = styled.nav`
    display: ${(props) => props.icon ? 'flex' : 'none'};
    gap: 10px;

    @media(min-width: 1280px){
        display: flex;
    }

    a{
        font-size: ${(props) => props.icon ? '14px' : '20px'};
        text-decoration: none;
        font-weigth: bold;
        color: ${(props) => props.icon ? '#18A0FB;' : '#000'};
        cursor: pointer;
    }
`;

export {FooterContainer, NavSpace}