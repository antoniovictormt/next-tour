import { Head } from "@/components/Head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import dados from "@/data.json";

export async function getStaticPaths() {
  // const paths = dados.posts.map((actualPost: { slug: string }) => {
  //   return { params: { slug: `${actualPost.slug}` } };
  // });

  return {
    paths: [],
    fallback: "blocking", // can also be true or 'blocking'
  };
}

interface PostProps {
  slug: string;
  title: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug?.toString();

  const post = dados.posts.find((currentPost: PostProps) => {
    if (currentPost.slug === slug) {
      return true;
    }

    return false;
  });

  return {
    props: {
      slug: post?.slug,
      title: post?.title,
    },
    revalidate: 10,
  };
};

interface PagePostProps {
  slug: string;
  title: string;
}

export default function PagePost({ slug, title }: PagePostProps) {
  const pageSlug = String(slug);

  return (
    <>
      <Head metaContent={`Hello ${title} Post page`} title={slug} />

      <main>
        <h1>Hello {pageSlug}</h1>

        <ul>
          <li>
            <Link href="/">Ir para a Home</Link>
          </li>

          <li>
            <Link href="/sobre">Ir para o Sobre</Link>
          </li>
        </ul>

        <img src="/images/avatar.jpeg" alt="Avatar" />
      </main>
    </>
  );
}
