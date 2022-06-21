import styled from 'styled-components';

export const Container = styled.div`

    h1{
        font-family: Montserrat, sans-serif;
    }

    hr{
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
        row-gap: 25px;
    }

    input{
        width: 70%;
        outline: none;
        border-radius: 15px;
        padding: 18px 19px;
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
        border: 2px solid #6565fd;
        background-color: transparent;
        color: white;
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
    margin-top: 10px;
    display: flex;
    width: 75%;
    column-gap: 15px;
    height: 55px;
    justify-content: flex-start;
`;