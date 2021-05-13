import React, { memo, VFC } from "react";
import { Container } from "@chakra-ui/react";

import LatestTypoList from "../organisms/LatestTypoList";
import PopularTypoList from "../organisms/PopularTypoList";

const Home: VFC = memo(() => {
  return (
    <Container>
      <LatestTypoList />
      <PopularTypoList />
    </Container>
  );
});

export default Home;
