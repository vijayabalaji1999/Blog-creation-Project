import Head from "next/head";
import Image from "next/image";
import { BlogList } from "../components/blogList";
import styles from "../styles/Home.module.css";

export default function Home() {
 return <BlogList />;
}

export const getStaticProps = async () => {
 const blogs = await client.getEntries(),
  //   client.getTags(),
  //   client.getEntries({ "metadata.tags.sys.id[all]": "venkat" }),


 return {
  props: {
   header: header.items[0].fields,
   blog: blogs,
   footer: footer.items,
   //    tags : tags,
   //    query: query,
  },
 };
};
