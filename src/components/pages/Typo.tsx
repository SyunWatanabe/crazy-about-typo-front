import React, { memo, VFC } from "react";
import { Container } from "@chakra-ui/react";

import TypoForm from "../organisms/TypoForm";

const Typo: VFC = memo(() => {
  return (
    <Container>
      <TypoForm />
    </Container>
  );
});

export default Typo;
