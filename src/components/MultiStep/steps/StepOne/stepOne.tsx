import React, { useState } from "react";
import { useRouter } from "next/router";

import {
  Button,
  Container,
  // ContainerConteudo,
  // Introducao,
  Main,
  WrapperButton,
} from "./styled";
import { IoLogoApple, IoLogoWindows } from "react-icons/io";
// import { FcLinux } from "react-icons/fc";
import Image from "next/image";

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
              <div className="containerInfoParent">
                <div className="sistemaLogo">
                  <p>
                    <IoLogoWindows className="logoConteudo" color="white" />
                  </p>
                  <p className="windowsName">Windows</p>
                </div>

                <div className="containerInfo">
                  <div className="contentDiv1">
                    <p>
                      Clique no <br />
                      botão <br />
                      “windows” no <br />
                      canto <br />
                      inferior <br />
                      esquerdo da <br />
                      tela
                    </p>
                    <img
                      src="/images/1--clique-no-botao-windows-no-canto-inferior-esquerdo 1.png"
                      alt="click no butao windows"
                      // height={136}
                      // width={141}
                      // layout="intrinsic"
                    />
                  </div>
                  <div className="contentDiv2">
                    <p>
                      Clique na
                      <br />
                      foto do <br />
                      usuário
                    </p>
                    <img
                      src="/images/2-clique-na-foto-do-usuario- 1.png"
                      alt="click na foto do usuario"
                      // height={220}
                      // width={150}
                    />
                  </div>
                </div>
                <div className="containerInfo">
                  <div className="contentDiv3">
                    <p>
                      Clique em <br />
                      Alterar <br />
                      configurações <br />
                      da conta” <br />
                    </p>
                    <img
                      src="/images/3-clique-em-alterar-configuracoes-da-conta02 1.png"
                      alt="click em alterar configuracoes"
                      // height={184}
                      // width={130}
                    />
                  </div>
                  <div className="contentDiv4">
                    <p>
                      Clique em <br />
                      Familia e <br />
                      outros <br />
                      usuários
                    </p>
                    <img
                      src="/images/4--clique-em-familia-e-outros-usuarios02 1.png"
                      alt="click em familia e outros usuarios"
                      // height={220}
                      // width={150}
                    />
                  </div>
                </div>

                <div className="containerInfo">
                  <div className="contentDiv5">
                    <p>
                      Clique em <br />
                      “adicionar <br />
                      outra <br />
                      pessoa a <br />
                      este PC”
                    </p>
                    <img
                      src="/images/5--clique-em-adicionar-outra-pessoa-a-este-PC02 1.png"
                      alt="Clique em adicionar outra pessoa a este PC"
                      // height={200}
                      // width={150}
                    />
                  </div>
                  <div className="contentDiv6">
                    <p>
                      Na nova janela, clique em <br />
                      “não tenho as informações <br />
                      de entrada dessa pessoa”
                    </p>
                    <img
                      src="/images/6--na-nova-janela-que-abrir,-clique-em-nao-tenho-as-informacoes-de-entrada-dessa-pessoas02 1.png"
                      alt="Na nova janela, clique em
                      não tenho as informações
                      de entrada dessa pessoa"
                      // height={200}
                      // width={230}
                      // layout={"responsive"}
                    />
                  </div>
                </div>

                <div className="containerInfo">
                  <div className="contentDiv7">
                    <p>
                      Clique em “Adicionar um <br />
                      usuário sem uma conta da <br />
                      Microsoft”
                    </p>
                    <img
                      src="/images/7--em-seguida,-clique-em-adiciona-um-usuario-sem-conta-da-microsoft02 1.png"
                      alt="Clique em Adicionar um usuário sem uma conta da Microsoft"
                      // height={200}
                      // width={150}
                    />
                  </div>
                  <div className="contentDiv8">
                    <p>
                      Em seguida adicione um <br />
                      nome e senha para o usuário <br />
                      de trabalho
                    </p>
                    <img
                      src="/images/8--em-seguida-adiciona-um-nome-e-uma-senha-(crie-uma-senha-de-pelo-menos-6-digitos-e-nao-utilize-data-de-aniversario,-etc)02 1.png"
                      alt="Em seguida adicione um nome e senha para o usuário de trabalho"
                      // height={200}
                      // width={230}
                    />
                  </div>
                </div>

                <div className="containerInfo">
                  <div className="contentDiv9">
                    <p>
                      Pronto! <br />
                      Seu usuário de trabalho já <br />
                      foi criado e está na lista de <br />
                      usuários do sistema
                    </p>
                    <img
                      src="/images/9--pronto,-seu-usuario-ja-foi-criado-e-esta-na-lista-de-usuario-do-sistema02 1.png"
                      alt="Clique em Adicionar um usuário sem uma conta da Microsoft"
                      // height={200}
                      // width={150}
                    />
                  </div>
                  <div className="contentDiv10">
                    <p>
                      Para acessar seu usuário de <br />
                      trabalho:
                    </p>
                    <div className="contentBody">
                      <ul>
                        <li>
                          Clique no <br />
                          botão <br />
                          “windows” no <br />
                          canto <br />
                          inferior <br />
                          esquerdo
                        </li>
                        <li>
                          Clique na <br />
                          foto <br />
                          do usuário
                        </li>
                        <li>
                          Clique no <br />
                          usuário de <br />
                          trabalho que <br />
                          você criou e <br />
                          preencha <br />
                          suas <br />
                          credenciais
                        </li>
                      </ul>
                      <img
                        src="/images/10-PAR~102 1.png"
                        alt="Em seguida adicione um nome e senha para o usuário de trabalho"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="containerInfoParent">
                <div className="sistemaLogo">
                  <p>
                    <IoLogoApple className="logoConteudo" color="white" />
                  </p>
                  <p>Mac</p>
                </div>

                <div className="containerInfo">
                  <div className="contentmac1">
                    <p>Abra as preferências do <br />
                     sistema na barra do Finder</p>
                    <img
                      src="/images/barra-mec.png"
                      alt="barra mec"
                      // height={136}
                      // width={141}
                      // layout="intrinsic"
                    />
                  </div>
                  <div className="contentmac2">
                    <p>
                      Clique em
                      <br />
                      Usuários <br />
                      e <br />
                      grupos
                    </p>
                    <img
                      src="/images/mac-2.png"
                      alt="mac 2"
                      // height={220}
                      // width={150}
                    />
                  </div>
                </div>

                <div className="containerInfo">
                  <div className="contentmac3">
                    <p>
                    Clique no cadeado para poder <br />
                    fazer alterações nessa área, <br />
                    é necessário inserir a senha
                    </p>
                    <img
                      src="/images/mac-3.png"
                      alt="mac 3"
                      // height={136}
                      // width={141}
                      // layout="intrinsic"
                    />
                  </div>
                  <div className="contentmac4">
                    <p>
                    Em seguida clique no ícone de <br />
                    “+” para adicionar um novo usuário
                    </p>
                    <img
                      src="/images/mac-4.png"
                      alt="mac 4"
                      // height={136}
                      // width={141}
                      // layout="intrinsic"
                    />
                  </div>
                </div>
                <div className="containerInfo">
                  <div className="contentmac5">
                    <p>
                    Escolha a categoria “padrão”
                    </p>
                    <img
                      src="/images/mac-5.png"
                      alt="mac 5"
                      // height={136}
                      // width={141}
                      // layout="intrinsic"
                    />
                  </div>
                  <div className="contentmac6">
                    <p>
                    Crie um nome e senha para <br />
                    seu usuário de trabalho e <br />
                    clique em “Criar Usuário”
                    </p>
                    <img
                      src="/images/mac-6.png"
                      alt="mac 6"
                      // height={136}
                      // width={141}
                      // layout="intrinsic"
                    />
                  </div>
                </div>

                <div className="containerInfo">
                  <div className="contentmac7">
                    <p>
                    Para configurar a troca rápida <br />
                     de usuário na central de <br />
                      controle
                      <ul>
                        <li>escolha o menu Apple apple</li>
                        <li>clique em “Ajustes do Sistema”</li>
                        <li>clique em “Central de Controle”</li>
                        <li>Vá até “Troca Rápida de Usuário”</li>
                        <li>Ative “Mostrar na Central de controle”</li>
                      </ul>                      
                    </p>
                  </div>

                  <div className="contentmac8">
                    <p>
                    Acesse o seu usuário de <br />
                    trabalho por meio da “Central <br />
                    de Controle”
                    <ul>
                      <li>Na barra de menus clique na “Central de Controle” </li>
                      <li>Clique no ícone ou nome de usuário de trabalho escolhido.</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </div>
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
