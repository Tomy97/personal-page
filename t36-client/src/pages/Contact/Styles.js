import styled from 'styled-components';

const ContactContainer = styled.div`
    width: 80%;
    margin: 20px auto;
`;

const MainTitle = styled.h1`
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    justify-content: space-between;

    @media(min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;
    }
`;

const ElementTitle = styled.h2`
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 10px 0;
`;

const Info = styled.p`
    font-size: 18px;
`;

const FormContainer = styled.div`
    padding: 25px;
    border: 1px solid #18A0FB;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 5px;
    margin-bottom: 10px;

    button{
        width: 100%;
        margin: 0 auto;
        background-color: #18A0FB;

        @media(min-width: 768px){
            width: 30%;
        }
    }
`;

export {ContactContainer, MainTitle, GridContainer, ElementTitle, Info, FormContainer, ContactForm};