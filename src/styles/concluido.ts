import styled from "styled-components";

export const Wrapper = styled.div`
max-width: 1100px;
display: flex;
align-items: center;
margin: 0 auto;
margin-top: 5rem;
justify-content: space-between;
padding: 0 40px;

@media only screen and (max-width: 860px) {
    padding: 0 20px;
    justify-content: baseline;
}


@media only screen and (max-width: 500px) {
    padding: 0 20px;
}

@media only screen and (max-width: 380px) {
    margin-top: 3rem;
}
`

export const Info = styled.div`
display: flex;
flex-direction: column;
align-items: start;
margin: 0;
padding: 0;

h1 {
    height: 32px;
    overflow: hidden;
    font-weight: bold;
    color: ${({theme}) => theme.color.primary };
}

h3{
    color: #686868;
    padding-top: 30px;
    padding-bottom: 30px;
    line-height: 22px;
    font-weight: normal;
}

p {
    color: gray;
    padding-bottom: 30px;

}
/* 
@media only screen and (max-width: 800px) {
    h3{
        max-width: 200px;
    }
} */

@media only screen and (max-width: 476px ){
    h1{
        font-size: x-large;
    }

    h3{
    max-width: 150px;
    }   
}

@media only screen and (max-width: 380px ){
    h1{
        font-size: x-large;
    }

    h3{
    max-width: 140px;
    }   
}

@media only screen and (max-width: 320px ){
    h1{
        font-size: larger;
    }
    
    p {
    padding-bottom: 20px;
    }

    h3{
    max-width: 140px;
    padding-top: 20px;
    padding-bottom: 20px;
    }   
}


@media only screen and (max-width: 290px ){
    h1{
        font-size: larger;
    }   
    p {
    padding-bottom: 20px;
    }

    h3{
    max-width: 120px;
    padding-top: 20px;
    padding-bottom: 20px;
    }   
}


`
export const DivImage = styled.div`
margin-left: 40px;

img {
    width: 518px;
    height: 400px;
}

@media only screen and (max-width: 1100px){
    margin-left: 0;
    img {
        width: 400px;
        height: 300px;
    }
}


@media only screen and (max-width: 860px){
    margin-left: 0;
    /* position: absolute;
    top: 80px;
    right: 0;
    z-index: -1; */

    img {
        width: 300px;
        height: 200px;
    }
}


@media only screen and (max-width: 800px){
    /* margin-left: 0;
    position: absolute;
    top: 140px;
    right: 0;
    z-index: -1; */

    img {
        width: 300px;
        height: 200px;
    }
}



@media only screen and (max-width: 420px){
    margin-left: 0;
    position: absolute;
    top: 140px;
    right: 0;
    z-index: -1;
    margin-left: 20px;

    img {
        width: 300px;
        height: 200px;
    }
}



@media only screen and (max-width: 380px){
    margin-left: 0;
    position: absolute;
    top: 110px;
    right: 0;
    z-index: -1;
    margin-left: 20px;

    img {
        width: 250px;
        height: 200px;
    }
}

@media only screen and (max-width: 320px){
    margin-left: 0;
    position: absolute;
    top: 110px;
    right: 0;
    z-index: -1;
    margin-left: 20px;

    img {
        width: 220px;
        height: 180px;
    }
}

@media only screen and (max-width: 290px){
    margin-left: 0;
    position: absolute;
    top: 120px;
    right: 0;
    z-index: -1;
    margin-left: 20px;

    img {
        width: 200px;
        height: 150px;
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
`


