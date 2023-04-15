import Link from "next/link"
import { useContext } from "react"
import { GlobalContext } from "../components/Context"
import { DivImage, Info, Wrapper,Button } from "../styles/concluidoUplaodDocs"


function ConcluidoUploadDocumentos() {
 const context = useContext(GlobalContext)

 
 //@ts-ignore
 const {switchExame} = context
 //console.log(switchExame)

 return (
    <Wrapper>
    <Info>
    <h1>Parabéns!</h1>
    <h3> 
    Agora que você finalizou o envio de <br /> 
    documentos é só aguardar o contato do <br />
     seu gestor.
    </h3>
    <Link href="/bemVindoaEquipe">
    {/* {switchExame ? '/envioExameAdmissional' : "/concluidoEnvioExameAdmissional" }  */}
        <Button  >Ok</Button>
    </Link>
    </Info>
    
    <DivImage>
    <img src="/images/foguete.png" alt="foguete"/>
    </DivImage>
</Wrapper>
  )
}

export default ConcluidoUploadDocumentos