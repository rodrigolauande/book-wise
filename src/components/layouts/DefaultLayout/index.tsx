import Head from "next/head";
import { Container, Content } from "./styles"
import { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";

type DefaultLayoutProps = {
    children: ReactNode
    title: string;
  }

export const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
    return (
      <Container>
        <Head>
          <title>{`${title} | BookWise`}</title>
          <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
        </Head>
  
        <Sidebar />
        <Content>
          {children}
        </Content>
      </Container>
    )
  }