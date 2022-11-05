import { useRouter } from 'next/router'
import React from 'react'
import { Button, Container, Introducao, Wrapper } from './styled'


function StepFive() {
  const router = useRouter()

  function prevHandler(){
    router.push("/instrucoes/?parte=4")
  }

  function nextHandler(){
    router.push("#")
  }


  return (
    <Container>

      <Introducao>
      <p>Crie um usuário de trabalho conforme seu sistema operacional.</p>

      </Introducao>

      <Wrapper>
        <Button 
        color="#686868"
        onClick={prevHandler}
        >Retornar</Button>

        <Button 
        color="white" 
        style={{backgroundColor: "#502E88"}}
        onClick={nextHandler}
        >Próximo</Button>
      </Wrapper>

    </Container>
  )
}

export default StepFive