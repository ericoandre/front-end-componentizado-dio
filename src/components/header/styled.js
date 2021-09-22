import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input{
        border: 1px solid #ccc;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        width: 100%;
        padding: 8px;
    }
    button{
        background-color: #225ed8;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 8px 16px;
        &:hover {
            background-color: #2c5282;
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
        }
        span {
            font-weight: bold;
            color: #ffff;
        }
        
    }
`;
