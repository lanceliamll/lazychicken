import { NextPage } from "next";
import Layout from "../components/Layout";

type Props = {};

const IndexPage: NextPage<Props> = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>Welcome to this site</p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Example Tailwind Button
    </button>
  </Layout>
);

export default IndexPage;
