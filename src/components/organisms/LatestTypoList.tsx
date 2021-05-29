import React, { memo, VFC } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { db } from "../../firebase";
import { Typo } from "../../types";
import TypoItem from "../molecules/TypoItem";

const LatestTypoList: VFC = memo(() => {
  const typosRef = db.collection("typos");
  const getLatestQuery = typosRef.orderBy("createdAt", "desc").limit(10);
  const [values, loading, error] = useCollectionData<Typo>(getLatestQuery, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

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
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {values && (
        <SimpleGrid columns={[1, null, 2]} spacing="20px">
          {values.map((value) => (
            <>
              <TypoItem
                key={value.id}
                id={value.id}
                typoText={value.typoText}
                correctText={value.correctText}
                detailText={value.detailText}
              />
            </>
          ))}
        </SimpleGrid>
      )}
    </>
  );
});

export default LatestTypoList;
