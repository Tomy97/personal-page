import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    width: 80%;
`;

const MainTitle = styled.h1`
    font-size: 40px;
    margin: 10px 0;
    font-weigth: bold;
    text-align: center;
`;

const NewList = styled.div`
    margin: 0;
    display: grid;
    grid-template-columns: 1;
    gap: 20px;

    @media(min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width: 998px){
        grid-template-columns: repeat(3, 1fr);
    }
`;

const NewCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid #9e9e9e;
    background-color: #f6f6f6;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const NewTitle = styled.h3`
    font-size: 24px;
    text-align: center;
    margin: 0;
`;

const NewInfo = styled.p`
    font-size: 16px;
    margin: 0;
    text-align: center;
`;

const NewImage = styled.img`
    width: 60%;
    margin 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
    
    button {
        font-size: 16px;
        margin-right: 10px;
    
        &:hover {
          cursor: pointer;
        }
    }    
`;

export {Container, MainTitle, NewList, NewCard, NewTitle, NewInfo, NewImage, ButtonContainer}