import type { NextPage } from 'next'
import {useRouter} from "next/router"
import SignIn from '../components/SignIn'

const Home: NextPage = () => {
  
  return (
    <SignIn rota="/termos" />
  )
}

export default Home
