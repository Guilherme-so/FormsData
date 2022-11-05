import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
max-width: 900px;
margin: 0 auto;
justify-content: center;
padding: 0 30px;

h2{
    display: flex;
    align-self: baseline;
    font-size: 32px;
    justify-content: left;
    color: ${({theme}) => theme.color.primary};
    margin: 2rem 0;
}

p {
    color: #686868;
}

@media only screen and (max-width: 500px){
    h2 {
        font-size: x-large;
        margin: 1rem 0;
        margin-top: 2rem;
    }
}
`

export const Button = styled.button`
height: 40px;
background-color: ${({theme}) => theme.color.primary};
color: #fff;
border: none;
padding: 0 30px;
font-size: 21px;
border-radius: 51px;
display: flex;
margin: 0 auto;
margin-top: 2rem;

@media only screen and (max-width: 500px){
    margin-top: 1rem;
}
`