import React, { memo, VFC, useState } from "react";
import { Box, Flex, Tag, HStack } from "@chakra-ui/react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { Typo } from "../../types";

const TypoItem: VFC<Typo> = memo((props) => {
  const { typoText, correctText } = props;

  const [liked, setLiked] = useState(false);

  return (
    <Box
      height="100px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={2}
      boxShadow="base"
      _hover={{ cursor: "pointer" }}
    >
      <Flex direction="column">
        <Flex justify="space-between" align="center">
          <Flex mb={2}>
            <HStack>
              <Tag
                size="sm"
                borderRadius="lg"
                variant="solid"
                colorScheme="cyan"
                fontSize="xs"
              >
                仕事
              </Tag>
              <Tag
                size="sm"
                borderRadius="lg"
                variant="solid"
                colorScheme="green"
                fontSize="xs"
              >
                家族
              </Tag>
              <Tag
                size="sm"
                borderRadius="lg"
                variant="solid"
                colorScheme="blue"
                fontSize="xs"
              >
                友達
              </Tag>
            </HStack>
          </Flex>
          <Flex mb={2}>
            <HStack>
              <Box fontSize="xs">詳細を見る</Box>
              <Box
                _hover={{ opacity: 0.8 }}
                mb={2}
                onClick={() => setLiked(!liked)}
              >
                {liked ? (
                  <FavoriteIcon color="secondary" />
                ) : (
                  <FavoriteBorderIcon color="action" />
                )}
              </Box>
            </HStack>
          </Flex>
        </Flex>
        <Flex direction="column">
          <Box>
            <Box as="span" fontSize="sm" mr={2}>
              ❌
            </Box>
            {typoText}
          </Box>
          <Box>
            <Box as="span" fontSize="sm" mr={2}>
              ⭕
            </Box>
            {correctText}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
});

export default TypoItem;
