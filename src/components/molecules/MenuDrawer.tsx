import React, { memo, VFC } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Flex,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MenuDrawer: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Header</DrawerHeader>

        <DrawerBody>
          <Flex flexDirection="column" textAlign="center">
            <Link
              as={ReactRouterLink}
              to="/"
              onClick={onClose}
              bg="gray.100"
              p={2}
              mb={2}
            >
              Home
            </Link>
            <Link
              as={ReactRouterLink}
              to="/typos"
              onClick={onClose}
              bg="gray.100"
              p={2}
            >
              Typo
            </Link>
          </Flex>
        </DrawerBody>

        <DrawerFooter>
          <div>Footer</div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
});

export default MenuDrawer;
