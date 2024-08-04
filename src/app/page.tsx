import Link from "next/link";
import Main from "@/components/Layout/Main";
import Section from "@/components/Layout/Section";

export default function Home() {
  return (
    <Main>
      <Section>
        <Link href={"/"}>Home</Link>
        <Link href={"/analyze-ui"}>analyze-ui</Link>
      </Section>
    </Main>
  );
}
