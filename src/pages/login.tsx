import { useRouter } from "next/router";
import { useState } from "react";
import nookies from "nookies";
import { GetServerSideProps } from "next";

export default function PageLogin() {
  const [password, setPassword] = useState("");
  nookies.set(null, "secretPassword", password, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
  const { push } = useRouter();

  const passwordLength = String(password).length;

  function handleChange(event: React.SyntheticEvent) {
    event.preventDefault();

    if (passwordLength > 3 && passwordLength <= 9) {
      alert("Senha criada com sucesso!");
      push("/dashboard");
    } else {
      return alert("Senha não autorizada!");
    }
  }

  return (
    <div>
      <form onSubmit={handleChange}>
        <input
          type="number"
          name="input-password"
          id=""
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  const secretPassword = "123456789";
  const informedPassword = cookies.secretPassword;

  const isAuthorazed = secretPassword === informedPassword;

  if (isAuthorazed) {
    return {
      redirect: {
        permanent: false,
        destination: "/dashboard",
      },
    };
  }

  return {
    props: {},
  };
};
