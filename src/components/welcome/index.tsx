import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button, DivImage, Info, Wrapper } from './styled'

function WelcomePage() {

  return (
    <Wrapper>

    <Info>
      <h1>Boas vindas a GetHash</h1>
      <h3>Estamos felizes por vocẽ se juntar a nós, <br/>
        precisamos de algumas informações para <br/> 
        dar continuidade a sua admissão.</h3>
      <p>Preencha o formulário corretamente com os seus dados.</p>

      <Link href='/formulario/?parte=2' passHref> 
      <Button>Iniciar Formulário</Button>
      </Link>
    </Info>
    
    <DivImage>
    {/* width={518.61} height={402.34} layout={'fixed'} */}
      <img className='someImg' src="/images/foguete.png" alt="foguete" />
    </DivImage>
  </Wrapper>
  )
}

export default WelcomePage
