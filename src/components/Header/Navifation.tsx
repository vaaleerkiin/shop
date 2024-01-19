"use client";

import { CATEGORY } from "@/constants/CATEGORY";
import { Container, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <>
      <HStack w="100%" as="nav" justifyContent="space-between">
        {CATEGORY.map((el) => (
          <Link
            as={NextLink}
            key={el}
            fontWeight={400}
            fontSize={20}
            href={"/category/" + el}
            color={"/category/" + el === pathname ? "red" : "white"}
          >
            {el}
          </Link>
        ))}
      </HStack>
    </>
  );
};
