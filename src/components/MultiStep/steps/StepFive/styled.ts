import styled from "styled-components"


export const  Container = styled.div`
max-width: 900px;
width: 100%;
`

export const Introducao = styled.div`
max-width: 900px;
width: 100%;
margin: 0 auto;
margin-top: 1rem;
height: 500px;
border-radius: 20px;
padding: 30px;
background-color: #F6F6F6;
 
 p {
    display: flex;
    justify-content: center;
    color: #686868;
 }

 .windows {
    color: #ffffff;
    background-color: #502E88;
 }
`

export const Wrapper = styled.div`
max-width: 900px;
width: 100%;
margin: 0 auto;
display: flex;
justify-content:space-around;
margin-top: 2rem;
`

export const Button = styled.button`
height: 40px;
color: ${props => props.color};
font-size: 20px;
border: none;
border-radius: 20px;
padding: 10px 60px;
`