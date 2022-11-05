import styled from "styled-components"


export const Container = styled.div`
max-width: 800px;
width: 90%;
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
margin-top: 3rem;

.inputSmt {
 width: 100%;
}

h1 {
    color: ${({theme}) => theme.color.primary}
}

.groupInput{
display: flex;
width: 100%;
/* padding: 25px 20px 20px 20px; */
justify-content: center;
align-items: center;

div:nth-child(2){
    width: calc(100% - 150px);
    /* margin-left: 10px; */
    height: 30px;
}
div:nth-child(1){

    width: 150px;
    /* overflow: hidden; */
    margin-right: 10px;
    z-index: 10;
 }
}


.groupInput3 {
        display: flex;
        width: 100%;
        align-items: flex-start;
        position: relative;
        overflow: visible;
        padding: 0;
        margin: 0;
        z-index: 2; 

        & > div:nth-child(2){
            max-width: calc(100% - 125px);
            margin-left: 10px;
            flex-direction: end;
            /* flex-direction: flex-end; */
        }

        .selectS {
            width: 125px;
            position: absolute;
            right: 0;
            font-size: 40px;

            /* margin-right: 30px; */
            height: 55px;
            
            /* overflow: hidden;
            margin-bottom: 16px;
            padding: 20px;
                border: none;
                outline: none;
                background-color: #F6F6F6;
                color: ${({theme}) => theme.fontColor};
                font-size: 1.2rem;
                font-weight: 500;
                border-radius: 20px; */
        }
 
        select {
            display: none;
        }

        p {
            height: 70px;
        }
    }



@media only screen and (max-width: 600px){
    margin-top: 2rem;
    
    h1{
        font-size: larger;
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

@media only screen and  (max-width:600px){
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

@media only screen and  (max-width:600px){
    margin-top: 1rem;
}
`

export const Paragraph = styled.p `
padding: 0;
margin-bottom: 15px;
margin-left: 40px;
display: flex;
width: 100%;
color: red;

@media  only screen and (max-width: 500px){
    font-size: small;
    margin-bottom: 10px;
    max-width: 500px;
}
`