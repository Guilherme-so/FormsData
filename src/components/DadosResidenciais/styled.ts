import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-top: 3rem;
  overflow: visible;

  h1 {
    color: ${({ theme }) => theme.color.primary};
  }

  .inputSolo {
    width: 100%;
  }

  .groupInput {
    display: flex;
    width: 100%;
    div:nth-child(1) {
      width: calc(100% - 150px);
    }

    div:nth-child(2) {
      width: 150px;
      margin-left: 10px;
    }
  }

  .groupInputAp {
    display: flex;
    width: 100%;

    div:nth-child(1) {
      width: calc(100% - 170px);
    }

    div:nth-child(2) {
      width: 170px;
      overflow: hidden;
      margin-left: 10px;
    }
  }

  .groupInput3 {
    display: flex;
    width: 100%;
    align-items: flex-start;
    position: relative;
    overflow: visible;

    & > div:nth-child(1) {
      width: calc(100% - 200px);
      /* margin-left: 10px; */
    }

    .selectS {
      width: 190px;
      position: absolute;
      right: 0;

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

  @media only screen and (max-width: 500px) {
    .groupInput {
      display: flex;
      width: 100%;
      div:nth-child(1) {
        width: calc(100% - 110px);
      }
      div:nth-child(2) {
        width: 140px;
        margin-left: 10px;
      }
    }

    .groupInputAp {
      display: flex;
      width: 100%;

      div:nth-child(1) {
        width: calc(100% - 110px);
        /* margin-left: 10px; */
      }
      div:nth-child(2) {
        width: 140px;
        overflow: hidden;
        margin-left: 10px;
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

      & > div:nth-child(1) {
        width: calc(100% - 130px);
        margin-right: 20px;
      }

      .selectS {
        width: 120px;
        position: absolute;
        right: 0;
        margin-left: 20px;
        height: 55px;

        /* overflow: hidden;
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
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  width: 80%;
  max-width: 800px;
  justify-content: center;
  overflow: visible;
`;

export const Button = styled.button`
  height: 40px;
  background-color: ${({ theme }) => theme.color.primary};
  color: #fff;
  border: none;
  padding: 0 30px;
  font-size: 21px;
  border-radius: 51px;
  margin-top: 2rem;
`;

export const Paragraph = styled.p`
  /* padding: 0;
margin-bottom: 15px;
margin-left: 40px;
display: flex;
width: 100%; */
  color: red;

  @media only screen and (max-width: 500px) {
    font-size: small;
    margin-bottom: 10px;
    max-width: 500px;
  }
`;
