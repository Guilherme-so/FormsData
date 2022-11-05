import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { Wrapper,Info, Button,DivImage, WrapperButton} from "../styles/instrucoesConcluido";

function InstrucoesConcluida() {
   const router = useRouter()



   function retornarHandler(){
    router.push("/instrucoes/?parte=4")
   }

  return (
    <Wrapper>
      <Info>
        <h1>Parabéns!</h1>
        <h3>
        Agora que você concluiu o passo á <br />
        passo mande um “Oi” no Teams para seu <br />
        gestor.
        </h3>

        <WrapperButton>
          <a href="https://teams.microsoft.com">
          <Button >
            Ok!
          </Button>
          </a>

          <Button onClick={retornarHandler} 
          style={{backgroundColor: "#F6F6F6", color: "#686868" }}
          >Retornar</Button>
        </WrapperButton>


      </Info>

      <DivImage>
        <img src="/images/foguete.png" alt="foguete" />
        {/* <Image className='imge' src="/images/foguete.png" alt="foguete" width={518} height={400} /> */}
      </DivImage>
    </Wrapper>
  );
}

export default InstrucoesConcluida;
