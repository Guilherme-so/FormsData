import Link from "next/link";
import React from "react";
import { Wrapper,Info, Button,DivImage} from "../styles/bemVindoAEquipe";

function BemVindoaEquipe() {
  return (
    <Wrapper>
      <Info>
        <h1>Parabéns!</h1>
        <h3>
          Agora você faz parte da equipe <br />
          GetHash! <br />
          Nas próximas telas vamos passar as <br />
          instruções para que você configure sua <br />
          máquina para trabalho.
        </h3>
        <Link href="/instrucoes" passHref>
          <Button>Vamos lá!</Button>
        </Link>
      </Info>

      <DivImage>
        <img src="/images/foguete.png" alt="foguete" />
      </DivImage>
    </Wrapper>
  );
}

export default BemVindoaEquipe;
