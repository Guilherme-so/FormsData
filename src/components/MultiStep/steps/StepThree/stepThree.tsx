import { useRouter } from 'next/router'
import React from 'react'
import { Button, Container, ContainerConteudo, Introducao, WrapperButton } from './styled'

function StepThree() {
  const router = useRouter()

  function prevHandler(){
    router.push("/instrucoes/?parte=2")
  }

  function nextHandler(){
    router.push("/instrucoes/?parte=4")
  }


  return (
    <Container>

      <Introducao>
        <ContainerConteudo>
        <p className='listItem'>No site do Office fazer download e instalação do pacote Office</p>

        <div className='installOficerWrapper'>
          <div className='oficerInstructions'>
            <p>Na página inicial, selecione <br />
            “Instalar o Office”</p>

            <p>Selecione “Aplicativos do <br />
            Office 365” para iniciar a instalação</p>
          </div>

          <img src="/images/01 passo office 1.png" alt="passo ofice" />
        </div>

        <p className='listItem'>Instalação do Office 365</p>

        <div className='installOficerWrapper'>
          <div className='oficerInstructions'>
            <p>
            Após o download clique no <br />
            aplicativo e selecione <br />
            executar
            </p>

            <p>Quando a instalação for <br />
            concluída essa tela aparecerá</p>
          </div>

          <div className='wrapperImg'>
            <img src="/images/02 passo office 1.png" alt="passo ofice 2" />
            <img src="/images/03 passo office 1.png" alt="passo ofice 3" />
          </div>

          <p className='moreInfo'>Para mais informações sobre a instalação do Office 365 acesse o 
            <a className='link' target="_blank"  rel="noreferrer" href="https://support.microsoft.com/pt-br/office/baixe-e-instale-ou-reinstale-o-microsoft-365-ou-o-office-2021-em-um-computador-ou-mac-4414eaaf-0478-48be-9c42-23adc4716658">
             link
            </a>
          </p>
        </div>



        <p className='listItem'>Se o Teams não for instalado junto com o pacote Office fazer <br />
        download e instação do Teams</p>

        <p >
          <a className='tutorDownload' target="_blank"  rel="noreferrer" href="https://support.microsoft.com/pt-br/office/instalar-o-microsoft-teams-agora-3b159754-3c26-4952-abe7-57d27f5f4c81">Tutorial de download e instalação do Teams</a>
        </p>
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
export default StepThree