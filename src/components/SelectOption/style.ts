import styled from "styled-components";

export const Container = styled.div<{ selected: boolean;}>`
    display: flex;
    align-items: center; 
    cursor: pointer;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid ${props => props.selected ? '#6565fd' : '#eee'};
    margin-bottom: 15px;

    &:hover{
        border: 2px solid #a5a5f7;
    }

    `;
 
export const Icon = styled.div`

    img {
        height: 130px;
        width: 130px;
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 7px;
`;
    
export const Description = styled.div`
    font-size: 14px;
    color: #eee;
    font-family: 'Montserrat', sans-serif;
`;
