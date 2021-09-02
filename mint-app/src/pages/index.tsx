import {
  Link as ChakraLink,
  Text,
  Code,
  ListItem,
  List,
  SimpleGrid,
} from "@chakra-ui/react";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { GetStaticProps } from "next";

const Index = ({ tokens }: { tokens: any }) => {
  return (
    <Container height="100vh">
      <Hero title={"Foes."} />
      <Main>
        <SimpleGrid columns={8}>
          {tokens.map((token) => (
            <Code textAlign="center" m="2" p="2">{token.token_id}</Code>
          ))}
          <Code cursor="pointer" textAlign="center" m="2" p="2">Next >></Code>
        </SimpleGrid>
      </Main>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}api/tokens`);
  const tokens = await res.json();

  return {
    props: {
      ...tokens,
    },
    revalidate: 60,
  };
};

export default Index;
