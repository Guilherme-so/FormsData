import { useRouter } from 'next/router'
import React from 'react'
import { Container, Form ,Button} from '../styles/criadoSucesso'

function CriadoSucesso() {
const router = useRouter()

    const handleSend = (e: any) => {
        e.preventDefault()
        router.push('/')
    }

  return (
    <Container>
    <h1>Usuário criado com sucesso</h1>
    <Form>
        <Button type='submit' className='fisrt1'>Copiar</Button>
        <Button type='submit' onClick={handleSend}>Enviar</Button>
    </Form>
</Container>
  )
}

export default CriadoSucesso