import React from "react";
import { IoLogoApple } from "react-icons/io";

interface IMacSystem {
  setMac: React.Dispatch<React.SetStateAction<boolean>>;
  mac: boolean;
}

function MacSystem({ setMac, mac }: IMacSystem) {
  return (
    <div className="containerInfoParent">
      <div className="sistemaLogo" onClick={() => setMac(!mac)}>
        <p>
          <IoLogoApple className="logoConteudo" color="white" />
        </p>
        <p>Mac</p>
      </div>

      <div className="containerInfo">
        <div className="contentmac1">
          <p>
            Abra as preferências do <br />
            sistema na barra do Finder
          </p>
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
            fazer alterações nessa área, <br />é necessário inserir a senha
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
          <p>Escolha a categoria “padrão”</p>
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
  );
}

export default MacSystem;
