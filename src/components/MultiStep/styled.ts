import styled from "styled-components";

export const StyledHeader = styled.header`
    /* width: 800px; */
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 1rem;
    
    div {
        padding: 10px;
        margin: 0 18px;
        border: none;
        height: 40px;
        width: 40px;
        border-radius: 100%;
        color: #fff;
        background-color: #D6D6D6;
        cursor: pointer;
        display: flex;
        justify-content: center;
        position: relative;


        :after {
            content: " ";
            position: absolute;
            margin: 0 3px;
            left: 40px;
            display: inline-block;
            height: 2px;
            width: 29px;
            background-color: #D9D9D9;
            color: purple;
        }   

        .circleEmoji {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    :last-child::after{
        display: none;
        background-color: red;
        color: red;
    } 
    
    }

    .selected {
        background-color: ${({theme}) => theme.color.primary};
    }

    @media screen and (max-width:300px) {
        div {
            margin: 0 10px;
            padding: 0;
        }
    }

`


// import styled from "styled-components"

// export const Stepped = styled.div`
// display: flex;
// margin: 20px;

// span {
//     background-color: #502E88;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 30px;
//     width: 30px;
//     padding: 10px;
//     border-radius: 100%;

//     .active {
//         background-color: #502E88;
//     }
// }
// `