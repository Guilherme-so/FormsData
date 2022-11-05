import styled from "styled-components";

export const StyledHeader = styled.header`
/* z-index: 9999; */
    height: 100vh;
    position: fixed;
    z-index: 9999;
`

export const StyledMenu = styled.menu`
    position: absolute;
    z-index: 9999;
    left: 0;
    width: 60px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.color.tertiary};
    transition: width .2s linear;
    overflow: hidden;
    &:hover {
        width: 200px;

        a {
            width: calc(100% - 20px);
            p {display:block}
        }

        .img {
            width: 130px;
            height: 130px;
            margin-right: 0px;
            margin-top: 10px;
        }
    }

    .img {
        width: 110px;
        height: 110px;
        margin: 50px 0;
        margin-top: 20px;
        margin-right: -62px;
        position: relative;
        cursor: pointer;
    }

    nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: auto;
        width: 200px;
    }

    .colaborator {
        display: flex;
        border-radius: 10px;
        padding: 10px;
        background-color: #4D1C64;
        cursor: pointer;
        

        p {
            display: none;
            color: #fff;
            text-align: center;
            width: calc(100% - 50px);
        }   
    }

    .sair {
        display: flex;
        border-radius: 10px;
        margin: 10px;
        /* background-color: #4D1C64; */
        cursor: pointer;
        margin-bottom: 20px;
        p {
            display: none;
            color: #fff;
            text-align: center;
            width: calc(100% - 50px);
        }   
    }

    svg {
        color: #fff;
        width: 50px;
        height: 50px;
        padding: 15px;
        font-size: 1rem;
    }

    button {
        color: #FFF;
        border: none;
        cursor: pointer;
        padding: 5px 8px;
        font-size: 1.5rem;
        font-weight: 500;
        border-radius: 10px;
        background-color: ${({theme}) => theme.color.primary};
    }

    
`