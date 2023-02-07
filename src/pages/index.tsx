import { Head } from "@/components/Head";
import Link from "next/link";

export default function PageHome() {
  return (
    <>
      <Head metaContent="Hello Next page" title="Home" />

      <main>
        <h1>Hello Next</h1>

        <ul>
          <li>
            <Link href="/posts/hello-underworld">Ir para o Post Xau</Link>
          </li>

          <li>
            <Link href="/posts/hello-world">Ir para o Post Oi</Link>
          </li>

          <li>
            <Link href="/sobre">Ir para o Sobre</Link>
          </li>

          <li>
            <Link href="/login">Ir para o Login</Link>
          </li>

          <li>
            <Link href="/youtube">Ir para o Youtube</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
