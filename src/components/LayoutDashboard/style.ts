import styled from "styled-components";

export const StyledLayout = styled.div`
    display: flex;
    background-color: #F4F6FA;
    height: 100%;
    align-self: flex-start;
    margin: 0 auto;
    justify-content: flex-start;
    align-items: flex-start;

    .modal {
        /* position: absolute; */
        display: flex;
        flex-direction: column;

        &>div {
            width: 100%;
        }

        button {
        border: none;
        color: #FFF;
        background-color: ${({theme}) => theme.color.primary};
        padding: 8px 20px;
        border-radius: 25px;
        font-size: 1.4rem;
        cursor: pointer;
    }
    }
`

export const StyledLoading = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`