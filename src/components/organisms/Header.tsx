import React, { memo, VFC } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Flex, Link, Heading, useDisclosure } from "@chakra-ui/react";
import MenuIconButton from "../atoms/button/MenuIconButton";
import MenuDrawer from "../molecules/MenuDrawer";

const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      bg="cyan.200"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <Flex as="a" pr={2} _hover={{ cursor: "pointer" }} align="center">
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          <Link as={ReactRouterLink} to="/">
            誤字に夢中！
          </Link>
        </Heading>
      </Flex>
      <Flex
        as="a"
        display={{ base: "none", md: "flex" }}
        align="center"
        flexGrow={2}
      >
        <Link mr={2} as={ReactRouterLink} to="/">
          Home
        </Link>
        <Link as={ReactRouterLink} to="/typos">
          Typo
        </Link>
      </Flex>
      <MenuIconButton onClick={onOpen} />
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
});

export default Header;
