import styled from 'styled-components';

export const Container = styled.div`

    h1{
        font-family: Montserrat, sans-serif;
    }

    hr{
        margin-bottom: 30px;
        1px solid red;
    }

    p{
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        color: #eee;
    }

    label{
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
    }

    input{
        width: 70%;
        outline: none;
        border-radius: 15px;
        padding: 8px 19px;
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
        border: none;
        box-shadow: 10px 40px 51px #1d1d1d);
    }

    button {
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
`;

export const AreaButton = styled.div`
    margin-top: 35px;
    display: flex;
    width: 100%;
    column-gap: 30px;
    height: 55px;
    `;