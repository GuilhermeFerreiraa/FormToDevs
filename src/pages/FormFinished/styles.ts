import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(to bottom, #000066 0%, #000 100%);
    color: #fff;
    min-width: 100vw;
    height: 100vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AreaImage = styled.div`
    display: grid;
    grid-template-columns: 700px 500px;
    margin: 10% auto;
    justify-content: center; 
    align-items: center;

    img {
        width: 25vw;
        position: relative;
        top: 18px;
    }
    h1{
        font-size: 2rem;
        text-transform: uppercase;
        font-family: montserrat, sans-serif;
        margin: 0;
    }
    p{
        margin: 0;
        width: 70%;
        color: #b8b8c4;
        font-family: montserrat, sans-serif;
        font-size: 1rem;
    }
    .btnMenu{
        text-decoration: none;
        align-self: flex-start;
        border: none;
        padding: 8px 16px;
        background-color: #6565fd;
        color: #fff;
        font-family: 'montserrat', sans-serif;
        font-size: 1rem;
        border-radius: 5px;
        transition: .3s ease-in;
        
        &:hover{
            transition: .3s ease-in;
            cursor: pointer;
            background-color: #a5a5f7;
        }
    }
`;

export const BoxInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 10px;
`;