import Layout from '../components/Layout'
import WelcomePage from '../components/welcome'
import DadosPessoais from '../components/DadosPessoais'
import DadosResidenciais from '../components/DadosResidenciais'
import DadosBancarios from '../components/DadosBancarios'
import { useRouter } from 'next/router'
import { NextPage } from 'next'

const Formulario: NextPage = () =>{
    const router: any = useRouter()?.query?.parte  || 1
    const parte:number = router !== undefined ? parseInt(router) : 1
  
    //console.log(parte)
return (
    <Layout>
      {parte == 1 && <WelcomePage/> }
      {parte == 2 && <DadosPessoais/> }
      {parte == 3 && <DadosResidenciais/> }
      {parte == 4 && <DadosBancarios /> }
    </Layout>
)
}

export default Formulario