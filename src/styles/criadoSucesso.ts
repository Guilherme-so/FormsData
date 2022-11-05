import styled from "styled-components";

export const Container = styled.div`
max-width: 1300px;
display: flex;
flex-direction: column;
justify-content: center;
margin: auto;
align-items: center;
margin-top:8rem;

h1 {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    color: ${({theme }) => theme.color.primary};
    margin-bottom: 2rem;
}

`

export const Form = styled.form`
display: flex;
flex-direction: column;
/* margin-top: 3rem; */
width: 80%;
max-width: 800px;
justify-content: center;
.fisrt1 {
    margin-bottom: 15px;
}
`

export const Button = styled.button`
height: 40px;
background-color: ${({theme}) => theme.color.primary};
color: #fff;
border: none;
padding: 0 60px;
font-size: 21px;
border-radius: 51px;
margin: 0 auto;
`
