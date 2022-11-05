import styled from "styled-components"


export const Container = styled.div`
max-width: 800px;
width: 90%;
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
margin-top: 3rem;

.inputSolo {
 width: 100%;
}

h1 {
    color: ${({theme}) => theme.color.primary}
}

.groupInput  {
display: flex;
width: 100%;
div:nth-child(2){
    width: calc(100% - 150px);
    margin-left: 10px;
}
div:nth-child(1){
    width: 150px;
    /* margin-left: 10px; */
 }
}

.groupInputBanco {
display: flex;
width: 100%;
align-items: flex-start;
position: relative;
overflow: visible;
z-index: 2;

 .selectS {
    width: 100% ;
    /* position: absolute; */
    right: 0;
    z-index: 10px;
 }
 
 select {
    display: none;
  }
   
}



.groupInput3 {
display: flex;
width: 100%;
align-items: flex-start;
position: relative;
overflow: visible;
z-index: 2;

 .selectS {
    width: 100% ;
    position: absolute;
    right: 0;
    z-index: 10px;
 }
 
 select {
    display: none;
 }
}

@media only screen and (max-width:400px ){
    .groupInput  {
        display: flex;
        width: 100%;
        div:nth-child(2){
            width: calc(100% - 130px);
            margin-left: 10px;
        }
        div:nth-child(1){
            width: 130px;
            /* margin-left: 10px; */
        }
    }
}

@media only screen and (max-width:370px ){
    font-size: .6rem;
    .groupInput  {
        display: flex;
        width: 100%;
        div:nth-child(2){
            width: calc(100% - 110px);
            margin-left: 10px;
        }
        div:nth-child(1){
            width: 110px;
            /* margin-left: 10px; */
        }
    }
}

`

export const Form = styled.form`
display: flex;
flex-direction: column;
margin-top: 3rem;
width: 80%;
max-width: 800px;
justify-content: center;
`

export const Button = styled.button`
height: 40px;
background-color: ${({theme}) => theme.color.primary};
color: #fff;
border: none;
padding: 0 30px;
font-size: 21px;
border-radius: 51px;
margin-top: 7rem;
`

export const Paragraph = styled.p`
    color: red;
    /* background-color: black; */
    position: relative;
    top: 80px;
    /* z-index: 10; */

`
