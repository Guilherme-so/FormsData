import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 50px auto;
  width: 100%;
  min-height: 100vh;
  justify-content: space-between;
`;

export const StyledCollaborator = styled.main`
  display: flex;
  align-self: flex-start;
  margin: 50px auto;
  width: 70%;
  justify-content: space-between;

  .dados {
    background-color: #ffffff;
    opacity: .9;
    padding: 20px;
    border-radius: 10px;
    width: 60%;

    .formulario {
      background-color: #ffffff;
      border-radius: 5px;
      border: 1px solid #3ab378;
      display: flex;
      justify-content: space-between;
      padding: 10px 10px;
      margin-bottom: 15px;

      button {
        border: none;
        background-color: #e3e3e3;
        padding: 5px;
        border-radius: 3px;
        color: #000000;
        font-weight: 500;
        cursor: pointer;
      }
    }
    .documentos {
      background-color: #ffffff;
      border-radius: 5px;
      border: 1px solid #3ab378;
      display: flex;
      justify-content: space-between;
      /* width: ; */
      padding: 10px 10px;
      margin-bottom: 15px;

      button {
        border: none;
        background-color: #e3e3e3;
        padding: 5px;
        border-radius: 3px;
        color: #000000;
        font-weight: 500;
        cursor: pointer;
      }
    }

    .onboarding {
      background-color: #ffffff;
      border-radius: 5px;
      border: 1px solid #3ab378;
      display: flex;
      justify-content: space-between;
      /* width: ; */
      padding: 10px 10px;

      button {
        border: none;
        background-color: #e3e3e3;
        padding: 5px;
        border-radius: 3px;
        color: #000000;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }

  .perfil {
    background-color: #ffffff;
    display: flex;
    border-radius: 10px;
    padding: 15px 20px;
    gap: 15px;
    align-self: flex-start;
    width: 30%;

    .detailProfile {

      p {
        color: #000000;
        font-weight: 500;
        margin-bottom: 6px;
        word-break: break-all;
      }

      span {
        color: #000000;
        font-weight: 300;
        opacity: 0.5;
      }
    }
  }
`;

export const FormDocs = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 0 auto;
  width: 70%;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 20px 40px;
  border-radius: 10px;
  padding-bottom: 50px;
  margin-bottom: 100px;

  .formulario {
    background-color: #f6f6f6;
    width: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    margin-bottom: 15px;
    cursor: pointer;

    .inputFileHidden{
      display: none;
      z-index: -10;
    }

    button {
      border: none;
      background-color: #e3e3e3;
      padding: 5px;
      border-radius: 3px;
      color: #000000;
      font-weight: 500;
      cursor: pointer;
    }

    .editar{
      border: none;
      padding: 5px;
      border-radius: 3px;
      font-weight: 400;
      cursor: pointer;
      background-color: #D04739;
      color: #ffffff;

      label {
        cursor: pointer;
        
      }
    }

    .salvar {
      border: none;
      padding: 5px;
      border-radius: 3px;
      font-weight: 400;
      cursor: pointer;
      
      background-color: #3ab378;
      color: #ffffff;
    }
  }
`;

export const  ButtonsWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 25px;
margin-right: 10px;
`


export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 0 auto;
  width: 70%;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 20px 40px;
  border-radius: 10px;
  padding-bottom: 50px;
  margin-bottom: 100px;

  .userAbout {
    width: 100%;
    background-color: #f6f6f6;
    border: none;
    height: 50px;
    border-radius: 20px;
    padding: 0 30px;
    font-size: large;
    font-weight: 500;
    color: #686868;
    margin-bottom: 16px;
  }

    .userAbout:focus, textarea:focus {
        border: 1px solid #3ab378;
        outline: none;
    }

  .pix {
    width: 100%;
    background-color: #f6f6f6;
    border: none;
    height: 50px;
    border-radius: 20px;
    padding: 0 30px;
    font-size: large;
    font-weight: 500;
    color: #686868;
    margin-top: 14px;
    margin-bottom: 16px;
  }

  .pix:focus, textarea:focus {
        border: 1px solid #3ab378;
        outline: none;
    }

  .inputDuplo {
    display: flex;
    width: 100%;
    border: none;
    height: 50px;
    border-radius: 20px;
    gap: 15px;
    margin-bottom: 16px;
    margin-top: 10px;

    input:nth-child(1) {
      width: calc(100% - 150px);
      width: 100%;
      background-color: #f6f6f6;
      border: none;
      height: 50px;
      border-radius: 20px;
      padding: 0 30px;
      font-size: large;
      font-weight: 500;
      color: #686868;
      margin-bottom: 14px;
    }

    input:nth-child(1):focus, textarea:focus {
        border: 1px solid #3ab378;
        outline: none;
    }


    input:nth-child(2) {
      width: 150px;
      margin-left: 10px;
      background-color: #f6f6f6;
      border: none;
      height: 50px;
      border-radius: 20px;
      padding: 0 30px;
      font-size: large;
      font-weight: 500;
      color: #686868;
      margin-bottom: 14px;
    }
    input:nth-child(2):focus, textarea:focus {
        border: 1px solid #3ab378;
        outline: none;
    }

  }

  .inputDuploBairro {
    display: flex;
    width: 100%;
    border: none;
    height: 50px;
    border-radius: 20px;
    gap: 15px;
    margin-bottom: 16px;
    /* margin-top: 15px; */

    input:nth-child(1) {
      width: calc(100% - 150px);
      width: 100%;
      background-color: #f6f6f6;
      border: none;
      height: 50px;
      border-radius: 20px;
      padding: 0 30px;
      font-size: large;
      font-weight: 500;
      color: #686868;
      margin-bottom: 14px;
    }
    input:nth-child(1):focus, textarea:focus {
        border: 1px solid #3ab378;
        outline: none;
    }

    input:nth-child(2) {
      width: 150px;
      margin-left: 10px;
      background-color: #f6f6f6;
      border: none;
      height: 50px;
      border-radius: 20px;
      padding: 0 30px;
      font-size: large;
      font-weight: 500;
      color: #686868;
      margin-bottom: 14px;
    }
    input:nth-child(2):focus, textarea:focus {
        border: 1px solid #3ab378;
        outline: none;
    }
  }

  .inputDuploAgenConta {
    display: flex;
    width: 100%;
    border: none;
    height: 50px;
    border-radius: 20px;
    gap: 15px;
    margin-bottom: 16px;
    margin-top: 10px;

    input:nth-child(2) {
      width: calc(100% - 200px);
      width: 100%;
      background-color: #f6f6f6;
      border: none;
      height: 50px;
      border-radius: 20px;
      padding: 0 30px;
      font-size: large;
      font-weight: 500;
      color: #686868;
      margin-bottom: 14px;
    }
    input:nth-child(2):focus, textarea:focus {
        border: 1px solid #3ab378;
        outline: none;
    }

    input:nth-child(1) {
      width: 200px;
      /* margin-left: 10px; */
      background-color: #f6f6f6;
      border: none;
      height: 50px;
      border-radius: 20px;
      padding: 0 30px;
      font-size: large;
      font-weight: 500;
      color: #686868;
      margin-bottom: 15px;
    }
    input:nth-child(1):focus, textarea:focus {
        border: 1px solid #3ab378;
        outline: none;
    }
  }

  .groupInput3 {
    display: flex;
    width: 100%;
    align-items: flex-start;
    position: relative;
    overflow: visible;
    height: 5px;
    /* margin-top: 14px; */
    margin-bottom: 50px;
    /* gap: 10px; */

    input,
    div {
      height: 50px;
      border-radius: 20px;
      padding: 0 30px;
      font-size: large;
      font-weight: 500;
      color: #686868;
      /* margin-bottom: 14px; */
    }

    & > div:nth-child(1) {
      padding: 0;
      width: calc(100% - 178px);
      /* margin-left: 0px; */
    }

    .selectS {
      width: 210px;
      position: absolute;
      right: -30px;

      /* overflow: hidden;
    margin-left: 10px;
    margin-bottom: 16px;
    padding: 20px;
        border: none;
        outline: none;
        background-color: #F6F6F6;
        color: ${({ theme }) => theme.fontColor};
        font-size: 1.2rem;
        font-weight: 500;
        border-radius: 20px; */
    }

    select {
      display: none;
    }
  }

  .groupInputBanco {
    display: flex;
    width: 100%;
    align-items: flex-start;
    position: relative;
    overflow: visible;
    z-index: 2;
    /* margin-bottom: 16px; */
    /* margin-top: 30px; */

    input,
    div {
      height: 50px;
      border-radius: 20px;
      padding: 0;
      font-size: large;
      font-weight: 500;
      color: #686868;
      /* margin-bottom: 14px; */
    }

    .selectS {
      width: 100%;
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

    input,
    div {
      height: 50px;
      border-radius: 20px;
      padding: 0;
      font-size: large;
      font-weight: 500;
      color: #686868;
      /* margin-bottom: 14px; */
    }

    .selectS {
      width: 100%;
      position: absolute;
      right: 0;
      z-index: 10px;
    }

    select {
      display: none;
    }
  }
`;


export const Button = styled.button`
display: flex;
align-self: flex-end;
border: none;
color: #000000;
font-weight: 500;
background-color: #f6f6f6;
padding: 10px 40px;
border-radius: 10px;
margin-top: 2rem;
`