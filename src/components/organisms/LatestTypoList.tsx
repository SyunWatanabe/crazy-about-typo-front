import React, { memo, VFC } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

import TypoItem from "../molecules/TypoItem";

const LatestTypoList: VFC = memo(() => {
  return (
    <>
      <Box
        bg="red.100"
        borderRadius="lg"
        my={4}
        p={2}
        fontSize="md"
        fontWeight="bold"
        color=""
      >
        最新の誤字（10件）
      </Box>
      <SimpleGrid columns={[1, null, 2]} spacing="20px">
        {[...Array(10)].map((i) => {
          return <TypoItem key={i} />;
        })}
      </SimpleGrid>
    </>
  );
});

export default LatestTypoList;
