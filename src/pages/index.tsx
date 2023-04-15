import type { NextPage } from 'next'
import {useRouter} from "next/router"
import SignIn from '../components/SignIn'
import DadosPessoais from '../components/DadosPessoais'
import Formulario from './formulario'

const Home: NextPage = () => {
  
  return (
    // <SignIn rota="/termos" />
    <Formulario/>
  )
}

export default Home
