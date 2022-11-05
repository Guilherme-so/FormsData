import React, { FormEvent, useState , useEffect} from "react";
import { Button, Container, Form, Heading } from "../styles/uploadDocumentos";
import { InputFile } from "../components/Inputs";
import { useRouter } from "next/router";
import { userId } from "../services/user";
import axios from "axios"
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function UploadDocuments() {
  const router = useRouter();
  const [identidade, setIdentidade] = useState<any>();
  const [certidaoBornOrMarried, setCertidaoBornOrMarried] = useState<any>();
  const [carteiraDeTrabalho, setCarteiraDeTrabalho] = useState<any>();
  const [tituloDeEleitor, setTituloDeEleitor] = useState<any>();
  const [certificadoDeReservista, setCertificadoDeReservista] = useState<any>();
  const [comprovanteDeResidência, setComprovanteDeResidência] = useState<any>();
  const [comprovanteDeEscolaridade, setComprovanteDeEscolaridade] = useState<any>();
  const [vacinação, setvacinação] = useState<any>();
  const [DadosBancarios, setDadosBancarios] = useState<any>();
  const [userid, setuserId] = useState("");
  const [loading, setLoading] = useState(false)

  
  useEffect(() => {
    userId(setuserId);
  }, []);

  const uploadDocumentosHandler = async(e: FormEvent) => {
    e.preventDefault();

    let formData: any = new FormData()
    formData.append('identidade',identidade)
    formData.append('certidao',certidaoBornOrMarried)
    formData.append('carteira-trabalho',carteiraDeTrabalho )
    formData.append('titulo-eleitor',tituloDeEleitor )
    formData.append('certificado-reservista',certificadoDeReservista )
    formData.append('comprovante-residencia',comprovanteDeResidência)
    formData.append('comprovante-escolaridade',comprovanteDeEscolaridade )
    formData.append('cartao-vacinacao',vacinação )
    formData.append('comprovante-dados-bancarios',DadosBancarios )
    formData.append('exame-admissional', ''),

  axios.post('https://forms.api.apigethash.online/documents/uploadFields/' + userid , formData)

  .then(res => { 

    if(res.status == 201) {
      setLoading(true)
      setTimeout(() => {
        router.push('/concluidoUploadDocumentos')
      }, 5000);
      
    }
  }).catch(err => {
  });


  // .then((res) => {
  //       //console.log(res)
  //       if(res.status == 201) {
  //         router.push('/concluidoUploadDocumentos')
  //       }else {
  //         return
  //       }
  //     })
  //     .catch((err) => {
  //       //console.log(err)
  //     })


  // await fetch('https://forms.api.apigethash.online/documents/uploadFields/' + userid , {
  //     method: "POST", 
  //     headers: { 
  //       'Content-Type': 'multipart/form-data; boundary=MyBoundary'
  //      },
  //     body: formData
  //   })
  //   .then((res) => {
  //     //console.log(res)
  //     if(res.ok) {
  //       router.push('/concluidoUploadDocumentos')
  //     }else {
  //       return
  //     }
  //   })
  //   .catch((err) => {
  //     //console.log(err)
  //   })
  }

  return (
    <Container>
      {loading === false ? (
        <>
      <Heading>
        <h1>Faça o upload</h1>
        <p>Envie os documentos em .pdf e de maneira legível.</p>
      </Heading>
        <Form onSubmit={uploadDocumentosHandler}>
        <InputFile
          id="identidade"
          name="identidade"
          onChange={(e: any) => setIdentidade(e.target.files[0])}
        >
          {identidade ? (
            identidade.name
          ) : (
            <div>
              <span> Carteira de Identidade</span>
              <span>(Frente e Verso)</span>
            </div>
          )}
        </InputFile>

        <InputFile
          id="certidao"
          name="certidao"
          onChange={(e: any) => setCertidaoBornOrMarried(e.target.files[0])}
        >
          {certidaoBornOrMarried ? (
            certidaoBornOrMarried.name
          ) : (
            <span>Certidão de Nascimento ou Casamento</span>
          )}
        </InputFile>

        <InputFile
        id='carteira'
          name="carteira"
          onChange={(e: any) => setCarteiraDeTrabalho(e.target.files[0])}
        >
          {carteiraDeTrabalho ? (
            carteiraDeTrabalho.name
          ) : (
            <div>
              <span>Carteira de trabalho</span>
              <span>(digital ou fisica - Frente e Verso)</span>
            </div>
          )}
        </InputFile>

        <InputFile
        id='titulo'
          name="titulo"
          onChange={(e: any) => setTituloDeEleitor(e.target.files[0])}
        >
          {tituloDeEleitor ? (
            tituloDeEleitor.name
          ) : (
            <div>
              <span>Título de Eleitor</span>
              <span>(Obrigatório para maiores de 18 anos)</span>
            </div>
          )}
        </InputFile>

        <InputFile
        id='reservista'
          name="reservista"
          onChange={(e: any) => setCertificadoDeReservista(e.target.files[0])}
        >
          {certificadoDeReservista ? (
            certificadoDeReservista.name
          ) : (
            <div>
              <span>Certificado de Reservista</span>
              <span>(Obrigatório para maiores de 18 anos)</span>
            </div>
          )}
        </InputFile>

        <InputFile
        id='residencia'
          name="residencia"
          onChange={(e: any) => setComprovanteDeResidência(e.target.files[0])}
        >
          {comprovanteDeResidência ? (
            comprovanteDeResidência.name
          ) : (
            <span>Comprovante de Residência</span>
          )}
        </InputFile>

        <InputFile
        id='escolaridade'
          name="escolaridade"
          onChange={(e: any) => setComprovanteDeEscolaridade(e.target.files[0])}
        >
          {comprovanteDeEscolaridade ? (
            comprovanteDeEscolaridade.name
          ) : (
            <span>Comprovante de Escolaridade</span>
          )}
        </InputFile>

        <InputFile
        id='vacinacao'
          name="vacinacao"
          onChange={(e: any) => setvacinação(e.target.files[0])}
        >
          {vacinação ? (
            vacinação.name
          ) : (
            <span>Cartão de Vacinação dos filhos menores de sete anos</span>
          )}
        </InputFile>

        <InputFile
        id='bancarios'
          name="bancarios"
          onChange={(e: any) => setDadosBancarios(e.target.files[0])}
        >
          {DadosBancarios ? (
            DadosBancarios.name
          ) : (
            <span>Comprovante de Dados Bancários</span>
          )}
        </InputFile>

        <Button type="submit">Enviar Documentos</Button>
      </Form>
      </>
      ) : (
        <div style={{color: "#5C197C", fontSize: "x-large"}}>Documentos esta sendo enviado, Por favor aguarde...</div>
      )}
    </Container>
  );
}

export default UploadDocuments;
