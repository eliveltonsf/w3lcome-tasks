import styles from "@/styles/Header.module.scss";
import Image from "next/image";
import logo from "../../public/logo-tasks.svg";

interface Header {
  user: string;
}

export default function Header({ user }: Header) {
  return (
    <div className="row">
      <div className="grid-6 py-0">
        <div className={`${styles.logoTask}`}>
          <Image src={logo} alt="Logo Tasks" />
        </div>
      </div>
      <div className={`${styles.profile} grid-6  py-0 mt-5`}>
        <h1 className="mx-2 h4">Olá, {user}.</h1>
        <p className="mx-2 p">Seja bem vindo ao seu painel de tarefas.</p>
      </div>
    </div>
  );
}
