import styled from "styled-components";

export const Container = styled.div`
max-width: 1300px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 3rem;

h1 {
    color: ${({theme }) => theme.color.primary};
    margin-bottom: 2rem;
}

.singleInput{
    width: 500px;
}

.singleInput1{
    width: 500px;
    display: flex;
    justify-content: center;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    span {
        color: #686868;
        margin-bottom: 2px;
    }
}



@media only screen and (max-width: 600px){
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    height: 60%;
    margin-top: 2rem;
    .singleInput{
    width:90%;
}   
    h1 {
        font-size: x-large;
    }
}

@media only screen and (max-width: 200px){
    margin-top: 1rem;
    h1 {
        font-size: medium;
    }
}
`

export const Form = styled.form`
display: flex;
flex-direction: column;
margin-top: 1rem;
width: 80%;
max-width: 800px;
justify-content: center;


@media only screen and (max-width: 600px) {
    margin-top: 0;
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
margin: 0 auto;
margin-top: 2rem;
`
