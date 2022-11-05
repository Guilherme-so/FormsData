import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { LockSimple, User } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
// import { useWarning } from "../../context/warning";
import Icon from "../../icon";
// import User from "../../service/user";
import { Input } from "../Inputs";
// import { Modal } from "../Modal";
import { StyledHeader, StyledMenu } from "./style";
import { exit } from "process";
import { AiTwotoneLock } from "react-icons/ai";
import {FaLock} from "react-icons/fa"

const initial = {
  newPassword: "",
  confirmNewPassword: "",
};

export default function Menu() {
  const router = useRouter();
  const [permision, setPermission] = useState<boolean>(true);
  const [gestorOrCandidate, setGestorOrCandidate] = useState<number | null>(
    null
  );
  const [visible, setVisible] = useState<boolean>(false);
  const [data, setData] = useState<any>(initial);
  // const { changePassword } = User()
  // const { setWarning } = useWarning()

  //console.log(permision);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    if (user?.role == 4) {
        setPermission(false)
      setGestorOrCandidate(4);
    } else if (user?.role == 1) {
      setGestorOrCandidate(1);
      setPermission(true)
    }
    // setPermission(user?.role == 1);
  }, []);

  useEffect(() => {
    setData(initial);
  }, [visible]);

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  // const alterPassword = (env:FormEvent) => {
  //     env.preventDefault()

  //     if(data.newPassword !== data.confirmNewPassword) {
  //         setWarning({err:true, msg:"Senhas não são Iguais"})
  //     } else {
  //         changePassword(data.newPassword)
  //         setData(initial)
  //         setVisible(false)
  //     }
  // }

  return (
    <StyledHeader>
      <StyledMenu>
        <div className="img">
          <Image src="/svg/fullLogo.svg" objectFit="contain" layout="fill" />
        </div>

        <nav>
          {permision ? (
            <Link href="/gestor">
              <a className="colaborator">
                <FaLock  className="FaLock" />
                <p>Acessos</p>
              </a>
            </Link>
          ) : (
            <>
              {/* <Link href="/">
                            <a><Icon.Watch /><p>Ponto</p></a>
             </Link> */}
              <Link href="/candidato">
                <a className="colaborator">
                  <img src="/images/user.svg" />
                  <p>Perfil</p>
                </a>
              </Link>
            </>
          )}
        </nav>
        {/* <a onClick={() => setVisible(!visible)}><Icon.Setting /><p>Trocar Senha</p></a> */}
        <a className="sair" onClick={() => logout()}>
          <img src="/images/exit.svg" />
          <p>Sair</p>
        </a>
      </StyledMenu>

      {/* <Modal 
                className="modal" title="Alterar Senha" onSubmit={alterPassword}
                isVisible={visible} setVisible={setVisible}
            >
                <Input 
                    type="password" name="newPassword" label="Nova Senha" 
                    value={data.newPassword} required
                    onChange={(env) => setData({...data, [env.target.name]:env.target.value})}
                />
                <Input type="password" name="confirmNewPassword" label="Confirma Nova Senha" 
                    value={data.confirmNewPassword} required
                    onChange={(env) => setData({...data, [env.target.name]:env.target.value})}
                    // errormsg={error}
                />
                <button type="submit">Salvar</button>
            </Modal> */}
    </StyledHeader>
  );
}
