import Link from "next/link";
import { useEffect, useState } from "react";
import LayoutDashboard from "../components/LayoutDashboard";
import {
  Wrapper,
  StyledCollaborator,
  Dados,
  Perfil,
  RightSide,
} from "../styles/gestor";

export default function Gestor() {
  const statusName = ["Nome", "Email", "Visualizar Formulário"];
  const [gestorName, setGestorName] = useState("");
  const [dados, setDados] = useState<any>();

  //console.log(dados);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    setGestorName(user?.name);
  }, []);

  useEffect(() => {
    const fetchCandidate = async () => {
      fetch("https://authorization.api.apigethash.online/users/candidates", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user") as string).access_token,
          "Content-Type": "application/json",
        },
      })
        .then(async (res) => {
          //console.log(res);
          return res.json();
        })
        .then((data) => {
          if(data) {
            //console.log(data)
            setDados(data)
          }
        });
    };
    fetchCandidate();
  }, []);

  return (
    <LayoutDashboard>
      <Wrapper>
        <StyledCollaborator>
          <Dados>
            <div className="tabelaHeader">
              <div className="title">
                <h2>Tabela de acessos</h2>
              </div>

              <div className="statusHint">
                <span>Formulário completo</span>
                <span>Formulário incompleto</span>
              </div>
            </div>

            <div className="statusNomeHeader">
              {statusName.map((name, index) => (
                <p className="statusNome" key={index}>
                  {name}
                </p>
              ))}
            </div>

            {dados?.map((dado: any, index: number) => (
              <div className="statusAbout" key={index}>
                <p>{dado.name}</p>
                <span>{dado.email}</span>
                {/* <span>19/11/2022</span> */}
                <Link href={`/candidatos/users=${dado.id}`} passHref>
                  <a className="visualizar">
                   Visualizar
                  </a>
                </Link>
              </div>
            ))}

          </Dados>

          <RightSide>
            <Perfil>
              <img src="/images/fulano-d-tal.png" alt="fulano-d-tal" />
              <div className="detailProfile">
                <p>{gestorName}</p>
                {/* <span>Dev Front</span> */}
              </div>
            </Perfil>


          </RightSide>
        </StyledCollaborator>
      </Wrapper>
    </LayoutDashboard>
  );
}
