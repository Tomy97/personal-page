import styled from 'styled-components';

const FormContainer = styled.div`
    width: 80%;
    margin 20px auto;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 10px;
    border: 1px solid #c1c1c1;
    border-radius: 5px;
    padding: 10px 30px;
    margin-top: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

    button{
        width: 30%;
        margin: 0 auto;
        background-color: #18A0FB;
    }
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    margin: 0;
    text-align: center;
`;

const FieldsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    @media(min-width: 768px){
        flex-direction: row;
        gap: 10px;
    }
`;

const NewsField = styled.div`
    width: 100%;
    margin: 10px 0;

    @media(min-width: 768px){
        width: ${(props) => props.little ? '40%' : '100%'};
    }
`;

const FieldTitle = styled.h3`
    font-size: 18px;
    font-weigth: bold;
    margin 0 0 10px 0;
`;

const ContentField = styled.div`
    border: 1px solid #C1C1C1;
`;

const NewsImage = styled.img`
    width: 15%;
    margin-right: 15px;
`;

export {FormContainer, Form, Title, FieldsContainer, NewsField, FieldTitle, ContentField, NewsImage};

