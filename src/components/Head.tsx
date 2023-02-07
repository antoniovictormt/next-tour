import HeadNext from "next/head";

interface HeadProps {
  metaContent: string;
  title: string;
}

export function Head({ metaContent, title }: HeadProps) {
  return (
    <HeadNext>
      <title>{title}</title>
      <meta name="description" content={metaContent} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </HeadNext>
  );
}
