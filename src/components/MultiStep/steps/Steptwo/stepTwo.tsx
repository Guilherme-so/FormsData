import React from 'react'
import { useRouter } from 'next/router'
import { Button, Container, ContainerConteudo, Introducao, WrapperButton } from './styled'

function StepTwo() {
  const router = useRouter()

  function prevHandler(){
    router.push("/instrucoes/?parte=1")
  }

  function nextHandler(){
    router.push("/instrucoes/?parte=3")
  }


  return (
    <Container>

      <Introducao>
        <ContainerConteudo>
        <p className='listItem'>Faça login no <a className='linkExterno' href="https://www.office.com" target="_blank" rel="noreferrer">Office 365</a> com seu e-mail de trabalho</p>
        <p className='listItem'>Crie uma nova senha.</p>
        <p className='listItem'>
          Baixe o Microsoft Authenticator no seu celular 
          <a className='linkExterno' href="https://play.google.com/store/apps/details?id=com.azure.authenticator&hl=pt_BR&gl=US" target="_blank" rel="noreferrer"> Android</a> 
          <a className='linkExterno' href="https://play.google.com/store/apps/details?id=com.azure.authenticator&hl=pt_BR&gl=US" target="_blank" rel="noreferrer"> IOS</a>
         </p>
        <p className='listItem'>Faça login no Microsoft Authenticator com seu e-mail de trabalho</p>
        <p className='listItem'>Habilite a autenticação de 2 fatores no Office</p>

        <ul>
          <li>Download & instalar o aplicativo Microsoft Authenticator para seu dispositivo móvel.</li>
          <li>Entre em seu painel de segurança da conta.</li>
          <li>Selecione Adicionar uma nova forma de entrar ou verificar e escolha Usar um aplicativo.</li>
          <li>Se você já instalou o aplicativo, selecione Avançar para exibir um código QR na tela.</li>
          <li>No aplicativo autenticador, selecione [três pontos] e depois + Adicionar conta.</li>
          <li>Escolha o tipo de conta e selecione Digitalizar um código QR.</li>
          <li>Digitalize o código mostrado na tela na etapa </li>
          <li>Selecione Concluir no PC para concluir a configuração.</li>  
        </ul>
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
        >Próximo</Button>
      </WrapperButton>

    </Container>
  )
}

export default StepTwo