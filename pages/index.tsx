import {IBM_Plex_Sans} from 'next/font/google'
import {GetServerSideProps} from "next";
import path from "path";
import {promises as fs} from "fs";

const ibm_plex_sans = IBM_Plex_Sans({weight: "400", subsets: ['latin']})

export default function Home({data}) {
    return (
        <main className={ibm_plex_sans.className}>
            <h1>{data.name}</h1>
            <h2>{data.headline}</h2>
        </main>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDirectory + '/profile.json', 'utf8');
    const data = JSON.parse(fileContents);
    
    return {props: {data}}
};