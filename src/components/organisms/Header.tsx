import React, { memo, VFC } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Flex,
  Link,
  Heading,
  useDisclosure,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import MenuIconButton from "../atoms/button/MenuIconButton";
import MenuDrawer from "../molecules/MenuDrawer";
import { auth } from "../../firebase";

const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        toast({
          title: "ログアウトしました",
          status: "success",
          isClosable: true,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  };

  // TODO: state実装
  const isLoggedIn = false;

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
        <Spacer />
        {isLoggedIn ? (
          <>
            <Link mr={2} as={ReactRouterLink} to="/signup">
              Sign Up
            </Link>
            <Link mr={5} as={ReactRouterLink} to="/login">
              Login
            </Link>
          </>
        ) : (
          <Link mr={5} as={ReactRouterLink} to="/" onClick={handleLogout}>
            Logout
          </Link>
        )}
      </Flex>
      <MenuIconButton onClick={onOpen} />
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
});

export default Header;
