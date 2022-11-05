import {FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Select } from "../components/Inputs";
import LayoutDashboard from "../components/LayoutDashboard";
import { bancos } from "../helpers/bancos";
import { tiposDaConta } from "../helpers/TipoDaConta";
import { siglas } from "../helpers/UfLista";
import { userId } from "../services/user";
import { DownloadSimple } from "phosphor-react";
import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  StyledCollaborator,
  Wrapper,
  Form,
  FormDocs,
  ButtonsWrapper,
  Button,
} from "../styles/candidato";

export default function Colaborador() {
  const router = useRouter();
  const [formulario, setFormulario] = useState(false);
  const [documentos, setDocumentos] = useState(false);
  const [onboarding, setOnboarding] = useState(false);

  const [userid, setuserId] = useState("");
  const [personName, setPersonName] = useState<string | null>("");
  const [candidateData, setCandidateData] = useState<any>();

  const [name, setName] = useState(candidateData?.user.name);
  const [phoneNumber, setPhoneNumber] = useState(candidateData?.user.phoneNumber);
  const [cpf, setCpf] = useState(candidateData?.user.cpf);
  const [personalEmail, setPersonalEmail] = useState(candidateData?.user.personalEmail);
  const [pisNis, setPisNis] = useState(candidateData?.user.pisNis);
  const [cep, setCep] = useState(candidateData?.user.cep);
  const [rua, setRua] = useState(candidateData?.user.rua);
  const [casaNumero, setCasaNumero] = useState(candidateData?.user.casaNumero);
  const [bairro, setBairro] = useState(candidateData?.user.bairro);
  const [apNumero, setApNumero] = useState(candidateData?.user.apNumero);
  const [uf, setUf] = useState(candidateData?.user.uf);
  const [banco, setBanco] = useState(candidateData?.user.bancoNome);
  const [tipoConta, setTipoConta] = useState(candidateData?.user.tipoConta);
  const [pix, setPix] = useState(candidateData?.user.pix);
  const [agencia, setAgencia] = useState(candidateData?.user.agencia);
  const [contaNumero, setContaNumero] = useState(candidateData?.user.contaNumero);

  const [editarDocumento, setEditarDocumento] = useState<any>({
    name: null,
    file: null
  })

  // //console.log(editarDocumento)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    setPersonName(user?.name);
  }, []);

  useEffect(() => {
    userId(setuserId);
  }, []);

  useEffect(() => {
    const getAllData = async () => {
      await fetch("https://forms.api.apigethash.online/data/find/" + userid)
        .then((res) => {
          //console.log();
          return res.json();
        })
        .then((data) => {
          // //console.log(data)
          setCandidateData(data);
        });
    };
    if (userid !== "") getAllData();
  }, [userid]);

  const handleEdit = async () => {
    await fetch("https://forms.api.apigethash.online/data/update/" + userid, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phoneNumber,
        cpf,
        personalEmail,
        pisNis,
        cep,
        rua,
        casaNumero,
        bairro,
        apNumero,
        uf,
        banco,
        tipoConta,
        pix,
        agencia,
        contaNumero,
      }),
    });
  };

  const downloadArquivo = (url: any) => {
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = url;
        alink.click();
      });
    });
  };

  const editarDoc = async() => {
    let formData: any = new FormData()
    const id = toast.loading("Por favor aguarde!")

    formData.append(`${editarDocumento.name}`, editarDocumento.file)

    axios.post('https://forms.api.apigethash.online/documents/uploadFields/' + userid , formData)
    .then(res => { 
      //console.log(res)
      toast.update(id, {render: "Alteração feita com sucesso!", type: "success", isLoading: false, autoClose: 5000 });
      if(res.status == 201) setEditarDocumento({
        name: null,
        file: null
      })
    }).catch(err => {
        toast.update(id, {render: "Opps, Algo deu errado!", type: "error", isLoading: false, autoClose: 5000 });
    });
  }

  return (
    <LayoutDashboard>
      <Wrapper>
        <StyledCollaborator>
          <div className="dados">
            {formulario === true ? (
              <div className="formulario">
                <p>Meu formulário</p>

                <button onClick={() => setFormulario((prev) => !prev)}>
                  Fechar
                </button>
              </div>
            ) : documentos === true ? (
              <div className="documentos">
                <p>Meus documentos</p>

                <button onClick={() => setDocumentos((prev) => !prev)}>
                Fechar
                </button>
              </div>
            ) : onboarding === true ? (
              <div className="onboarding">
                <p>Onboarding</p>
              </div>
            ) : (
              <div>
                <div className="formulario">
                  <p>Meu formulário</p>

                  <button onClick={() => setFormulario((prev) => !prev)}>
                    Visualizar
                  </button>
                </div>

                <div className="documentos">
                  <p>Meus documentos</p>

                  <button onClick={() => setDocumentos((prev) => !prev)}>
                    Visualizar
                  </button>
                </div>

                <div className="onboarding">
                  <p>Onboarding</p>

                  <button onClick={() => router.push("/bemVindoaEquipe")}>
                    Visualizar
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="perfil">
            <img src="/images/fulano-d-tal.png" alt="fulano-d-tal" />
            <div className="detailProfile">
              <p>{personName}</p>
              {/* <span>Dev Front</span> */}
            </div>
          </div>
        </StyledCollaborator>

        {formulario && (
          <Form>
            <input
              className="userAbout"
              type="text"
              value={name === undefined ? candidateData?.user.name : name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="userAbout"
              type="text"
              value={
                phoneNumber === undefined
                  ? candidateData?.user.phoneNumber
                  : phoneNumber
              }
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              className="userAbout"
              type="text"
              value={cpf === undefined ? candidateData?.user.cpf : cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <input
              className="userAbout"
              type="text"
              value={
                personalEmail === undefined
                  ? candidateData?.user.personalEmail
                  : personalEmail
              }
              onChange={(e) => setPersonalEmail(e.target.value)}
            />
            <input
              className="userAbout"
              type="text"
              value={pisNis === undefined ? candidateData?.user.pisNis : pisNis}
              onChange={(e) => setPisNis(e.target.value)}
            />
            <input
              className="userAbout"
              type="text"
              value={cep === undefined ? candidateData?.address.cep : cep}
              onChange={(e) => setCep(e.target.value)}
            />

            <div className="inputDuplo">
              <input
                type="text"
                value={rua === undefined ? candidateData?.address.rua : rua}
                onChange={(e) => setRua(e.target.value)}
              />
              <input
                type="text"
                value={
                  casaNumero === undefined
                    ? candidateData?.address.casaNumero
                    : casaNumero
                }
                onChange={(e) => setCasaNumero(e.target.value)}
              />
            </div>

            <div className="inputDuploBairro">
              <input
                type="text"
                value={
                  bairro === undefined ? candidateData?.address.bairro : bairro
                }
                onChange={(e) => setBairro(e.target.value)}
              />
              <input
                type="text"
                value={
                  apNumero === undefined
                    ? candidateData?.address.apNumero
                    : apNumero
                }
                onChange={(e) => setApNumero(e.target.value)}
              />
            </div>

            <span className="groupInput3">
              <select className="select" id="uf" value={uf}>
                <option value=""></option>
                {siglas.map((sigla) => (
                  <option className="options" key={sigla} value={sigla}>
                    {sigla}
                  </option>
                ))}
              </select>
              <Select
                className="selectS"
                label="UF*"
                onChange={setUf}
                value={uf === undefined ? candidateData?.address.uf : uf}
                required
                optionString={siglas}
              />
            </span>

            <input
              className="pix"
              type="text"
              value={pix === undefined ? candidateData?.payment.pix : pix}
              onChange={(e) => setPix(e.target.value)}
            />

            <span className="groupInputBanco">
              <select className="select" id="nomeDoBanco" value={banco}>
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
                required
                onChange={setBanco}
                value={
                  banco === undefined ? candidateData?.payment.banco : banco
                }
                optionString={bancos}
              />
            </span>

            <div className="inputDuploAgenConta">
              <input
                type="text"
                value={
                  agencia === undefined
                    ? candidateData?.payment.agencia
                    : agencia
                }
                onChange={(e) => setAgencia(e.target.value)}
              />
              <input
                type="text"
                value={
                  contaNumero === undefined
                    ? candidateData?.payment.contaNumero
                    : contaNumero
                }
                onChange={(e) => setContaNumero(e.target.value)}
              />
            </div>

            <span className="groupInput3">
              <select className="select" id="tipoDaConta" value={tipoConta}>
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
                required
                onChange={setTipoConta}
                value={
                  tipoConta === undefined
                    ? candidateData?.payment.tipoConta
                    : tipoConta
                }
                optionString={tiposDaConta}
              />
            </span>

            <Button onClick={handleEdit}>Editar</Button>
            {/* <Button>Salvar</Button> */}
          </Form>
        )}

        {documentos && (
          <FormDocs>
            <div className="formulario">
              <p>
                Carteira de Identidade <span>(Frente e Verso)</span>
              </p>

              <ButtonsWrapper>
                <a
                  target="_blank"  rel="noreferrer"
                  href={`https://forms.api.apigethash.online/documents/docs/${userid}-identidade.pdf`}
                >
                  <button>Visualizar</button>
                </a>
                <a
                  onClick={() =>
                    downloadArquivo(
                      `https://forms.api.apigethash.online/documents/docs/${userid}-identidade.pdf`
                    )
                  }
                >
                  <DownloadSimple weight="bold" size={24} />
                </a>
                {editarDocumento?.name !== 'identidade'   ? (
                  <button className="editar">
                    <input className="inputFileHidden" 
                    onChange={(e:any) => setEditarDocumento({...editarDocumento,
                      name: 'identidade',
                      file: e.target.files[0]
                    })}
                    type="file" 
                    id='identidade'
                    name="identidade" />
                    <label htmlFor="identidade">Editar</label>
                  </button>
                  ) : (
                  <button className="salvar" onClick={() => editarDoc()}>Salvar</button>
                )}

              </ButtonsWrapper>
            </div>
            <div className="formulario">
              <p>Certidão de Nascimento ou Casamento</p>

              <ButtonsWrapper>
                <a
                  target="_blank"  rel="noreferrer"
                  href={`https://forms.api.apigethash.online/documents/docs/${userid}-certidao.pdf`}
                >
                  <button>Visualizar</button>
                </a>
                <a
                  onClick={() =>
                    downloadArquivo(
                      `https://forms.api.apigethash.online/documents/docs/${userid}-certidao.pdf`
                    )
                  }
                >
                  <DownloadSimple weight="bold" size={24} />
                </a>

                {editarDocumento?.name !== 'certidao'  ? (
                  <button className="editar">
                    <input className="inputFileHidden" 
                    onChange={(e:any) => setEditarDocumento({...editarDocumento,
                      name: 'certidao',
                      file: e.target.files[0]
                    })}
                    type="file" 
                    id='certidao'
                    name="certidao" />
                    <label htmlFor="certidao">Editar</label>
                  </button>
                  ) : (
                  <button className="salvar" onClick={() => editarDoc()}>Salvar</button>
                )}
              </ButtonsWrapper>
            </div>

            <div className="formulario">
              <p>
                Carteira de trabalho
                <span>(digital ou fisica - Frente e Verso)</span>
              </p>

              <ButtonsWrapper>
                <a
                  target="_blank"  rel="noreferrer"
                  href={`https://forms.api.apigethash.online/documents/docs/${userid}-carteira-trabalho.pdf`}
                >
                  <button>Visualizar</button>
                </a>
                <a
                  onClick={() =>
                    downloadArquivo(
                      `https://forms.api.apigethash.online/documents/docs/${userid}-carteira-trabalho.pdf`
                    )
                  }
                >
                  <DownloadSimple weight="bold" size={24} />
                </a>
                {editarDocumento?.name !== 'carteira-trabalho'  ? (
                  <button className="editar">
                    <input className="inputFileHidden" 
                    onChange={(e:any) => setEditarDocumento({...editarDocumento,
                      name: 'carteira-trabalho',
                      file: e.target.files[0]
                    })}
                    type="file" 
                    id='carteira-trabalho'
                    name="carteira-trabalho" />
                    <label htmlFor="carteira-trabalho">Editar</label>
                  </button>
                  ) : (
                  <button className="salvar" onClick={() => editarDoc()}>Salvar</button>
                )}
              </ButtonsWrapper>
            </div>

            <div className="formulario">
              <p>Título de Eleitor (Obrigatório para maiores de 18 anos)</p>
              <ButtonsWrapper>
                <a
                  target="_blank"  rel="noreferrer"
                  href={`https://forms.api.apigethash.online/documents/docs/${userid}-titulo-eleitor.pdf`}
                >
                  <button>Visualizar</button>
                </a>
                <a
                  onClick={() =>
                    downloadArquivo(
                      `https://forms.api.apigethash.online/documents/docs/${userid}-titulo-eleitor.pdf`
                    )
                  }
                  target="_blank"  rel="noreferrer"
                >
                  <DownloadSimple weight="bold" size={24} />
                </a>
                {editarDocumento?.name !== 'titulo-eleitor'  ? (
                  <button className="editar">
                    <input className="inputFileHidden" 
                    onChange={(e:any) => setEditarDocumento({...editarDocumento,
                      name: 'titulo-eleitor',
                      file: e.target.files[0]
                    })}
                    type="file" 
                    id='titulo-eleitor'
                    name="titulo-eleitor" />
                    <label htmlFor="titulo-eleitor">Editar</label>
                  </button>
                  ) : (
                  <button className="salvar" onClick={() => editarDoc()}>Salvar</button>
                )}
              </ButtonsWrapper>
            </div>

            <div className="formulario">
              <p>
                Certificado de Reservista (Obrigatório para maiores de 18 anos)
              </p>

              <ButtonsWrapper>
                <a
                  target="_blank"  rel="noreferrer"
                  href={`https://forms.api.apigethash.online/documents/docs/${userid}-certificado-reservista.pdf`}
                >
                  <button>Visualizar</button>
                </a>
                <a
                  onClick={() =>
                    downloadArquivo(
                      `https://forms.api.apigethash.online/documents/docs/${userid}-certificado-reservista.pdf`
                    )
                  }
                >
                  <DownloadSimple weight="bold" size={24} />
                </a>
                {editarDocumento?.name !== 'certificado-reservista'  ? (
                  <button className="editar">
                    <input className="inputFileHidden" 
                    onChange={(e:any) => setEditarDocumento({...editarDocumento,
                      name: 'certificado-reservista',
                      file: e.target.files[0]
                    })}
                    type="file" 
                    id='certificado-reservista'
                    name="certificado-reservista" />
                    <label htmlFor="certificado-reservista">Editar</label>
                  </button>
                  ) : (
                  <button className="salvar" onClick={() => editarDoc()}>Salvar</button>
                )}
              </ButtonsWrapper>
            </div>

            <div className="formulario">
              <p>Comprovante de Residência</p>

              <ButtonsWrapper>
                <a
                  target="_blank"  rel="noreferrer"
                  href={`https://forms.api.apigethash.online/documents/docs/${userid}-comprovante-residencia.pdf`}
                >
                  <button>Visualizar</button>
                </a>
                <a
                  onClick={() =>
                    downloadArquivo(
                      `https://forms.api.apigethash.online/documents/docs/${userid}-comprovante-residencia.pdf`
                    )
                  }
                >
                  <DownloadSimple weight="bold" size={24} />
                </a>
                {editarDocumento?.name !== 'comprovante-residencia'  ? (
                  <button className="editar">
                    <input className="inputFileHidden" 
                    onChange={(e:any) => setEditarDocumento({...editarDocumento,
                      name: 'comprovante-residencia',
                      file: e.target.files[0]
                    })}
                    type="file" 
                    id='comprovante-residencia'
                    name="comprovante-residencia" />
                    <label htmlFor="comprovante-residencia">Editar</label>
                  </button>
                  ) : (
                  <button className="salvar" onClick={() => editarDoc()}>Salvar</button>
                )}
              </ButtonsWrapper>
            </div>

            <div className="formulario">
              <p>Comprovante de Escolaridade</p>

              <ButtonsWrapper>
                <a
                  target="_blank"  rel="noreferrer"
                  href={`https://forms.api.apigethash.online/documents/docs/${userid}-comprovante-escolaridade.pdf`}
                >
                  <button>Visualizar</button>
                </a>
                <a
                  onClick={() =>
                    downloadArquivo(
                      `https://forms.api.apigethash.online/documents/docs/${userid}-comprovante-escolaridade.pdf`
                    )
                  }
                >
                  <DownloadSimple weight="bold" size={24} />
                </a>
                {editarDocumento?.name !== 'comprovante-escolaridade'  ? (
                  <button className="editar">
                    <input className="inputFileHidden" 
                    onChange={(e:any) => setEditarDocumento({...editarDocumento,
                      name: 'comprovante-escolaridade',
                      file: e.target.files[0]
                    })}
                    type="file" 
                    id='comprovante-escolaridade'
                    name="comprovante-escolaridade" />
                    <label htmlFor="comprovante-escolaridade">Editar</label>
                  </button>
                  ) : (
                  <button className="salvar" onClick={() => editarDoc()}>Salvar</button>
                )}
              </ButtonsWrapper>
            </div>

            <div className="formulario">
              <p>Cartão de Vacinação dos filhos menores de sete anos</p>

              <ButtonsWrapper>
                <a
                  target="_blank"  rel="noreferrer"
                  href={`https://forms.api.apigethash.online/documents/docs/${userid}-cartao-vacinacao.pdf`}
                >
                  <button>Visualizar</button>
                </a>
                <a
                  onClick={() =>
                    downloadArquivo(
                      `https://forms.api.apigethash.online/documents/docs/${userid}-cartao-vacinacao.pdf`
                    )
                  }
                >
                  <DownloadSimple weight="bold" size={24} />
                </a>
                {editarDocumento?.name !== 'cartao-vacinacao'  ? (
                  <button className="editar">
                    <input className="inputFileHidden" 
                    onChange={(e:any) => setEditarDocumento({...editarDocumento,
                      name: 'cartao-vacinacao',
                      file: e.target.files[0]
                    })}
                    type="file" 
                    id='cartao-vacinacao'
                    name="cartao-vacinacao" />
                    <label htmlFor="cartao-vacinacao">Editar</label>
                  </button>
                  ) : (
                  <button className="salvar" onClick={() => editarDoc()}>Salvar</button>
                )}
              </ButtonsWrapper>
            </div>

            <div className="formulario">
              <p>Comprovante de Dados Bancários</p>

              <ButtonsWrapper>
                <a
                  target="_blank"  rel="noreferrer"
                  href={`https://forms.api.apigethash.online/documents/docs/${userid}-comprovante-dados-bancarios.pdf`}
                >
                  <button>Visualizar</button>
                </a>
                <a
                  onClick={() =>
                    downloadArquivo(
                      `https://forms.api.apigethash.online/documents/docs/${userid}-comprovante-dados-bancarios.pdf`
                    )
                  }
                >
                  <DownloadSimple weight="bold" size={24} />
                </a>
                {editarDocumento?.name !== 'comprovante-dados-bancarios'  ? (
                  <button className="editar">
                    <input className="inputFileHidden" 
                    onChange={(e:any) => setEditarDocumento({...editarDocumento,
                      name: 'comprovante-dados-bancarios',
                      file: e.target.files[0]
                    })}
                    type="file" 
                    id='comprovante-dados-bancarios'
                    name="comprovante-dados-bancarios" />
                    <label htmlFor="comprovante-dados-bancarios">Editar</label>
                  </button>
                  ) : (
                  <button className="salvar" onClick={() => editarDoc()}>Salvar</button>
                )}
              </ButtonsWrapper>
            </div>
          </FormDocs>
        )}
      </Wrapper>
    </LayoutDashboard>
  );
}
