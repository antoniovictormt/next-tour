import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import nookies from "nookies";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  const secretPassword = "123456789";
  const informedPassword = cookies.secretPassword;

  const isAuthorazed = secretPassword === informedPassword;

  if (!isAuthorazed) {
    return {
      redirect: {
        permanent: false,
        destination: "/login?status=401",
      },
    };
  }

  return {
    props: {},
  };
};

export default function PageDashboard() {
  const { push } = useRouter();

  function LogoutChange() {
    nookies.destroy(null, "secretPassword");
    push("/login");
  }

  return (
    <div>
      <h1>dashboard</h1>

      <button onClick={LogoutChange}>Logout</button>
    </div>
  );
}
