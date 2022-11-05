import styled from "styled-components";



export const StyledInputs = styled.div<{options?: boolean}>`
    margin-bottom: 20px;


    input, div {
        padding: 25px;
        width: 100%;
        border: none;
        outline: none;
        background-color: #F6F6F6;
        color: ${({theme}) => theme.fontColor};
        font-size: 1.2rem;
        font-weight: 500;
        border-radius: 20px;
    }

    div{
        width: 100%;
        height: 100%;
        padding: 0;
    }
    
    & > div{
    position: relative;
    display: flex;
    flex-direction: column;
    /* height: ${({options}) => options? "200px": 'auto'}; */

}

.options{
    width: 100%;
    height: 120px;
    display: ${({options}) => options?'flex': 'none' };
    flex-direction: column;
    position: absolute;
    top: 40px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
width: 0.4em
}
::-webkit-scrollbar-thumb {
background-Color: #626262;
border-radius: 10px;
}

}
.option, p {
    width: 100%;
    padding: 10px 0;
    text-align: center;
    cursor: pointer;

}

p {
height: 70px;
display: flex;
justify-content: space-between;
padding: 10px  20px;
}

`

export const InputFileContainer = styled.div`
    max-width: 800px;
    width: 100%;
 
    input[type="file"] {
    display: none;
 }

 label {
    display: flex;
    justify-content: space-between;
    background-color: #F6F6F6;
    color: #686868;
    height: 60px;
    padding: 0 35px;
    border-radius: 35px;
    margin-bottom: 25px;

    h3{
        font-weight: 500;
    }

    .subTitle{
        font-size: small;
    }
 }
`