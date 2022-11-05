import React, { useState, useContext, useEffect } from "react";

import { Button, Container, Form, Paragraph } from "./styled";
import { Input, Select } from "../Inputs";
import { useRouter } from "next/router";
import { GlobalContext } from "../Context/index";
import { TestaCPF } from "../../helpers/validarCpf";
import { codesAndFlags } from "../../helpers/CodesAndFlags";
import { userId } from "../../services/user";

function DadosPessoais() {
  const router = useRouter();

  const theContext = useContext(GlobalContext);
  //  @ts-ignore
  const { contextState, setContextState } = theContext;

  const [nomeCompleto, setNomeCompleto] = useState("");
  const [numero, setNumero] = useState<number>();
  const [cpf, setFormCpf] = useState<string>("");
  const [email, setEmail] = useState("");
  const [pisOuNis, setPisOuNis] = useState("");
  const [userid, setuserId] = useState('')

  const [cpfError, setCpfError] = useState<boolean>(false);
  const [DDD, SetDDD] = useState({name: "Brazil",dial_code: "+55",code: "BR", image: "/images/brasil-flag.png",});

  useEffect(() => {
    if (contextState.user) {
      setNomeCompleto(contextState.user.name);
      setNumero(contextState.user.phone_number);
      setFormCpf(contextState.user.cpf);
      setEmail(contextState.user.personal_email);
      setPisOuNis(contextState.user.pis_nis);
    }
  }, [contextState]);

  useEffect(() => {
    userId(setuserId)
    // //console.log('test')
  },[])

  // const dadosPessoais = {
  //   userId: userid,
  //   name: nomeCompleto,
  //   phoneNumber: DDD?.dial_code + numero,
  //   cpf: cpf,
  //   personalEmail: email,
  //   pisNis: pisOuNis,
  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isValidCpf = TestaCPF(cpf);
    if (isValidCpf) {
      setContextState({
        userId: userid,
        name: nomeCompleto,
        phoneNumber: DDD?.dial_code + numero,
        cpf: cpf,
        personalEmail: email,
        pisNis: pisOuNis,
      });
      router.push("/formulario/?parte=3");
    } else {
      setCpfError(true);
    }
  };

  return (
    <Container>
      <h1>Dados Pessoais </h1>

      <Form onSubmit={handleSubmit}>
        <Input
          className="inputSmt"
          type="text"
          placeholder="Nome Completo*"
          maxLength={50}
          value={nomeCompleto}
          required
          onChange={(event: any) => setNomeCompleto(event.target.value)}
        />

        <span className="groupInput3">
          <Select
            onChange={SetDDD}
            value={DDD}
            required
            optionObject={codesAndFlags}
          />

          <Input
            className="inputSmt"
            type="number"
            placeholder="Número de Telefone*"
            onInput={(e: any) => (e.target.value = e.target.value.slice(0, 15))}
            maxLength={15}
            value={numero}
            required
            onChange={(event: any) => setNumero(event.target.value)}
          />
        </span>

        <Input
          className="inputSmt"
          type="number"
          placeholder="CPF*"
          required
          onInput={(e: any) => (e.target.value = e.target.value.slice(0, 11))}
          maxLength={11}
          value={cpf}
          onChange={(event: any) => setFormCpf(event.target.value)}
        />
        {cpfError && <Paragraph>Por favor digite um cpf valido!</Paragraph>}

        <Input
          className="inputSmt"
          type="email"
          placeholder="E-mail Pessoal*"
          maxLength={40}
          value={email}
          required
          onChange={(event: any) => setEmail(event.target.value)}
        />
        <Input
          className="inputSmt"
          type="text"
          placeholder="PIS ou NIS"
          maxLength={15}
          value={pisOuNis}
          onChange={(event: any) => setPisOuNis(event.target.value)}
        />
        <Button type="submit">Proxímo</Button>
      </Form>
    </Container>
  );
}

export default DadosPessoais;
