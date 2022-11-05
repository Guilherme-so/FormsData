import { useRouter } from 'next/router'
import React, { FormEvent, useEffect, useState } from 'react'
import { getIdLogin, userId } from '../../services/user'
import { Input } from '../Inputs'

import { Button, Container, Form } from './styled'

type SigninProps = {
  rota: string 
}

function SignIn({rota}: SigninProps ) {
  const router = useRouter()
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")
  const [loginError,setLoginError] = useState('')


  
  const getAllData = async (id: any) => {
     await fetch('https://forms.api.apigethash.online/data/find/' + id)
     .then((res) => res.json())
     .then(async(data) =>{
            //ver se o obj tem coisa dentro
            const isObjEmpty = Object.keys(data).length === 0
            //console.log(isObjEmpty)
        
            if(isObjEmpty === true){
              //console.log("vazio")
              router.push("/termos")
            }else if(isObjEmpty === false) {
              //console.log("tem coisa dentro")
              router.push("/candidato")
            }
     })
  }


  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
      await fetch('https://authorization.api.apigethash.online/auth/login',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: usuario,
        password: password
      })
    })
    .then((res) => res.json())
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(res))
      return res
    })
    .then(async(data) => {
      if(data.role === '4'){
        const id = await getIdLogin()
        await getAllData(id)

      } 
      else if(data.role === '1') {
        router.push('/gestor')
      }
      else{
        setUsuario("")
        setPassword("")
        setLoginError("Usuario ou senha incorreto!")
        localStorage.removeItem('user')
      }
    })
  }


  

  return (
    <Container>
    <h1>Login</h1>
    <Form onSubmit={handleLogin}>
        <Input className='singleInput' type='text' placeholder='Usuarío' required
        value={usuario}
        onChange={(e: any) => setUsuario(e.target.value)}
        />
        <Input className='singleInput' type='password' placeholder='Senha'
                value={password}
            onChange={(e: any) => setPassword(e.target.value)}
        />
    <h3>{loginError && loginError}</h3>
        <Button type='submit'>Entrar</Button>
    </Form>
</Container>
  )
}

export default SignIn