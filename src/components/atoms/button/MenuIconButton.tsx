import React, { memo, VFC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  onClick: () => void;
};

const MenuIconButton: VFC<Props> = memo((props) => {
  const { onClick } = props;

  return (
    <HamburgerIcon
      boxSize={6}
      display={{ base: "block", md: "none" }}
      onClick={onClick}
    />
  );
});

export default MenuIconButton;
