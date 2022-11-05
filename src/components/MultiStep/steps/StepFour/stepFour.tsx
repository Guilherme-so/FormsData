import React from 'react'
import { useRouter } from 'next/router'
import { Button, Container, ContainerConteudo, Introducao, WrapperButton } from './styled'

function StepFour() {
  const router = useRouter()

  function prevHandler(){
    router.push("/instrucoes/?parte=3")
  }

  function nextHandler(){
    router.push("/instrucoesConcluida")
  }


  return (
    <Container>

      <Introducao>
        <ContainerConteudo>
        <p className='listItem'>Faça login no Office e no Teams</p>

        <div className='loginTeams'>
          <p>Abra o Office e clique em <br />
          “Entrar”</p>
          <img src="/images/04 passo office 1.png" alt="login teams" />
        </div>

        <div className='loginTeams'>
          <p>Selecione a opção “Conta <br />
          corporativa ou de estudante”</p>
          <img src="/images/06 passo office 1.png" alt="login teams" />
        </div>

        <p className='listItem'>Insira suas informações de login e senha.</p>
        </ContainerConteudo>

      </Introducao>

      <WrapperButton>
        <Button 
        color="#686868"
        onClick={prevHandler}
        >Retornar</Button>

        <Button 
        color="white" 
        style={{backgroundColor: "#502E88"}}
        onClick={nextHandler}
        >Finalizar</Button>
      </WrapperButton>

    </Container>
  )
}

export default StepFour