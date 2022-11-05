import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;

    button {
        flex-grow: 1;
        padding: 5px;
        border: none;
        border-radius: 0 0 10px 10px;
        color: #fff;
        background-color: #D6D6D6;
        cursor: pointer;
    }

    .selected {
        background-color: ${({theme}) => theme.color.primary};
    }
`