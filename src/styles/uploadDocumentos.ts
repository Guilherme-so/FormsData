import styled from "styled-components"


export const Container = styled.div`
max-width: 800px;
width: 100%;
display: flex;
flex-direction: column;
margin: 0 auto;
margin-top: 3rem;

@media only screen and (max-width: 500px){
    font-size: small;
}

@media only screen and (max-width: 400px){
    font-size: x-small;
}

`

export const Heading = styled.div`
    max-width: 800px;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h1 {
        display: flex;
        justify-content: left;
        align-self: start;
        color: ${({theme}) => theme.color.primary};
        margin-bottom: 20px;
    }

    p {
        display: flex;
        justify-content: left;
        align-self: start;
        color: #686868;
    }
`

export const Form = styled.form`
display: flex;
flex-direction: column;
margin-top: 3rem;
width: 80%;
max-width: 800px;
justify-content: center;

@media only screen and (max-width: 500px){
    margin-top: 2rem;
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
margin-top: 2rem;
`
