import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { IoLogoApple, IoLogoWindows } from "react-icons/io";
// import { FcLinux } from "react-icons/fc";
import {
  Button,
  Container,
  // ContainerConteudo,
  // Introducao,
  Main,
  WrapperButton,
} from "./styled";
import Windows from "./windows";
import MacSystem from "./mac";

const StepOne = () => {
  const router = useRouter();
  const [windows, setWindows] = useState(false);
  const [mac, setMac] = useState(false);

  function prevHandler() {
    router.push("/bemVindoaEquipe");
  }

  function nextHandler() {
    router.push("/instrucoes/?parte=2");
  }

  return (
    <Container>
      <Main>
        <div className="sistemasOperacionais">
          <p
            className={` paragrafoInicial ${
              windows || mac ? "paragrafoInicialHide" : ""
            }`}
          >
            Crie um usuário de trabalho conforme seu sistema operacional.
          </p>

          <div className={`${windows || mac == true ? "" : "paginaInicial"}`}>
            {windows ? (
              <Windows setWindows={setWindows} windows={windows} />
            ) : (
              <div className={`${mac === true ? "hideDIv" : ""}`}>
                <div
                  className="containerLogoInicial"
                  onClick={() => setWindows(!windows)}
                >
                  <p>
                    <IoLogoWindows className="logo" color="white" />
                  </p>
                  <p className="logoName">Windows</p>
                </div>
              </div>
            )}

            {mac ? (
              <MacSystem setMac={setMac} mac={mac} />
            ) : (
              <div className={`${windows === true ? "hideDIv" : ""}`}>
                <div
                  className="containerLogoInicial"
                  onClick={() => setMac(!mac)}
                >
                  <p>
                    <IoLogoApple className="logo" color="white" />
                  </p>
                  <p
                    style={{
                      color: "#502e88",
                      fontSize: "large",
                      fontWeight: 500,
                      marginLeft: "15px",
                    }}
                  >
                    Mac
                  </p>
                </div>
                <div className="imgtest"></div>
              </div>
            )}
          </div>
        </div>
      </Main>

      <WrapperButton>
        <Button color="#686868" onClick={prevHandler}>
          Retornar
        </Button>

        <Button
          color="white"
          style={{ backgroundColor: "#502E88" }}
          onClick={nextHandler}
        >
          Próximo
        </Button>
      </WrapperButton>
    </Container>
  );
};
export default StepOne;
