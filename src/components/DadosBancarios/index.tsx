import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import { bancos } from "../../helpers/bancos";
import { tiposDaConta } from "../../helpers/TipoDaConta";
import { GlobalContext } from "../Context";
import { Input, Select } from "../Inputs";
import { Button, Container, Form, Paragraph } from "./styled";

function DadosBancarios() {
  const router = useRouter();
  const theContext = useContext(GlobalContext);
  // @ts-ignore
  const { contextState, setContextState } = theContext;

  const [chavePix, setChavePix] = useState("");
  const [nomeDoBanco, setNomeDoBanco] = useState("");
  const [agencia, setAgencia] = useState("");
  const [numDaConta, setNumDaConta] = useState("");
  const [tipoDaConta, setTipoDaConta] = useState("");
  const [tipoDaContaError, setTipoDaContaError] = useState(false);
  const [warning, setWarning] = useState(false);

  // const dadosBancarios = {
  //   pix: chavePix,
  //   banco: nomeDoBanco,
  //   agencia: agencia,
  //   contaNumero: numDaConta,
  //   tipoConta: tipoDaConta,
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/concluidoFormulario");

    // if (tipoDaConta === "") {
    //   setTipoDaContaError(true);
    // } else {
    //   setTipoDaContaError(false);
    // }

    // await fetch("https://forms.api.apigethash.online/data/fill", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     ...contextState,
    //     pix: chavePix,
    //     banco: nomeDoBanco,
    //     agencia: agencia,
    //     contaNumero: numDaConta,
    //     tipoConta: tipoDaConta,
    //   }),
    // })
    //   .then(async (res) => {
    //     if (tipoDaContaError === false && res.ok) {
    //       router.push("/concluidoFormulario");
    //     } else {
    //       // const resData = await res.json()
    //       setWarning(true);
    //       return;
    //     }
    //   })
    //   .catch((error) => {
    //   });
  };

  return (
    <Container>
      <h1>Dados Bancários</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          className="inputSolo"
          type="text"
          placeholder="Chave Pix*"
          // required
          maxLength={30}
          onInput={(e: any) => (e.target.value = e.target.value.slice(0, 30))}
          onBlur={(event: any) => setChavePix(event.target.value)}
        />
        {/*           
        <Input
          className="inputSolo"
          type="text"
          placeholder="Nome do Banco*"
          required
          maxLength={30}
          onBlur={(event: any) => setNomeDoBanco(event.target.value)}
        /> */}

        <span className="groupInputBanco">
          <select className="select" id="nomeDoBanco" value={nomeDoBanco}>
            <option value=""></option>
            {bancos.map((banco) => (
              <option className="options" key={banco} value={banco}>
                {banco}
              </option>
            ))}
          </select>
          <Select
            className="selectS"
            label="Nome do Banco*"
            // required
            onChange={setNomeDoBanco}
            value={nomeDoBanco}
            optionString={bancos}
          />
        </span>

        <span className="groupInput">
          <Input
            type="number"
            onInput={(e: any) => (e.target.value = e.target.value.slice(0, 6))}
            placeholder="Agência*"
            // required
            maxLength={6}
            onBlur={(event: any) => setAgencia(event.target.value)}
          />
          <Input
            className=""
            type="number"
            onInput={(e: any) => (e.target.value = e.target.value.slice(0, 12))}
            placeholder="Nº da conta*"
            // required
            maxLength={12}
            onBlur={(event: any) => setNumDaConta(event.target.value)}
          />
        </span>

        <span className="groupInput3">
          <select className="select" id="tipoDaConta" value={tipoDaConta}>
            <option value=""></option>
            {tiposDaConta.map((conta) => (
              <option className="options" key={conta} value={conta}>
                {conta}
              </option>
            ))}
          </select>
          <Select
            className="selectS"
            label="Tipo da Conta"
            // required
            onChange={setTipoDaConta}
            value={tipoDaConta}
            optionString={tiposDaConta}
          />
        </span>

        {tipoDaContaError && <Paragraph>Selecione o tipo da conta!</Paragraph>}
        {warning && <Paragraph>CPF, E-mail ou PisNis ja cadastrado</Paragraph>}

        <Button type="submit">Finalizar</Button>
      </Form>
    </Container>
  );
}

export default DadosBancarios;
