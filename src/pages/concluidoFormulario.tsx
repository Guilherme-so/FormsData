// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button, DivImage, Info, Wrapper } from '../styles/concluido'

function Concluido() {

  return (
    <Wrapper>
        <Info>
        <h1>Parabéns!</h1>
        <h3> 
            Uma parte já foi, agora faça o upload dos <br/>
            seus documentos para completar seu <br/>
            formulário..
        </h3>
        <Link href='/uploadDocumentos' passHref> 
        <Button>Iniciar Upload</Button>
        </Link>
        </Info>
        
        <DivImage>
        <img src="/images/foguete.png" alt="foguete"/>
        </DivImage>
    </Wrapper>
  )
}

export default Concluido