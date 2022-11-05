import React,{FormEvent, FormEventHandler, useContext, useState} from 'react'
import Link from 'next/link'
import { InputFile } from '../Inputs'
import { Button, DivImage, Info, Wrapper } from './styled'
import {GlobalContext} from "../Context/index"

function ExameAdmissional() {
  const [exameAdmissional, setExameAdmissional] = useState()
  const context = useContext(GlobalContext)

  //@ts-ignore
  const {switchExame} = context
  
  return (
    <Wrapper>

        <Info>
        <h2>Agora faça o envio do <br />
          seu exame admissional
        </h2>
        
        <InputFile  className="inputFile" value={exameAdmissional} onChange={(e:any) => setExameAdmissional(e.target.value)}>
          {exameAdmissional ? exameAdmissional : (
          <span>Exame Admissional</span>
         )}
        </InputFile>
        
        <Link href={'/concluidoEnvioExameAdmissional'} passHref> 
        <Button>Enviar</Button>
        </Link>
        </Info>
        
        <DivImage>
        <img src="/images/foguete.png" alt="foguete"/>
        </DivImage>
    </Wrapper>
  )
}

export default ExameAdmissional