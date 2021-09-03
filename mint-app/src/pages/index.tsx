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
import { useState } from "react";
import { useEffect } from "react";

const Index = () => {
  const [page, setPage] = useState(0);
  const [tokens, setTokens] = useState([]);
  useEffect(() => {
    const loadTokens = async() => {
      const res = await fetch(`/api/tokens/${page}`);
      const data = await res.json();
      setTokens(data.tokens || []);
    }
    loadTokens()
  }, [page])
  return (
    <Container height="100vh">
      <Hero title={"Foes."} />
      <Main>
        <SimpleGrid columns={8}>
          { page > 0 && <Code cursor="pointer" textAlign="center" m="2" p="2" onClick={() => {setPage(page - 1)}}>Prev &lt;</Code> }
          {tokens.map((token) => (
            <Code key={token.token_id} textAlign="center" m="2" p="2">{token.token_id}</Code>
          ))}
          { tokens.length == 100 && <Code cursor="pointer" textAlign="center" m="2" p="2" onClick={() => {setPage(page + 1)}}>Next &gt;</Code> }
        </SimpleGrid>
      </Main>
    </Container>
  );
};

export default Index;
