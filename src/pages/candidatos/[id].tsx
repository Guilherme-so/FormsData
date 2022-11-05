import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LayoutDashboard from "../../components/LayoutDashboard";
import { DownloadSimple } from "phosphor-react";
import {
  StyledCollaborator,
  Wrapper,
  Form,
  FormDocs,
  ButtonsWrapper,
  Button,
} from "../../styles/candidato";

export default function Colaborador() {
  const router = useRouter();
  const [formulario, setFormulario] = useState(false);
  const [documentos, setDocumentos] = useState(false);
  const [onboarding, setOnboarding] = useState(false);

  const [userid, setuserId] = useState<any>("");
  const [personName, setPersonName] = useState<string | null>("");
  const [candidateData, setCandidateData] = useState<any>();

  const [name, setName] = useState(candidateData?.user?.name);
  const [phoneNumber, setPhoneNumber] = useState(
    candidateData?.user?.phoneNumber
  );
  const [cpf, setCpf] = useState(candidateData?.user?.cpf);
  const [personalEmail, setPersonalEmail] = useState(
    candidateData?.user?.personalEmail
  );
  const [pisNis, setPisNis] = useState(candidateData?.user?.pisNis);
  const [cep, setCep] = useState(candidateData?.user?.cep);
  const [rua, setRua] = useState(candidateData?.user?.rua);
  const [casaNumero, setCasaNumero] = useState(candidateData?.user?.casaNumero);
  const [bairro, setBairro] = useState(candidateData?.user?.bairro);
  const [apNumero, setApNumero] = useState(candidateData?.user?.apNumero);
  const [uf, setUf] = useState(candidateData?.user?.uf);
  const [banco, setBanco] = useState(candidateData?.user?.bancoNome);
  const [tipoConta, setTipoConta] = useState(candidateData?.user?.tipoConta);
  const [pix, setPix] = useState(candidateData?.user?.pix);
  const [agencia, setAgencia] = useState(candidateData?.user?.agencia);
  const [contaNumero, setContaNumero] = useState(
    candidateData?.user?.contaNumero
  );

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    setPersonName(user?.name);
  }, []);

  const getUserId: any = router.query.id;

  useEffect(() => {
    if (getUserId !== undefined) {
      const userJustNumber = getUserId.replace(/\D/g, "");
      setuserId(userJustNumber);
    }
  }, [getUserId]);

  useEffect(() => {
    const getAllData = async () => {
      await fetch("https://forms.api.apigethash.online/data/find/" + userid)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          //console.log(data);
          setCandidateData(data);
        });
    };
    if (userid !== "") getAllData();
  }, [userid]);

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
              <p>{candidateData?.user?.name}</p>
              {/* <span>Dev Front</span> */}
            </div>
          </div>
        </StyledCollaborator>

        {formulario && (
          <Form>
            <input
              className="userAbout"
              type="text"
              value={name === undefined ? candidateData?.user?.name : name}
              // onChange={(e) => setName(e.target.value)}
              readOnly
            />
            <input
              className="userAbout"
              type="text"
              value={
                phoneNumber === undefined
                  ? candidateData?.user?.phoneNumber
                  : phoneNumber
              }
              // onChange={(e) => setPhoneNumber(e.target.value)}
              readOnly
            />
            <input
              className="userAbout"
              type="text"
              value={cpf === undefined ? candidateData?.user?.cpf : cpf}
              // onChange={(e) => setCpf(e.target.value)}
              readOnly
            />
            <input
              className="userAbout"
              type="text"
              value={
                personalEmail === undefined
                  ? candidateData?.user?.personalEmail
                  : personalEmail
              }
              // onChange={(e) => setPersonalEmail(e.target.value)}
              readOnly
            />
            <input
              className="userAbout"
              type="text"
              value={
                pisNis === undefined ? candidateData?.user?.pisNis : pisNis
              }
              // onChange={(e) => setPisNis(e.target.value)}
              readOnly
            />
            <input
              className="userAbout"
              type="text"
              value={cep === undefined ? candidateData?.address?.cep : cep}
              // onChange={(e) => setCep(e.target.value)}
              readOnly
            />

            <div className="inputDuplo">
              <input
                type="text"
                value={rua === undefined ? candidateData?.address?.rua : rua}
                // onChange={(e) => setRua(e.target.value)}
                readOnly
              />
              <input
                type="text"
                value={
                  casaNumero === undefined
                    ? candidateData?.address?.casaNumero
                    : casaNumero
                }
                // onChange={(e) => setCasaNumero(e.target.value)}
                readOnly
              />
            </div>

            <div className="inputDuploBairro">
              <input
                type="text"
                value={
                  bairro === undefined ? candidateData?.address?.bairro : bairro
                }
                // onChange={(e) => setBairro(e.target.value)}
                readOnly
              />
              <input
                type="text"
                value={
                  apNumero === undefined
                    ? candidateData?.address?.apNumero
                    : apNumero
                }
                // onChange={(e) => setApNumero(e.target.value)}
                readOnly
              />
            </div>

            <input
              className="userAbout"
              type="text"
              value={uf === undefined ? candidateData?.address?.uf : uf}
              // onChange={(e) => setApNumero(e.target.value)}
              readOnly
            />

            <input
              className="pix"
              type="text"
              value={pix === undefined ? candidateData?.payment?.pix : pix}
              // onChange={(e) => setPix(e.target.value)}
              readOnly
            />

            <input
              className="userAbout"
              type="text"
              value={
                banco === undefined ? candidateData?.payment?.banco : banco
              } // onChange={(e) => setApNumero(e.target.value)}
              readOnly
            />

            <div className="inputDuploAgenConta">
              <input
                type="text"
                value={
                  agencia === undefined
                    ? candidateData?.payment?.agencia
                    : agencia
                }
                // onChange={(e) => setAgencia(e.target.value)}
                readOnly
              />
              <input
                type="text"
                value={
                  contaNumero === undefined
                    ? candidateData?.payment?.contaNumero
                    : contaNumero
                }
                // onChange={(e) => setContaNumero(e.target.value)}
                readOnly
              />
            </div>

            <input
              className="userAbout"
              type="text"
              value={
                tipoConta === undefined
                  ? candidateData?.payment?.tipoConta
                  : tipoConta
              } // onChange={(e) => setApNumero(e.target.value)}
              readOnly
            />

            {/* <Button onClick={handleEdit}>Editar</Button> */}
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
                >
                  <DownloadSimple weight="bold" size={24} />
                </a>
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
              </ButtonsWrapper>
            </div>
          </FormDocs>
        )}
      </Wrapper>
    </LayoutDashboard>
  );
}
