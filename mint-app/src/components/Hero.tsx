import { Link, Text, Flex, Heading, Skeleton } from "@chakra-ui/react";
import { BigNumber } from "@ethersproject/bignumber";
import { useTokenBalance } from "@usedapp/core";
import { useEffect, useState } from "react";
import { useTotalSupply } from "../hooks/contract";

const Loading = ({ children, isLoaded }) => <Skeleton mx="2" height="5" width="10" isLoaded={isLoaded}>{ children }</Skeleton>;

export const Hero = ({ title }: { title: string }) => {
  const [initialTotalSupply, setInitialTotalSupply] = useState('');
  const totalSupplyHook = useTotalSupply()
  const totalSupply = totalSupplyHook && totalSupplyHook.toString()
  useEffect(() => {
    setInitialTotalSupply(totalSupply)
  }, [])
  return (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    flexDirection="column"
  >
    <Heading fontSize="6vw">{title}</Heading>
    <Flex>
      <Text>Minted</Text><Loading isLoaded={totalSupply}><Text textAlign="center">{totalSupply}</Text></Loading>
      <Text>out of 20000.</Text>
    </Flex>
    {
      totalSupply && (initialTotalSupply != totalSupply) && <Flex>{+totalSupply - +initialTotalSupply} minted since you loaded.</Flex>
    }
    {/* <Flex>
      <Text>
        <Link
          textDecoration="underline"
          href="https://www.lootproject.com/"
          isExternal
        >
          Loot
        </Link>{" "}
        owners minted:
      </Text>
      <Loading />
    </Flex>
    <Flex>
      <Text>Non-loot owners minted:</Text>
      <Loading />
    </Flex> */}
  </Flex>
)};

Hero.defaultProps = {
  title: "Foes.",
};
