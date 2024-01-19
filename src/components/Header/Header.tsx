import { CATEGORY } from "@/constants/CATEGORY";
import { Container, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Navigation } from "./Navifation";

export const Header = ({}: any) => {
  return (
    <Container
      as="header"
      minW="100%"
      minH={16}
      color="white"
      bg="#303030"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="0 24px"
    >
      <style>{`body {background: black }`}</style>
      <Navigation />
    </Container>
  );
};
