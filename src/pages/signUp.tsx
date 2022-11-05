import { useRouter } from 'next/router'
import React, {useContext} from 'react'
import { Input } from '../components/Inputs'
import { Button, Container, Form } from '../styles/signUp'
import ReactSwitch from "react-switch"
import {GlobalContext} from "../components/Context/index"


function CriarUsuario() {
  const router = useRouter()
  const switchContext = useContext(GlobalContext)

    //  @ts-ignore
  const {switchExame, setSwitchExame} = switchContext

  const submitHandler = (e: any) => {
    e.preventDefault()
    router.push('/criadoSucesso')
  }

  return (
    <Container>
        <h1>Criar um usuário</h1>
        <Form onSubmit={submitHandler}>
            <Input className='singleInput' type='email' placeholder='E-mail' maxLength={40} required/>
            <Input className='singleInput' type='text' placeholder='Usuário' required/>
            <Input className='singleInput' type='password' placeholder='Senha'/>


            <div className='singleInput1'>
              <ReactSwitch checked={switchExame} onChange={() => setSwitchExame((prev:any) => !prev)}/>
              <span>Exame admissional obrigatorio</span>
            </div>            

            <Button type='submit'>Criar um usuário</Button>
        </Form>
    </Container>
   )
}

export default CriarUsuario