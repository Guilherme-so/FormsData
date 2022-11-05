import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 50px auto;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
`;

export const StyledCollaborator = styled.main`
  display: flex;
  align-self: flex-start;
  margin: 50px auto;
  width: 80%;
  justify-content: space-between;
`;

export const Dados = styled.div`
  background-color: #ffffff;
  /* opacity: 0.9; */
  align-self: flex-start;

  padding: 20px;
  border-radius: 10px;
  width: 60%;

  .tabelaHeader {
    display: flex;
    justify-content: space-between;

    .title {
      h2 {
        color: #0f123f;
      }
    }

    .statusHint {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      span {
        color: #000000;
        font-size: small;
        font-weight: 500;
        opacity: 0.6;

        :nth-child(1)::before {
          content: "";
          width: 12px;
          height: 12px;
          display: inline-block;
          background-color: #3ab378;
          border-radius: 50%;
          margin-right: 5px;
        }

        :nth-child(2)::before {
          content: "";
          width: 12px;
          height: 12px;
          display: inline-block;
          background-color: #D04739;
          border-radius: 50%;
          margin-right: 5px;
        }
      }
    }
  }

  .statusNomeHeader{
    display: flex;
    /* grid-template-columns: repeat(3, 1fr); */
    justify-content: space-between;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    padding: 0 15px;

    .statusNome {
      font-weight: 600;
      font-size: small;
    }
  }

  .statusAbout {
    display: flex;
    /* grid-template-columns: repeat(3, 1fr); */
    justify-content: space-between;
    border: 1px solid #3AB378;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
    overflow: hidden;

    p {
      font-weight: 500;
    }

    span {
      color: #000000;
      font-weight: 500;
      opacity: .5;
    }

    .visualizar {
      background-color: #E3E3E3;
      color: #000000;
      font-weight: 500;
      font-size: medium;
      padding: 8px 30px;
      border: none;
      border-radius: 5px;
      cursor: pointer;

    }
  }

  .statusAboutInconpleto {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-content: center;
    border: 1px solid #D04739;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;

    p {
      font-weight: 500;
    }

    span {
      color: #000000;
      font-weight: 500;
      display: flex;
      /* justify-content: center; */
      align-items: center;
      opacity: .5;
    }

    button {
      display: flex;
      align-self: center;
      justify-content: center;
      align-items: center;
      margin: auto;
      /* max-width: 100px; */
      background-color: #E3E3E3;
      color: #000000;
      font-weight: 500;
      font-size: medium;
      padding: 8px 30px;
      border: none;
      border-radius: 5px;
      cursor: pointer;

    }
  }
`;

export const RightSide = styled.div`
display: flex;
flex-direction: column;
align-self: flex-start;
gap: 30px;
width: 30%;
`


export const Perfil = styled.div`
  background-color: #ffffff;
  display: flex;
  border-radius: 10px;
  padding: 15px 20px;
  gap: 15px;
  align-self: flex-start;
  width: 100%;

  .detailProfile {
    p {
      color: #000000;
      font-weight: 500;
      margin-bottom: 6px;
    }
    span {
      color: #000000;
      font-weight: 300;
      font-size: small;
      opacity: 0.5;
    }
  }
`;

export const GeradorDeAcessos = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 15px 20px;
  /* gap: 15px; */
  align-self: flex-start;
  width: 100%;

  .acesso {
    width: 100%;
    background-color: #ffffff ;
    border: 1px solid #E3E3E3;
    padding: 15px 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 13px;
    margin-bottom: 20px;
    cursor: pointer;

    span {
      color: #0F123F;
      font-weight: 500;
      font-size: large;
    }
  }

  .gerados{
    width: 100%;
    padding: 0px 30px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;

    button {
      background-color: #ffffff;
      color: #000000;
      padding: 8px ;
      font-weight: 600;
      font-size: medium;
      border: 2px solid #E3E3E3;
      border-radius: 15px;
      cursor: pointer;
    }
  }
`