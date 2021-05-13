import React, { memo, VFC } from "react";
import { SimpleGrid } from "@chakra-ui/react";

import TypoItem from "../molecules/TypoItem";

const TypoList: VFC = memo(() => {
  return (
    <SimpleGrid columns={[1, null, 2]} spacing="20px">
      {[...Array(10)].map((i) => {
        return <TypoItem key={i} />;
      })}
    </SimpleGrid>
  );
});

export default TypoList;
