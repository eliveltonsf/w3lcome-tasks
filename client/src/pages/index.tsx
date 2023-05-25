import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Input from "@/components/Input";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "@/styles/User.module.scss";
import showToast from "@/util/getToast";
import { ToastContainer } from "react-toastify";

export default function User() {
  const [user, setUser] = useState("");
  const [errorInput, setErrorInput] = useState(false);

  const router = useRouter();

  const getChangeNameUser = (event: any) => {
    setUser(event.target.value);
  };

  const storeNameAndRedirect = (event: any) => {
    event.preventDefault();

    if (!user) {
      setErrorInput(true);
      showToast("error", "Opa, informe o seu nome.");
    } else {
      localStorage.setItem("@user", user);
      router.push("/home");
    }
  };

  return (
    <>
      <Head>
        <title>W3lcome Tasks</title>
      </Head>

      <main className={styles.background}>
        <div className={styles.containerCentral}>
          <div className="flex-center-column">
            <Image src={logo} alt="Logo Tasks" className={styles.logo} />
            <h4 className="mx-2 h4">
              <span className="py-1 px-2">W3lcome</span> Tasks
            </h4>
          </div>
          <form>
            <Input
              name="user"
              placeholder="Digite seu nome"
              value={user}
              onChange={getChangeNameUser}
              required
              errorInput={{
                status: errorInput,
                message: "Opa, informe o seu nome.",
              }}
            />

            <button
              className={styles.btnPersonalizado}
              onClick={storeNameAndRedirect}
            >
              Continuar...
            </button>
          </form>
        </div>
      </main>
      <ToastContainer />
    </>
  );
}
