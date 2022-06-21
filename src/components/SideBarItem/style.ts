import styled from "styled-components";

export const Container = styled.div`
    margin: 30px 0;
    cursor: pointer;

    a{
        display: flex;
        text-decoration: none;
        align-items: center;
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
`;

export const Title = styled.div`
    text-align: left;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #fff;
`;

export const Description = styled.div`
    text-align: left;
    font-size: 13px;
    color: #b8b8d4;
`;

export const IconArea = styled.div<{active: boolean; }>`
    width: 50px;
    height: 50px;
    background-color: ${props => props.active ? '#a5a5f7' : '#6565fd'};
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 50%;
`;

export const Point = styled.div<{active: boolean; }>`
    width: 6px;
    height: 6px; 
    border: 3px solid ${props => props.active ? '#a5a5f7' : '#6565fd'};
    margin-left: 30px;
    margin-right: -6px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#a5a5f7' : '#6565fd'};
`;