import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import { Button, Container } from '../styles/termos'

function Termos() {
    const router = useRouter()

    const clickHandler = (e: any) => {
        e.preventDefault()
        router.push('/formulario')
    }

  return (
    <Container>
        <h2>Declaro que:</h2>
        <p>
        Estou ciente que meu usuario/dispositivo de trabalho (Computador e/ou celular coorporativo) estará sendo monitorado durante minhas atividades.<br/>
        <br/>
        São eles: <br/> 
        -Telas <br/>
        -Teclado <br/>
        -Mouse <br/>
        -Disco <br/>
        -Bluetooth <br/>
        -USB <br/>
        -CD/DVD-ROM <br/>
        -Placa de rede <br/>
        -Qualquer outro dispositivo conectado no computador <br/>
        <br/>
        Todos os arquivos gerados a partir do equipamento/usuário de trabalho <br/>
        -Acessos no browser <br/>
        -logs do sistema operacional <br/>
        -Tempo de inatividade de partes ou integralmente <br/>
        <br/>
        Todos os acessos concedidos a mim serão confidenciais Estou impedido de: <br/>
        -Compartilhar acessos a mim concedidos <br/>
        -Reter arquivos gerados parcialmente ou integralmente gerados em função das atividades/trabalho <br/>
        -Reter acessos em plataformas ou ambientes em quaisquer atividades de trabalho
        </p>
        <Button onClick={clickHandler}>Aceitar termos</Button>
    </Container>
  )
}

export default Termos