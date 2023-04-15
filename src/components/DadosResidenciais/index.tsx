import React, { useState,useContext, FormEvent, useEffect } from 'react'
import {useRouter} from "next/router" 
import { Input, Select } from '../Inputs'
import { Button, Container, Form, Paragraph } from './styled'
import { siglas } from '../../helpers/UfLista'
import {GlobalContext} from "../Context/index"
import { codesAndFlags } from '../../helpers/CodesAndFlags'

function DadosResidenciais() {
  const router  = useRouter()
  const theContext = useContext(GlobalContext)

  // @ts-ignore
  const {contextState,setContextState} = theContext

  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')
  const [casaNumber, setCasaNumber] = useState()
  const [bairro, setBairro] = useState('')
  const [apartamento, setApartamento] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')
  
  const [ufError, setUfError] = useState<boolean>(false)

  useEffect(() => {
    if(contextState.adress){
      setCep(contextState.adress.cep)
      setRua(contextState.adress.rua)
      setCasaNumber(contextState.adress.casa_numero)
      setBairro(contextState.adress.bairro)
      setApartamento(contextState.adress.ap_numero)
      setCidade(contextState.adress.cidade)
      setUf(contextState.adress.uf)
    }

  },[contextState])

  // const dadosResidenciais = {
  //   cep: cep,
  //   rua: rua,
  //   casaNumero: casaNumber,
  //   bairro: bairro,
  //   apNumero: apartamento,
  //   cidade: cidade,
  //   uf: uf
  // }




  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    router.push("/formulario/?parte=4")

    // if(uf !== ""){
    // setContextState((s:any) => ({...s, 
    //   cep: cep,
    //   rua: rua,
    //   casaNumero: casaNumber,
    //   bairro: bairro,
    //   apNumero: apartamento,
    //   cidade: cidade,
    //   uf: uf }))
    // router.push("/formulario/?parte=4")
    // }else{
    //   setUfError(true)
    // }
  }

  function checkCep(e: any){
    const cep = e.target.value.replace(/\D/g,'')
    if(cep.length === 8){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      setCidade(data.localidade)
      setUf(data.uf)
      setRua(data.logradouro)
      setBairro(data.bairro)
    })
   }
  }

  return (
    <Container>
        <h1>Dados Residenciais</h1>
        <Form onSubmit={handleSubmit}>

        <Input className='inputSolo' type="number" placeholder='CEP*'
        onInput={(e:any) => e.target.value = e.target.value.slice(0, 8)}
        // required 
        maxLength={8} value={cep} onChange={(event: any) => setCep(event.target.value)}
        // onBlur={checkCep}
        />
        
        <span className='groupInput'>
          <Input type='text' placeholder='Rua*' 
          // required 
          maxLength={50} value={rua} onChange={(event: any) => setRua(event.target.value)}/>
          <Input type='number' 
          onInput={(e:any) => e.target.value = e.target.value.slice(0, 6)}
          placeholder='Número*' 
          // required 
          maxLength={6}  value={casaNumber}  onChange={(event: any) => setCasaNumber(event.target.value)}/>
        </span>

        <span className='groupInputAp'>
          <Input   type='text' placeholder='Bairro*'
          //  required 
           maxLength={50} value={bairro} onChange={(event: any) => setBairro(event.target.value)}/>
          <Input type='text' placeholder='Apt' maxLength={5} value={apartamento} onChange={(event: any) => setApartamento(event.target.value)}/>
        </span>

        <span className='groupInput3'>
          <Input className='Input' type='text' placeholder='Cidade*' 
          // required 
          maxLength={40} value={cidade} onChange={(event: any) => setCidade(event.target.value)}/>          
          <select className='select' id='uf' value={uf} >
            <option value=""></option>
            {
            siglas.map((sigla) => 
              <option className='options' key={sigla} value={sigla}>{sigla}</option>
            )}
            </select>
            <Select className='selectS'  
            label='UF*' 
            onChange={setUf} 
            value={uf} 
            // required 
            optionString={siglas}/>
        </span>

        {ufError && <Paragraph>Selecione a UF</Paragraph>}
        
        <Button type='submit'>Proxímo</Button>
        </Form>
    </Container>
  )
}

export default DadosResidenciais