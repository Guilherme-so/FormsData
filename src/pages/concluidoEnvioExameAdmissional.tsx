import React from "react";
import Link from "next/link";
import {Button,DivImage,Info,Wrapper,} from "../styles/concluidoEnvioExameadmissional";

function ConcluidoEnvioExameAdmissional() {
  return (
    <Wrapper>
      <Info>
        <h1>Parabéns!</h1>
        <h3>
          Agora que você finalizou o envio de <br />
          documentos e exame admissional é só <br />
          aguardar o contato do seu gestor.
        </h3>
        <Link href="/bemVindoaEquipe" passHref>
          <Button>Inicio</Button>
        </Link>
      </Info>

      <DivImage>
        <img src="/images/foguete.png" alt="foguete" />
      </DivImage>
    </Wrapper>
  );
}

export default ConcluidoEnvioExameAdmissional;
