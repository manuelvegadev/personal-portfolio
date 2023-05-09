import path from "path";
import { promises as fs } from "fs";
import Head from "next/head";
import { GetStaticProps } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import classNames from "classnames";
import { Cta, Experiences, Header, Hero, Footer } from "@/modules";
import { Profile } from "@/types";

const fontSans = IBM_Plex_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontMono = JetBrains_Mono({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function Home({ data }: { data: Profile }) {
  return (
    <main className={classNames([fontSans.variable, fontMono.variable])}>
      <Head>
        <title>{`${data.name} - ${data.headline}`}</title>
        <meta name="description" content={data.about} />
      </Head>
      <Header />
      <Hero data={data} />
      <Cta />
      <Experiences data={data} />
      <Footer />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(
    jsonDirectory + "/profile.json",
    "utf8"
  );
  const data = JSON.parse(fileContents);

  return { props: { data } };
};
