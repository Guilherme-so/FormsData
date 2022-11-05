import Image from 'next/image'
import React from 'react'
import { Container } from './styled'

function Footer() {
  return (
    <Container>
        <Image src="/images/logo-gethash.png" alt='footer' width={150} height={130}/>
    </Container>
  )
}

export default Footer